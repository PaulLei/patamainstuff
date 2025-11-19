import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import PortfolioCarousel from './components/PortfolioCarousel';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <PortfolioCarousel />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
