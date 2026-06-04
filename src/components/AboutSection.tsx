import { Award, Heart } from 'lucide-react';
import { Reveal } from './Reveal';

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#FFF0F5]/50 rounded-3xl p-6 md:p-8 lg:p-12 transition-all duration-300 border border-girl-pink/30 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Texto Centrado / Izquierda */}
            <Reveal delay={0}>
              <div className="text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-800">
                  Conocé a <br/><span className="text-girl-hotpink italic">Sofía Maderna</span>
                </h2>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed font-light">
                  Soy Sofía Maderna, Dermatocosmiatra y la creadora de Estética SM. Mi objetivo es potenciar tu belleza natural a través de tratamientos personalizados. Me apasiona el cuidado de la piel y ofrecerte un espacio donde puedas relajarte, mimarte y ver resultados reales.
                </p>
                
                <div className="space-y-6 max-w-md mx-auto lg:mx-0">
                  <div className="flex items-start gap-4 text-left">
                    <div className="bg-girl-pink/20 p-3 rounded-xl text-girl-hotpink mt-1 border border-girl-pink/30">
                      <Award size={28} />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-gray-800 text-xl">Dermatocosmiatra Profesional</h4>
                      <p className="text-gray-500 text-base mt-1 font-light">Tratamientos seguros y eficaces con conocimiento y experiencia comprobada.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 text-left">
                    <div className="bg-girl-pink/20 p-3 rounded-xl text-girl-hotpink mt-1 border border-girl-pink/30">
                      <Heart size={28} />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-gray-800 text-xl">Experiencia Única</h4>
                      <p className="text-gray-500 text-base mt-1 font-light">Buena onda, energía positiva y un momento dedicado exclusivamente para vos.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
            
            {/* Reel a la derecha */}
            <Reveal delay={200}>
              <div className="relative max-w-[350px] w-full mx-auto flex justify-center">
                <div className="w-full bg-[#FFF0F5] p-3 rounded-3xl shadow-lg border border-girl-pink/40 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="relative w-full overflow-hidden rounded-2xl bg-gray-50 flex items-center justify-center" style={{ height: '580px' }}>
                    <iframe
                      src="https://www.instagram.com/reel/DX-hmPFx6h0/embed"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      allowTransparency={true}
                      className="absolute top-0 left-0 w-full h-full"
                      style={{ border: 'none', overflow: 'hidden' }}
                      title="Instagram Reel"
                    ></iframe>
                  </div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-white px-6 py-3 rounded-2xl border border-girl-pink/30 shadow-md z-10 hidden sm:block">
                  <p className="text-xl font-serif font-black text-girl-hotpink">ESTÉTICA SM</p>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold text-center">Espacio</p>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
}
