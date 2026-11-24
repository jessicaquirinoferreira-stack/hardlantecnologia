import { useEffect, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { AboutSection } from './components/AboutSection';
import { ClientsSection } from './components/ClientsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { ProjectsSection } from './components/ProjectsSection';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ServicesSection } from './components/ServicesSection';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { WhyChooseSection } from './components/WhyChooseSection';
import { SERVICES, type ServiceItem } from './data/siteData';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [preselectedService, setPreselectedService] = useState<string>(SERVICES[0].title);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRequestQuote = (serviceTitle?: string) => {
    if (serviceTitle) {
      setPreselectedService(serviceTitle);
    }
    setSelectedService(null);
    scrollToSection('contato');
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#0A0A0F] dark:text-slate-100">
        <a
          href="#conteudo-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[#007BFF] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Pular para o conteúdo principal
        </a>

        <Navbar onRequestQuote={() => handleRequestQuote()} />

        <main id="conteudo-principal">
          <HeroSection
            onRequestQuote={() => handleRequestQuote()}
            onExploreServices={() => scrollToSection('servicos')}
          />

          <AboutSection />

          <ServicesSection onSelectService={(svc) => setSelectedService(svc)} />

          <ProjectsSection
            onRequestQuoteForProject={() =>
              handleRequestQuote('Projeto Personalizado / Consultoria')
            }
          />

          <ClientsSection />

          <WhyChooseSection />

          <ContactSection preselectedService={preselectedService} />
        </main>

        <Footer isDark={isDark} onToggleTheme={() => setIsDark((prev) => !prev)} />

        <ServiceDetailModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onRequestServiceQuote={(serviceTitle) => handleRequestQuote(serviceTitle)}
        />

        <WhatsAppFloatingButton />
      </div>
    </MotionConfig>
  );
}
