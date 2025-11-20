import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import PortfolioCarousel from './components/PortfolioCarousel';
import AboutUs from './components/AboutUs';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <HeroSection />
      <PortfolioCarousel />
      <AboutUs />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
