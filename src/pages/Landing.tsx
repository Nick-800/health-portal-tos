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
  Lock
} from 'lucide-react'

// Mockup Images
import HeroImg from '../assets/images/Device.svg'
import PatientImg from '../assets/images/Device-1.svg'
import StaffImg from '../assets/images/Device-2.svg'
import Logo from '../assets/logo.svg'

// Reusable App Store Buttons
const AppStoreButton = () => (
  <Link to="/" className="flex items-center justify-center gap-3 bg-black text-white px-5 py-2 rounded-xl hover:scale-105 transition-transform shadow-xl shadow-black/20 w-[180px] h-[52px]">
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M15.0063 5.48011C15.8654 4.41721 16.4429 2.94632 16.2863 1.47949C14.9961 1.5332 13.4357 2.36148 12.5404 3.42438C11.7346 4.37039 11.0425 5.86937 11.2307 7.31174C12.6738 7.42337 14.1473 6.54302 15.0063 5.48011ZM16.3653 11.1969C16.3986 8.76104 18.3615 7.61633 18.4552 7.56156C17.3225 5.8647 15.4741 5.61793 14.8696 5.59052C13.3421 5.43387 11.854 6.5168 11.0743 6.5168C10.2946 6.5168 9.07222 5.61399 7.80905 5.6414C6.18579 5.66881 4.67568 6.60875 3.84271 8.08472C2.14668 11.0772 3.4116 15.495 5.06646 17.9309C5.87222 19.1158 6.83447 20.4437 8.08984 20.3889C9.3134 20.3341 9.78262 19.5898 11.2307 19.5898C12.6787 19.5898 13.1165 20.3889 14.3999 20.3615C15.7145 20.3341 16.5433 19.1685 17.3491 17.9857C18.2882 16.587 18.6757 15.2215 18.6917 15.1394C18.6596 15.1118 16.332 14.2076 16.3653 11.1969Z" /></svg>
    <div className="text-left flex flex-col justify-center">
      <span className="text-[10px] font-medium leading-[1.1]">Download on the</span>
      <span className="text-[19px] font-semibold leading-[1.1] tracking-tight mt-[2px]">App Store</span>
    </div>
  </Link>
)

const PlayStoreButton = () => (
  <Link to="/" className="flex items-center justify-center gap-3 bg-black text-white px-5 py-2 rounded-xl hover:scale-105 transition-transform shadow-xl shadow-black/20 w-[180px] h-[52px]">
    <svg viewBox="0 0 512 512" width="24" height="24"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
    <div className="text-left flex flex-col justify-center">
      <span className="text-[10px] font-medium leading-[1.1] uppercase tracking-wide">GET IT ON</span>
      <span className="text-[17px] font-semibold leading-[1.1] tracking-tight mt-[2px]">Google Play</span>
    </div>
  </Link>
)

export default function Landing() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden selection:bg-primary/30">
      
      {/* ── Navbar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="HealthPortal Logo" className="h-10 w-auto drop-shadow-md" />
          <span className="text-2xl font-bold tracking-tight">HealthPortal</span>
        </div>
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-6 text-sm font-medium text-muted-foreground">
          <a href="#how-it-works" className="hover:text-primary transition-colors">{t('landing.howItWorks')}</a>
          <a href="#features" className="hover:text-primary transition-colors">{t('landing.featuresTitle')}</a>
          <Link to="/terms-and-services" className="hover:text-primary transition-colors">{t('termsOfService')}</Link>
        </div>

      </nav>

      {/* ── Hero Section ── */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">

            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
              {t('landing.heroTitle')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
              {t('landing.heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <AppStoreButton />
              <PlayStoreButton />
            </div>
          </div>
          <div className="relative mx-auto lg:mx-0 max-w-md lg:max-w-full animate-float">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
            <img src={HeroImg} alt="HealthPortal App" className="relative z-10 w-full drop-shadow-2xl" />
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
      <section id="download" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="max-w-3xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold">Ready to transform your healthcare experience?</h2>
          <p className="text-xl text-muted-foreground mb-8">Download the app today and manage your care anywhere, anytime.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <AppStoreButton />
            <PlayStoreButton />
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-12 px-6 border-t border-border bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src={Logo} alt="HealthPortal Logo" className="h-10 w-auto opacity-90 hover:opacity-100 transition-opacity" />
              <span className="text-2xl font-bold">HealthPortal</span>
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
          <p>{t('allRightsReserved')} © 2026 HealthPortal Enterprise Solutions.</p>
          <div className="flex items-center gap-4">
             <Globe className="h-4 w-4" />
             <span>{t('landing.multilingual')}</span>
          </div>
        </div>
      </footer>
      
    </div>
  )
}

