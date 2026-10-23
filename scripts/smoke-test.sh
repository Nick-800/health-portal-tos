#!/usr/bin/env bash
# Smoke-test a served build: every SPA route must return the app shell and
# every asset referenced by index.html must load.
#
# Usage: scripts/smoke-test.sh <base-url> [dist-dir]
#   dist-dir      if given, the served index.html must be identical to
#                 dist-dir/index.html (proves the expected release is live)
#   SMOKE_RESOLVE optional "host:port:ip" to pin the hostname to an origin IP
set -euo pipefail

base="${1:?usage: smoke-test.sh <base-url> [dist-dir]}"
base="${base%/}"
dist="${2:-}"

curl_opts=(-sS --fail --max-time 20 --retry 3 --retry-delay 2 --retry-all-errors)
if [[ -n "${SMOKE_RESOLVE:-}" ]]; then
  curl_opts+=(--resolve "$SMOKE_RESOLVE")
fi

routes=(/ /terms-and-services /privacy-policy /data-deletion)

tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT

for route in "${routes[@]}"; do
  curl "${curl_opts[@]}" -o "$tmp/page.html" "$base$route"
  if ! grep -q '<div id="root">' "$tmp/page.html"; then
    echo "FAIL $route: app shell missing" >&2
    exit 1
  fi
  echo "ok   $route"
done

if [[ -n "$dist" ]]; then
  if ! cmp -s "$tmp/page.html" "$dist/index.html"; then
    echo "FAIL served index.html does not match $dist/index.html" >&2
    exit 1
  fi
  echo "ok   index.html matches build"
fi

assets="$(grep -oE '(src|href)="/assets/[^"]+"' "$tmp/page.html" | sed -E 's/^[a-z]+="([^"]+)"$/\1/' | sort -u)"
if [[ -z "$assets" ]]; then
  echo "FAIL index.html references no /assets/ files" >&2
  exit 1
fi
for asset in $assets; do
  curl "${curl_opts[@]}" -o /dev/null "$base$asset"
  echo "ok   $asset"
done

echo "Smoke test passed: $base"
