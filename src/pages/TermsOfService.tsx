import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { 
  Shield, 
  FileText, 
  UserCheck, 
  Stethoscope, 
  Lock, 
  Mail,
  Search,
  ExternalLink,
  Languages
} from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent, Badge, Button } from '../components/ui'

export default function TermsOfService() {
  const { t, i18n } = useTranslation()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeSection, setActiveSection] = useState('introduction')
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const activeSectionRef = useRef('introduction')

  const sections = [
    { id: 'introduction', label: t('sections.introduction'), icon: FileText, color: 'text-primary' },
    { id: 'definitions', label: t('sections.definitions'), icon: Search, color: 'text-accent' },
    { id: 'eligibility', label: t('sections.eligibility'), icon: UserCheck, color: 'text-primary' },
    { id: 'services', label: t('sections.services'), icon: Stethoscope, color: 'text-teal-400' },
    { id: 'patient-data', label: t('sections.patient-data'), icon: Lock, color: 'text-teal-400' },
    { id: 'contact', label: t('sections.contact'), icon: Mail, color: 'text-accent' },
  ]

  // Sync document direction and language code
  useEffect(() => {
    document.dir = i18n.dir()
    document.documentElement.lang = i18n.language
  }, [i18n.language])

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find(entry => entry.isIntersecting && entry.intersectionRatio > 0.3)
        
        if (visibleEntry && visibleEntry.target.id !== activeSectionRef.current) {
          activeSectionRef.current = visibleEntry.target.id
          requestAnimationFrame(() => {
            setActiveSection(visibleEntry.target.id)
          })
        }
      },
      { 
        root: container,
        rootMargin: '-25% 0px -25% 0px', 
        threshold: [0, 0.4] 
      }
    )

    sections.forEach((section) => {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [i18n.language])

  const toggleLanguage = () => {
    const nextLng = i18n.language === 'en' ? 'ar' : 'en'
    i18n.changeLanguage(nextLng)
  }

  const isRtl = i18n.dir() === 'rtl'

  return (
    <div className={`flex h-screen overflow-hidden bg-background text-foreground selection:bg-primary/30 font-en overscroll-none ${isRtl ? 'font-ar' : ''}`}>
      {/* ── Main Content Area ── */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-background/80 px-4 backdrop-blur-md lg:px-8">
          <div>
            <h1 className="text-sm font-medium text-muted-foreground italic">{t('legalCompliance')} / {t('termsOfService')}</h1>
          </div>

          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-primary hover:bg-primary/10 transition-colors"
              onClick={toggleLanguage}
              title={i18n.language === 'en' ? 'العربية' : 'English'}
            >
              <Languages className="h-5 w-5" />
            </Button>
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
              <Shield className="h-8 w-8" />
              <div className="text-xl font-bold tracking-tighter">HealthPortal</div>
            </div>
            <div className="text-right text-xs uppercase tracking-widest text-gray-500">
              {t('officialDocs')} / {t('termsOfService')}
            </div>
          </div>

          <div className="mx-auto max-w-3xl">
            {/* Header Section */}
            <div className={`mb-16 ${isRtl ? 'text-right' : 'text-left lg:text-left'} text-center lg:text-left`}>
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-8 ring-1 ring-primary/20 animate-in zoom-in duration-700">
                <Shield className="h-8 w-8" />
              </div>
              <h2 className={`text-5xl font-bold tracking-tight lg:text-7xl mb-6 bg-gradient-to-br from-foreground to-foreground/50 bg-clip-text text-transparent ${isRtl ? 'lg:text-right' : ''}`}>
                {t('termsOfService')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                {t('readCarefully')} 
                <br />
                {t('lastUpdated')}: <span className="text-foreground">April 19, 2026</span>.
              </p>
            </div>

            {/* Document Content */}
            <div className="space-y-12 pb-32">
              {/* 01. Introduction */}
              <section id="introduction" className="scroll-mt-24">
                <Card className="glass-effect overflow-hidden border-border/40 transition-shadow hover:shadow-xl hover:shadow-primary/5">
                  <CardHeader className="border-b border-border/50 bg-muted/10">
                    <CardTitle className="flex items-center text-2xl">
                      <FileText className={`${isRtl ? 'ml-4' : 'mr-4'} h-6 w-6 text-primary`} />
                      {t('content.introTitle')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-8 text-lg text-muted-foreground leading-relaxed">
                    <p className="mb-6 leading-[1.8]">
                      {t('content.introText1')}
                    </p>
                    <p>
                      {t('content.introText2')}
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* 02. Definitions */}
              <section id="definitions" className="scroll-mt-24">
                <Card className="glass-effect overflow-hidden border-border/40 transition-shadow hover:shadow-xl hover:shadow-primary/5">
                  <CardHeader className="border-b border-border/50 bg-muted/10">
                    <CardTitle className="flex items-center text-2xl">
                      <Search className={`${isRtl ? 'ml-4' : 'mr-4'} h-6 w-6 text-accent`} />
                      {t('content.definitionsTitle')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-8 text-lg">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="rounded-xl bg-secondary/30 p-6 border border-border/40 hover:bg-secondary/40 transition-all duration-300 hover:scale-[1.02]">
                        <h4 className="text-base font-bold mb-2 text-foreground">{t('content.defPlatform')}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{t('content.defPlatformText')}</p>
                      </div>
                      <div className="rounded-xl bg-secondary/30 p-6 border border-border/40 hover:bg-secondary/40 transition-all duration-300 hover:scale-[1.02]">
                        <h4 className="text-base font-bold mb-2 text-foreground">{t('content.defPatientData')}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{t('content.defPatientDataText')}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* 03. Eligibility */}
              <section id="eligibility" className="scroll-mt-24">
                <Card className="glass-effect overflow-hidden border-border/40 transition-shadow hover:shadow-xl hover:shadow-primary/5">
                  <CardHeader className="border-b border-border/50 bg-muted/10">
                    <CardTitle className="flex items-center text-2xl">
                      <UserCheck className={`${isRtl ? 'ml-4' : 'mr-4'} h-6 w-6 text-primary`} />
                      {t('content.eligibilityTitle')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-8 text-lg text-muted-foreground leading-relaxed">
                    <p className="mb-4 font-bold text-foreground">{t('content.usageAuth')}</p>
                    <p className="mb-6">
                      {t('content.eligibilityText')}
                    </p>
                    <div className="p-6 rounded-xl bg-destructive/10 border border-destructive/20 text-base text-destructive-foreground/90 ring-primary/20 ring-offset-background ring-offset-2 transition-all">
                      <strong>{t('content.securityNotice')}</strong> {t('content.securityNoticeText')}
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* 04. Platform Services */}
              <section id="services" className="scroll-mt-24">
                <Card className="glass-effect border-border/40 transition-shadow hover:shadow-xl hover:shadow-primary/5">
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl">
                      <Stethoscope className={`${isRtl ? 'ml-4' : 'mr-4'} h-6 w-6 text-teal-400`} />
                      {t('content.servicesTitle')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 pt-4">
                    <div className="space-y-3 p-4 rounded-xl bg-muted/5 border border-border/20 transition-colors hover:bg-muted/10">
                       <h5 className="text-base font-bold">{t('content.receptionHub')}</h5>
                       <ul className={`text-sm space-y-2 list-disc ${isRtl ? 'pr-5' : 'pl-5'} opacity-70`}>
                         {(t('content.receptionItems', { returnObjects: true }) as string[]).map((item, id) => (
                           <li key={id}>{item}</li>
                         ))}
                       </ul>
                    </div>
                    <div className="space-y-3 p-4 rounded-xl bg-muted/5 border border-border/20 transition-colors hover:bg-muted/10">
                       <h5 className="text-base font-bold">{t('content.managerOps')}</h5>
                       <ul className={`text-sm space-y-2 list-disc ${isRtl ? 'pr-5' : 'pl-5'} opacity-70`}>
                         {(t('content.managerItems', { returnObjects: true }) as string[]).map((item, id) => (
                           <li key={id}>{item}</li>
                         ))}
                       </ul>
                    </div>
                    <div className="space-y-3 p-4 rounded-xl bg-muted/5 border border-border/20 transition-colors hover:bg-muted/10">
                       <h5 className="text-base font-bold">{t('content.financials')}</h5>
                       <ul className={`text-sm space-y-2 list-disc ${isRtl ? 'pr-5' : 'pl-5'} opacity-70`}>
                         {(t('content.financialItems', { returnObjects: true }) as string[]).map((item, id) => (
                           <li key={id}>{item}</li>
                         ))}
                       </ul>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Patient Data & Security */}
              <section id="patient-data" className="scroll-mt-24">
                <Card className="border-primary/30 bg-primary/5 shadow-2xl shadow-primary/5 transition-all hover:bg-primary/10">
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl">
                      <Lock className={`${isRtl ? 'ml-4' : 'mr-4'} h-6 w-6 text-teal-400`} />
                      {t('content.privacyTitle')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-lg pb-10">
                    <p className="mb-6 opacity-80 leading-relaxed">
                      {t('content.privacyText')}
                    </p>
                    <Button variant="outline" size="lg" className="w-full sm:w-auto hover:bg-primary/10 transition-all active:scale-95">
                      {t('viewPrivacyPolicy')} <ExternalLink className={`${isRtl ? 'mr-3' : 'ml-3'} h-4 w-4`} />
                    </Button>
                  </CardContent>
                </Card>
              </section>
              
              {/* Contact block */}
              <section id="contact" className="scroll-mt-24">
                <Card className="bg-secondary/40 border-border/40 transition-shadow hover:shadow-xl hover:shadow-primary/5">
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl text-accent">
                      <Mail className={`${isRtl ? 'ml-4' : 'mr-4'} h-6 w-6`} />
                      {t('legalContact')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-lg text-muted-foreground pb-10">
                    <p className="mb-6">{t('contactCounsel')}</p>
                    <div className="grid gap-4 text-foreground font-mono bg-background/50 p-6 rounded-xl border border-border/20">
                      <div className="flex items-center justify-between">
                        <span className="opacity-60 text-sm">{t('primary')}:</span>
                        <span className="font-bold hover:text-primary transition-colors cursor-pointer">legal@healthportal.hospital</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="opacity-60 text-sm">{t('hqCompliance')}:</span>
                        <span className="font-bold hover:text-primary transition-colors cursor-pointer">compliance-hq@internal.net</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <div className="pt-20 text-center text-sm text-muted-foreground border-t border-border/30">
                {t('allRightsReserved')} © 2026 Health Portal Enterprise Solutions.<br/>
                {t('documentId')}: <span className="font-mono opacity-60">HP-LEGAL-2026-001-REV-I18N</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
