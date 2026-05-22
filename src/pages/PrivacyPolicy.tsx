import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { 
  Shield, 
  FileText, 
  UserCheck, 
  Lock, 
  Mail,
  Trash2,
  Eye,
  ChevronLeft
} from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent, Badge, Button } from '../components/ui'
import Logo from '../assets/logo.svg'

export default function PrivacyPolicy() {
  const { t, i18n } = useTranslation()
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const sectionKeys = [
    { id: 'policyOverview', icon: FileText, color: 'text-primary' },
    { id: 'dataCollected', icon: Eye, color: 'text-accent' },
    { id: 'dataRetention', icon: Lock, color: 'text-teal-400' },
    { id: 'dataDeletion', icon: Trash2, color: 'text-destructive' },
    { id: 'userRights', icon: UserCheck, color: 'text-primary' },
    { id: 'ccpaRights', icon: Shield, color: 'text-teal-400' },
    { id: 'legalBasis', icon: FileText, color: 'text-accent' },
    { id: 'contact', icon: Mail, color: 'text-primary' },
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
            <h1 className="text-sm font-medium text-muted-foreground italic hidden sm:block">{t('legalCompliance')} / {t('privacyPolicy')}</h1>
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
              {t('officialDocs')} / {t('privacyPolicy')}
            </div>
          </div>

          <div className="mx-auto max-w-3xl">
            {/* Header Section */}
            <div className={`mb-16 ${isRtl ? 'text-right' : 'text-left lg:text-left'} text-center lg:text-left`}>
              <div className="inline-flex h-14 w-auto items-center justify-center mb-8 animate-in zoom-in duration-700">
                <img src={Logo} alt="HealthPortal Logo" className="h-16 w-auto drop-shadow-lg" />
              </div>
              <h2 className={`text-5xl font-bold tracking-tight lg:text-7xl mb-6 bg-gradient-to-br from-foreground to-foreground/50 bg-clip-text text-transparent ${isRtl ? 'lg:text-right' : ''}`}>
                {t('privacyPolicy')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                {t('privacy.introText')} 
                <br />
                {t('lastUpdated')}: <span className="text-foreground">May 22, 2026</span>.
              </p>
            </div>

            {/* Document Content */}
            <div className="space-y-12 mb-16">
              {sectionKeys.map((section, index) => {
                const Icon = section.icon
                return (
                  <Card key={section.id} className="border-border/50 hover:border-border/80 transition-colors bg-background/30 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className={`mt-1 ${section.color}`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-2">
                            {t(`privacy.section${index + 1}Title`)}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-base leading-relaxed text-muted-foreground">
                        {t(`privacy.section${index + 1}Content`)}
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Footer Section */}
            <div className="border-t border-border/50 pt-12 mb-8">
              <h3 className="text-2xl font-bold mb-6">{t('privacy.ccpaCompliance')}</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <Card className="border-border/50 bg-background/30 backdrop-blur-sm p-6">
                  <h4 className="font-bold text-primary mb-2">{t('privacy.ccpaRight1')}</h4>
                  <p className="text-sm text-muted-foreground">{t('privacy.ccpaRightDesc1')}</p>
                </Card>
                <Card className="border-border/50 bg-background/30 backdrop-blur-sm p-6">
                  <h4 className="font-bold text-accent mb-2">{t('privacy.ccpaRight2')}</h4>
                  <p className="text-sm text-muted-foreground">{t('privacy.ccpaRightDesc2')}</p>
                </Card>
                <Card className="border-border/50 bg-background/30 backdrop-blur-sm p-6">
                  <h4 className="font-bold text-teal-400 mb-2">{t('privacy.ccpaRight3')}</h4>
                  <p className="text-sm text-muted-foreground">{t('privacy.ccpaRightDesc3')}</p>
                </Card>
                <Card className="border-border/50 bg-background/30 backdrop-blur-sm p-6">
                  <h4 className="font-bold text-destructive mb-2">{t('privacy.ccpaRight4')}</h4>
                  <p className="text-sm text-muted-foreground">{t('privacy.ccpaRightDesc4')}</p>
                </Card>
              </div>

              <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 mb-8">
                <h4 className="font-bold text-primary mb-3">{t('privacy.dataRetentionTitle')}</h4>
                <p className="text-muted-foreground leading-relaxed mb-3">{t('privacy.dataRetentionContent')}</p>
              </div>

              <div className="bg-accent/10 border border-accent/30 rounded-lg p-6">
                <h4 className="font-bold text-accent mb-3">{t('privacy.contactTitle')}</h4>
                <p className="text-muted-foreground mb-2">{t('privacy.contactContent')}</p>
                <p className="text-muted-foreground mb-1"><strong>{t('legalContact')}:</strong></p>
                <a href="mailto:privacy@healthportal.com" className="text-primary hover:underline">privacy@healthportal.com</a>
              </div>
            </div>

            {/* Legal Navigation */}
            <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-xs text-muted-foreground">{t('allRightsReserved')} © 2026 HealthPortal Enterprise Solutions.</p>
              <div className="flex gap-6">
                <Link to="/terms-and-services" className="text-sm text-muted-foreground hover:text-primary transition-colors hover:underline">
                  {t('termsOfService')}
                </Link>
                <a href="#top" className="text-sm text-muted-foreground hover:text-primary transition-colors hover:underline">
                  {t('backToTop')}
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
