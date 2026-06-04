import { ArrowRight, Heart } from 'lucide-react';
import { Reveal } from './Reveal';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
    >
      <div className="relative z-30 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-16 w-full">

        {/* Text Content - Left Side */}
        <div className="flex-1 text-center md:text-left pt-6 md:pt-10">
          <Reveal delay={0}>
            <div className="mb-4 inline-block transform -rotate-2">
              <span className="bg-white/80 px-4 py-2 rounded-full shadow-sm text-girl-hotpink font-bold uppercase tracking-widest text-xs border border-girl-pink/30 flex items-center gap-2">
                <Heart size={14} className="fill-girl-pink" /> Para vos, por vos
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif mb-6 text-gray-800 leading-tight">
              Tu era de amarte{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-girl-hotpink to-girl-red italic pr-4 whitespace-nowrap">
                empieza acá
              </span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-4 text-xl md:text-2xl text-gray-600 max-w-xl mb-8 md:mb-10 leading-relaxed font-light">
              Estética SM por Sofía&nbsp;Maderna.
              <span className="handwritten block mt-6 text-3xl text-girl-hotpink">
                Romantizá tu rutina de skincare ✨
              </span>
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center md:items-start">
              <a
                href="#contacto"
                className="ticket-btn flex items-center justify-center gap-2"
              >
                Reservá tu turno
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#servicios"
                className="font-serif italic text-gray-500 underline decoration-wavy decoration-girl-pink/50 hover:text-girl-hotpink transition-colors py-2 md:py-4 px-2"
              >
                Ver el menú de tratamientos
              </a>
            </div>
          </Reveal>
        </div>

        {/* Visual Content (Collage) - Right Side */}
        <div className="flex-1 w-full relative flex flex-row items-center justify-center gap-4 sm:gap-8 md:block md:h-[600px] mt-4 md:mt-0 mb-8 md:mb-0">
          
          <Reveal delay={400}>
            {/* Main Polaroid (Bigger) */}
            <div className="w-40 sm:w-52 md:w-72 polaroid rotate-3 z-20 md:absolute md:top-10 md:right-10 shadow-xl">
              <div className="washi-tape"></div>
              <div className="bg-girl-pink/20 aspect-[3/4] w-full flex items-center justify-center overflow-hidden">
                <img src="/face_illustration.png" alt="Aesthetic" className="w-full h-full object-cover mix-blend-multiply opacity-90" />
              </div>
              <p className="handwritten text-center mt-4 md:mt-6 text-lg md:text-2xl">self care day 🎀</p>
            </div>
          </Reveal>

          <Reveal delay={500}>
            {/* Secondary Polaroid (Smaller) */}
            <div className="w-32 sm:w-44 md:w-56 polaroid -rotate-6 z-10 md:absolute md:bottom-0 md:left-10 shadow-lg">
              <div className="washi-tape-pattern"></div>
              <div className="bg-blue-50 aspect-square w-full flex items-center justify-center overflow-hidden">
                <img src="/body_illustration.png" alt="Detail" className="w-full h-full object-cover mix-blend-multiply opacity-80" />
              </div>
              <p className="font-serif italic text-center mt-3 md:mt-4 text-xs md:text-sm text-gray-500">glow up</p>
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}
