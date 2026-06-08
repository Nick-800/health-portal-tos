import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ChevronLeft, Trash2, CheckCircle2, AlertTriangle } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, Button } from '../components/ui'

export default function DataDeletion() {
  const { t, i18n } = useTranslation()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [reason, setReason] = useState('')
  const [confirm, setConfirm] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<{ name?: string; email?: string; confirm?: string }>({})

  // Sync document direction, language code, and title
  useEffect(() => {
    document.dir = i18n.dir()
    document.documentElement.lang = i18n.language
    document.title = `${t('privacy.dataDeletionTitle')} | HealthPortal`
  }, [i18n, t])

  const isRtl = i18n.dir() === 'rtl'

  const validate = () => {
    const newErrors: typeof errors = {}
    if (!name.trim()) newErrors.name = t('privacy.fieldRequired')
    
    if (!email.trim()) {
      newErrors.email = t('privacy.fieldRequired')
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = t('privacy.invalidEmail')
    }
    
    if (!confirm) newErrors.confirm = t('privacy.mustConfirm')
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setName('')
      setEmail('')
      setReason('')
      setConfirm(false)
    }, 1500)
  }

  return (
    <div className={`flex h-screen overflow-hidden bg-background text-foreground selection:bg-primary/30 overscroll-none font-sans ${isRtl ? 'font-ar' : ''}`}>
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
      
      <div className="flex flex-1 flex-col overflow-hidden relative z-0">
        {/* Header */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-background/80 px-4 backdrop-blur-md lg:px-8">
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-secondary transition-colors text-foreground">
              <ChevronLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-sm font-medium text-muted-foreground italic hidden sm:block">{t('legalCompliance')} / {t('privacy.dataDeletionTitle')}</h1>
          </div>

          <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center ring-1 ring-border/50">
            <span className="text-xs font-bold text-primary">HP</span>
          </div>
        </header>

        {/* Form Container */}
        <main className={`flex-1 overflow-y-auto bg-background/50 p-6 lg:p-16 scroll-smooth will-change-scroll flex items-center justify-center ${isRtl ? 'text-right' : ''}`}>
          <div className="w-full max-w-lg mx-auto">
            {isSubmitted ? (
              <Card className="border-emerald-500/30 bg-background/40 backdrop-blur-md shadow-2xl p-8 text-center animate-in zoom-in duration-500">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 mb-6">
                  <CheckCircle2 className="h-10 w-10 text-emerald-500 animate-bounce" />
                </div>
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                  {t('privacy.successTitle')}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {t('privacy.successMessage')}
                </p>
                <div className="flex justify-center gap-4">
                  <Link to="/" className="w-full">
                    <Button className="w-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                      {t('privacy.backHome')}
                    </Button>
                  </Link>
                </div>
              </Card>
            ) : (
              <Card className="border-border/50 bg-background/30 backdrop-blur-md shadow-2xl">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10 mb-4 text-destructive">
                    <Trash2 className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-3xl font-bold bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
                    {t('privacy.dataDeletionTitle')}
                  </CardTitle>
                  <CardDescription className="mt-2 text-muted-foreground text-sm max-w-sm mx-auto leading-relaxed">
                    {t('privacy.dataDeletionSubtitle')}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold tracking-wide text-foreground/80 block">
                        {t('privacy.formName')}
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={t('privacy.formNamePlaceholder')}
                        className={`w-full px-4 py-3 rounded-lg bg-background/60 border ${
                          errors.name ? 'border-destructive focus:ring-destructive/30' : 'border-border/80 focus:border-primary/50'
                        } focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200`}
                      />
                      {errors.name && (
                        <p className="text-xs text-destructive flex items-center gap-1 mt-1 animate-in fade-in duration-200">
                          <AlertTriangle className="h-3.5 w-3.5" /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold tracking-wide text-foreground/80 block">
                        {t('privacy.formEmail')}
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t('privacy.formEmailPlaceholder')}
                        className={`w-full px-4 py-3 rounded-lg bg-background/60 border ${
                          errors.email ? 'border-destructive focus:ring-destructive/30' : 'border-border/80 focus:border-primary/50'
                        } focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200`}
                      />
                      {errors.email && (
                        <p className="text-xs text-destructive flex items-center gap-1 mt-1 animate-in fade-in duration-200">
                          <AlertTriangle className="h-3.5 w-3.5" /> {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Reason Field */}
                    <div className="space-y-2">
                      <label htmlFor="reason" className="text-sm font-semibold tracking-wide text-foreground/80 block">
                        {t('privacy.formReason')}
                      </label>
                      <textarea
                        id="reason"
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        placeholder={t('privacy.formReasonPlaceholder')}
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg bg-background/60 border border-border/80 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200 resize-none"
                      />
                    </div>

                    {/* Confirmation Checkbox */}
                    <div className="space-y-2">
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={confirm}
                          onChange={(e) => setConfirm(e.target.checked)}
                          className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary/30 cursor-pointer"
                        />
                        <span className="text-xs text-muted-foreground leading-relaxed select-none group-hover:text-foreground/80 transition-colors">
                          {t('privacy.formConfirm')}
                        </span>
                      </label>
                      {errors.confirm && (
                        <p className="text-xs text-destructive flex items-center gap-1 mt-1 animate-in fade-in duration-200">
                          <AlertTriangle className="h-3.5 w-3.5" /> {errors.confirm}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-destructive text-destructive-foreground hover:bg-destructive/90 py-3 font-semibold rounded-lg shadow-lg shadow-destructive/10 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none"
                    >
                      {isSubmitting ? t('privacy.submitting') : t('privacy.btnSubmit')}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
