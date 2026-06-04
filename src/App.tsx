import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactFooter } from './components/ContactFooter';
import { FAQSection } from './components/FAQSection';
import { ScrapbookGallery } from './components/ScrapbookGallery';
import { FloatingBookingButton } from './components/FloatingBookingButton';
import { useEffect } from 'react';
import Lenis from 'lenis';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF0F5] text-gray-900 font-sans selection:bg-girl-pink selection:text-white">
      {/* Fixed Background Emojis */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[30%] left-[10%] text-4xl animate-float opacity-50 hidden lg:block">✨</div>
        <div className="absolute bottom-[20%] left-[5%] text-5xl animate-float-delayed opacity-40 hidden lg:block">🎀</div>
        <div className="absolute top-[30%] right-[15%] text-4xl animate-float opacity-60 hidden lg:block">🍒</div>
        <div className="absolute bottom-[40%] right-[5%] text-4xl animate-float-delayed opacity-50 hidden lg:block">💅🏼</div>
        <div className="absolute bottom-[15%] right-[12%] text-5xl animate-float opacity-40 hidden lg:block">💖</div>
      </div>
      
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        
        {/* Continuous background wrapper for middle sections */}
        <div className="relative overflow-hidden bg-transparent">
          {/* Background gradients container */}
          <div 
            className="absolute inset-0 z-0 pointer-events-none" 
            style={{
              background: `
                radial-gradient(circle at 100% 35%, rgba(255,105,180,0.05) 0%, transparent 35%),
                radial-gradient(circle at 0% 90%, rgba(255,105,180,0.05) 0%, transparent 35%)
              `
            }} 
          />

          {/* Foreground content */}
          <div className="relative z-10">
            <ServicesSection />
            <AboutSection />
            <ScrapbookGallery />
            <FAQSection />
            <ReviewsSection />
          </div>
        </div>
      </main>
      <ContactFooter />
      <FloatingBookingButton />
    </div>
  );
}

export default App;
