import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { 
  Shield, 
  FileText, 
  UserCheck, 
  Stethoscope, 
  Lock, 
  Mail,
  Search,
  ChevronLeft
} from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent, Badge, Button } from '../components/ui'
import Logo from '../assets/logo.svg'

export default function TermsOfService() {
  const { t, i18n } = useTranslation()
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const sectionKeys = [
    { id: 'eligibility', icon: UserCheck, color: 'text-primary' },
    { id: 'medicalDisclaimer', icon: Stethoscope, color: 'text-accent' },
    { id: 'appointments', icon: FileText, color: 'text-teal-400' },
    { id: 'payments', icon: Lock, color: 'text-primary' },
    { id: 'privacy', icon: Shield, color: 'text-teal-400' },
    { id: 'notifications', icon: Mail, color: 'text-accent' },
    { id: 'thirdParty', icon: Search, color: 'text-primary' },
    { id: 'prohibited', icon: Shield, color: 'text-destructive' },
    { id: 'suspension', icon: Lock, color: 'text-destructive' },
    { id: 'governingLaw', icon: FileText, color: 'text-accent' },
  ]

  // Sync document direction and language code
  useEffect(() => {
    document.dir = i18n.dir()
    document.documentElement.lang = i18n.language
  }, [i18n.language])

  const isRtl = i18n.dir() === 'rtl'

  return (
    <div className={`flex h-screen overflow-hidden bg-background text-foreground selection:bg-primary/30 overscroll-none font-sans ${isRtl ? 'font-ar' : ''}`}>
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
      {/* ── Main Content Area ── */}
      <div className="flex flex-1 flex-col overflow-hidden relative z-0">
        {/* Header */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-background/80 px-4 backdrop-blur-md lg:px-8">
          <div className="flex items-center gap-4">
            <Link to="/" className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-secondary transition-colors text-foreground">
              <ChevronLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-sm font-medium text-muted-foreground italic hidden sm:block">{t('legalCompliance')} / {t('termsOfService')}</h1>
          </div>

          <div className="flex items-center gap-4">

            <Badge variant="accent" className="hidden sm:flex animate-pulse-slow">{t('version')}</Badge>
            <Button variant="outline" size="sm" className="hidden sm:flex transition-all hover:border-primary/50" onClick={() => window.print()}>
              {t('printDocument')}
            </Button>
            <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center ring-1 ring-border/50">
              <span className="text-xs font-bold text-primary">HP</span>
            </div>
          </div>
        </header>

        {/* Scrollable Document */}
        <main 
          ref={scrollContainerRef}
          className={`flex-1 overflow-y-auto bg-background/50 p-6 lg:p-16 scroll-smooth will-change-scroll ${isRtl ? 'text-right' : ''}`}
        >
          {/* Print-only professional header */}
          <div className="hidden print:flex items-center justify-between border-b-2 border-black pb-4 mb-8">
            <div className="flex items-center gap-2">
              <img src={Logo} alt="HealthPortal Logo" className="h-10 w-auto grayscale" />
              <div className="text-2xl font-bold tracking-tighter">HealthPortal</div>
            </div>
            <div className="text-right text-xs uppercase tracking-widest text-gray-500">
              {t('officialDocs')} / {t('termsOfService')}
            </div>
          </div>

          <div className="mx-auto max-w-3xl">
            {/* Header Section */}
            <div className={`mb-16 ${isRtl ? 'text-right' : 'text-left lg:text-left'} text-center lg:text-left`}>
              <div className="inline-flex h-14 w-auto items-center justify-center mb-8 animate-in zoom-in duration-700">
                <img src={Logo} alt="HealthPortal Logo" className="h-16 w-auto drop-shadow-lg" />
              </div>
              <h2 className={`text-5xl font-bold tracking-tight lg:text-7xl mb-6 bg-gradient-to-br from-foreground to-foreground/50 bg-clip-text text-transparent ${isRtl ? 'lg:text-right' : ''}`}>
                {t('termsOfService')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                {t('readCarefully')} 
                <br />
                {t('lastUpdated')}: <span className="text-foreground">April 30, 2026</span>.
              </p>
            </div>

            {/* Document Content */}
            <div className="space-y-12 pb-32">
              {sectionKeys.map((section) => {
                const Icon = section.icon;
                return (
                  <section id={section.id} key={section.id} className="scroll-mt-24">
                    <Card className="glass-effect overflow-hidden border-border/40 transition-shadow hover:shadow-xl hover:shadow-primary/5">
                      <CardHeader className="border-b border-border/50 bg-muted/10">
                        <CardTitle className="flex items-center text-2xl">
                          <Icon className={`${isRtl ? 'ml-4' : 'mr-4'} h-6 w-6 ${section.color}`} />
                          {t(`sections.${section.id}`)}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-8 text-lg text-muted-foreground leading-relaxed">
                        <p className="mb-6 leading-[1.8]">
                          {t(`content.${section.id}Text`)}
                        </p>
                      </CardContent>
                    </Card>
                  </section>
                )
              })}

              <div className="pt-20 text-center text-sm text-muted-foreground border-t border-border/30">
                {t('allRightsReserved')} © 2026 HealthPortal Enterprise Solutions.<br/>
                {t('documentId')}: <span className="font-mono opacity-60">HP-LEGAL-2026-002-REV-I18N</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
