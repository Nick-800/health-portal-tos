import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { 
  CheckCircle, 
  Search, 
  Calendar, 
  CreditCard, 
  Bell, 
  Users, 
  ShieldCheck, 
  Globe, 
  Zap, 
  MapPin, 
  Activity,
  ArrowRight,
  Lock
} from 'lucide-react'
import { Button } from '../components/ui'

// Mockup Images
import HeroImg from '../assets/images/Device.svg'
import PatientImg from '../assets/images/Device-1.svg'
import StaffImg from '../assets/images/Device-2.svg'

export default function Landing() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden selection:bg-primary/30">
      
      {/* ── Navbar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
            <Activity className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold tracking-tight">Health<span className="text-primary-foreground/40">Portal</span></span>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
          <a href="#how-it-works" className="hover:text-primary transition-colors">{t('landing.howItWorks')}</a>
          <a href="#features" className="hover:text-primary transition-colors">{t('landing.featuresTitle')}</a>
          <Link to="/terms-and-services" className="hover:text-primary transition-colors">{t('termsOfService')}</Link>
        </div>
        <div>
          <Button variant="default" className="shadow-lg shadow-primary/20">
            {t('landing.ctaBook')}
          </Button>
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge variant="accent" className="animate-fade-in-up">v1.0.0 Stable Release</Badge>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
              {t('landing.heroTitle')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
              {t('landing.heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-lg px-8 shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
                {t('landing.ctaBook')} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 hover:bg-secondary/50 transition-colors">
                {t('landing.ctaManage')}
              </Button>
            </div>
          </div>
          <div className="relative mx-auto lg:mx-0 max-w-md lg:max-w-full animate-float">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
            <img src={HeroImg} alt="Health Portal App" className="relative z-10 w-full drop-shadow-2xl" />
          </div>
        </div>
      </section>

      {/* ── How It Works (Patients) ── */}
      <section id="how-it-works" className="py-24 bg-secondary/30 px-6 border-y border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">{t('landing.howItWorks')}</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
               <img src={PatientImg} alt="Patient Flow" className="w-full max-w-md mx-auto drop-shadow-xl rounded-3xl" />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              {[
                { icon: Search, title: t('landing.search'), desc: t('landing.searchDesc'), color: 'text-blue-500' },
                { icon: CheckCircle, title: t('landing.choose'), desc: t('landing.chooseDesc'), color: 'text-green-500' },
                { icon: Calendar, title: t('landing.book'), desc: t('landing.bookDesc'), color: 'text-purple-500' },
                { icon: CreditCard, title: t('landing.pay'), desc: t('landing.payDesc'), color: 'text-yellow-500' },
                { icon: Bell, title: t('landing.updates'), desc: t('landing.updatesDesc'), color: 'text-red-500' }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-6 items-start group">
                  <div className={`mt-1 flex-shrink-0 h-12 w-12 rounded-2xl bg-background border border-border flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:border-primary/50 transition-all ${step.color}`}>
                    <step.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                    <p className="text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Staff & Admins Block ── */}
      <section className="py-24 px-6 overflow-hidden relative">
        <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 -z-10"></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-medium text-sm">
              <Users className="h-4 w-4" /> B2B Healthcare Solution
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold">{t('landing.staffBlock')}</h2>
            <div className="space-y-4">
              {[
                t('landing.receptionistTools'),
                t('landing.scheduling'),
                t('landing.doctorManagement'),
                t('landing.revenueControl')
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm hover:border-accent/50 transition-colors">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="font-semibold text-lg">{item}</span>
                </div>
              ))}
            </div>
            <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground mt-4">
              {t('landing.ctaManage')}
            </Button>
          </div>
          <div className="relative">
            <img src={StaffImg} alt="Staff Dashboard" className="w-full max-w-lg mx-auto drop-shadow-2xl" />
          </div>
        </div>
      </section>

      {/* ── Trust Section ── */}
      <section className="py-20 bg-primary text-primary-foreground px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <ShieldCheck className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-12">{t('landing.trustTitle')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { icon: Lock, label: t('landing.secureLogin') },
              { icon: ShieldCheck, label: t('landing.otpFlows') },
              { icon: Users, label: t('landing.roleAccess') },
              { icon: Bell, label: t('landing.notifications') },
              { icon: Globe, label: t('landing.multilingual') },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
                <item.icon className="h-8 w-8" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature Grid ── */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">{t('landing.featuresTitle')}</h2>
            <p className="text-xl text-muted-foreground">{t('landing.whyChooseUs')}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: t('landing.appointments'), icon: Calendar, color: 'text-blue-500', bg: 'bg-blue-500/10' },
              { title: t('landing.favorites'), icon: CheckCircle, color: 'text-pink-500', bg: 'bg-pink-500/10' },
              { title: t('landing.wallet'), icon: CreditCard, color: 'text-green-500', bg: 'bg-green-500/10' },
              { title: t('landing.paymentMethods'), icon: Lock, color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
              { title: t('landing.scheduleManagement'), icon: Calendar, color: 'text-purple-500', bg: 'bg-purple-500/10' },
              { title: t('landing.alerts'), icon: Bell, color: 'text-red-500', bg: 'bg-red-500/10' },
            ].map((feature, idx) => (
              <div key={idx} className="p-8 rounded-3xl border border-border/50 bg-secondary/20 hover:bg-secondary/40 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
                <div className={`h-14 w-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6`}>
                  <feature.icon className={`h-7 w-7 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-24 bg-secondary/50 px-6 border-t border-border/50">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-3xl lg:text-5xl font-bold">{t('landing.whyChooseUs')}</h2>
          <div className="grid sm:grid-cols-3 gap-8">
             <div className="flex flex-col items-center gap-4">
               <Zap className="h-12 w-12 text-yellow-500" />
               <h3 className="text-xl font-bold">{t('landing.speed')}</h3>
             </div>
             <div className="flex flex-col items-center gap-4">
               <Activity className="h-12 w-12 text-primary" />
               <h3 className="text-xl font-bold">{t('landing.convenience')}</h3>
             </div>
             <div className="flex flex-col items-center gap-4">
               <MapPin className="h-12 w-12 text-accent" />
               <h3 className="text-xl font-bold">{t('landing.localAccess')}</h3>
             </div>
          </div>
        </div>
      </section>

      {/* ── CTAs ── */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="max-w-3xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold">Ready to transform your healthcare experience?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button size="lg" className="text-lg px-8 shadow-xl shadow-primary/20">
              {t('landing.ctaBook')}
            </Button>
            <Button size="lg" variant="secondary" className="text-lg px-8 border border-border/50">
              {t('landing.ctaManage')}
            </Button>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-12 px-6 border-t border-border bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Activity className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">HealthPortal</span>
            </div>
            <p className="text-muted-foreground max-w-sm">
              {t('landing.heroSubtitle')}
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wider text-sm opacity-60">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/terms-and-services" className="text-muted-foreground hover:text-primary transition-colors">{t('landing.footerTerms')}</Link></li>
              <li><Link to="/terms-and-services#privacy" className="text-muted-foreground hover:text-primary transition-colors">{t('landing.footerPrivacy')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wider text-sm opacity-60">Help</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t('landing.footerSupport')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t('landing.footerContact')}</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-border/50 text-center text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-4">
          <p>{t('allRightsReserved')} © 2026 Health Portal Enterprise Solutions.</p>
          <div className="flex items-center gap-4">
             <Globe className="h-4 w-4" />
             <span>{t('landing.multilingual')}</span>
          </div>
        </div>
      </footer>
      
    </div>
  )
}

function Badge({ children, variant, className }: { children: React.ReactNode, variant?: string, className?: string }) {
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${variant === 'accent' ? 'bg-accent/10 text-accent ring-1 ring-accent/20' : 'bg-primary/10 text-primary ring-1 ring-primary/20'} ${className}`}>
      {children}
    </span>
  )
}
