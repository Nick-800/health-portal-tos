#!/usr/bin/env bash
# Release-based deploys over SSH. The server keeps every build under
# releases/<id>/ and nginx serves the `current` (production) and `staging`
# symlinks, so switching or rolling back a channel is one atomic rename.
#
# Usage:
#   scripts/deploy.sh upload   <dist-dir> <release-id>
#   scripts/deploy.sh activate <current|staging> <release-id>
#   scripts/deploy.sh release  <current|staging>      # prints the active release id
#   scripts/deploy.sh prune    <keep>                  # deletes old, inactive releases
#
# Env: DEPLOY_HOST, DEPLOY_USER, DEPLOY_PATH (SSH auth comes from the agent / ~/.ssh)
set -euo pipefail

: "${DEPLOY_HOST:?}" "${DEPLOY_USER:?}" "${DEPLOY_PATH:?}"
target="$DEPLOY_USER@$DEPLOY_HOST"

remote() { ssh -o BatchMode=yes "$target" "$@"; }

check_id() {
  [[ "$1" =~ ^[A-Za-z0-9._-]+$ ]] || { echo "invalid release id: $1" >&2; exit 1; }
}

check_channel() {
  [[ "$1" == current || "$1" == staging ]] || { echo "invalid channel: $1" >&2; exit 1; }
}

case "${1:-}" in
  upload)
    dist="${2:?dist-dir}"; id="${3:?release-id}"; check_id "$id"
    [[ -f "$dist/index.html" ]] || { echo "$dist/index.html not found" >&2; exit 1; }
    remote "mkdir -p '$DEPLOY_PATH/releases/$id'"
    rsync -az --delete --chmod=D755,F644 -e "ssh -o BatchMode=yes" "$dist/" "$target:$DEPLOY_PATH/releases/$id/"
    # rsync -a copies the build dir's mtime; prune orders releases by upload time
    remote "touch '$DEPLOY_PATH/releases/$id'"
    echo "uploaded release $id"
    ;;
  activate)
    channel="${2:?channel}"; id="${3:?release-id}"; check_channel "$channel"; check_id "$id"
    remote "cd '$DEPLOY_PATH' && test -f 'releases/$id/index.html' && ln -sfn 'releases/$id' '.$channel.tmp' && mv -Tf '.$channel.tmp' '$channel'"
    echo "$channel -> $id"
    ;;
  release)
    channel="${2:?channel}"; check_channel "$channel"
    remote "basename \"\$(readlink '$DEPLOY_PATH/$channel')\""
    ;;
  prune)
    keep="${2:?keep}"
    [[ "$keep" =~ ^[0-9]+$ ]] || { echo "keep must be a number" >&2; exit 1; }
    remote "cd '$DEPLOY_PATH/releases' && active=\"\$(basename \"\$(readlink ../current)\") \$(basename \"\$(readlink ../staging)\")\" \
      && ls -1t | tail -n +$((keep + 1)) | while read -r r; do case \" \$active \" in *\" \$r \"*) ;; *) rm -rf -- \"\$r\" && echo \"pruned \$r\";; esac; done"
    ;;
  *)
    sed -n '2,13p' "$0" >&2
    exit 64
    ;;
esac
