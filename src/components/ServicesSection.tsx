import { useState } from 'react';
import { Sparkles, Smile, X, Zap, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from './Reveal';

const services = [
  {
    id: 1,
    title: 'Depilación Definitiva',
    description: 'Olvidate del vello. Promos especiales en axilas, cavado y piernas.',
    fullDescription: 'Tecnología de última generación para eliminar el vello de forma segura y eficaz. Tenemos combos para vos: Axilas + Media Pierna, Cavado + Pierna Entera, Bozo y mucho más.',
    price: 'Desde $30.000',
    icon: <Zap className="w-8 h-8 text-girl-hotpink" />,
    image: '/body_illustration.png',
    rotate: '-rotate-2',
    tape: 'washi-tape',
  },
  {
    id: 2,
    title: 'Pestañas y Cejas',
    description: 'Lifting, Perfilado y Laminado para resaltar tu mirada.',
    fullDescription: 'Lográ una mirada de impacto. Lifting de pestañas ($10.000), Perfilado de cejas ($7.000), Laminado ($5.000). Aprovechá nuestros combos y llevate el look completo.',
    price: 'Desde $5.000',
    icon: <Sparkles className="w-8 h-8 text-girl-hotpink" />,
    image: '/face_illustration.png',
    rotate: 'rotate-3',
    tape: 'washi-tape-pattern',
  },
  {
    id: 3,
    title: 'Tratamientos Corporales',
    description: 'Vellaslim, Masajes Reductores y Criolipolisis.',
    fullDescription: 'Modelá tu cuerpo con tecnología no invasiva. Sesiones personalizadas de Vellaslim para celulitis y flacidez, Criolipolisis para adiposidad localizada y masajes reductores.',
    price: 'Consultar',
    icon: <Activity className="w-8 h-8 text-girl-hotpink" />,
    image: '/body_illustration.png', 
    rotate: '-rotate-1',
    tape: 'washi-tape',
  },
  {
    id: 4,
    title: 'Dermatocosmiatría',
    description: 'Cuidado facial profundo, Dermapen y limpieza de cutis.',
    fullDescription: 'Tu piel merece lo mejor. Tratamientos de limpieza profunda, Dermapen para renovación celular, hidratación intensa y protocolos antiage personalizados por una profesional.',
    price: 'Consultar',
    icon: <Smile className="w-8 h-8 text-girl-hotpink" />,
    image: '/face_illustration.png', 
    rotate: 'rotate-2',
    tape: 'washi-tape-pattern',
  },
];

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  const closeModal = () => setSelectedService(null);

  return (
    <section id="servicios" className="py-24 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-20 relative">
            <h2 className="text-5xl md:text-6xl font-serif mb-4 text-gray-800">
              Menu de <span className="text-transparent bg-clip-text bg-gradient-to-r from-girl-hotpink to-girl-red italic">Treatments</span>
            </h2>
            <p className="handwritten text-3xl text-gray-500 mt-2 transform rotate-1">
              "Because you deserve it" 💅🏼
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 px-4">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 100} className="h-full mt-4">
              <div
                className={`polaroid h-full ${service.rotate} cursor-pointer group`}
                onClick={() => setSelectedService(service)}
              >
                <div className={service.tape}></div>
                
                {/* Image */}
                <div className="aspect-square bg-girl-pink/10 overflow-hidden mb-4 p-2 relative">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-500" />
                </div>

                {/* Content */}
                <div className="text-center pb-4">
                  <h3 className="font-serif font-bold text-xl mb-2 text-gray-800 leading-tight">{service.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 font-light px-2">
                    {service.description}
                  </p>
                  <p className="handwritten text-2xl text-girl-red mt-2">
                    Click me!
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" onClick={closeModal}>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-white/40 backdrop-blur-md" 
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10, rotate: 2 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="relative w-full max-w-3xl bg-[#fffaf0] overflow-hidden border-2 border-dashed border-girl-pink/50 rounded-lg shadow-2xl flex flex-col md:flex-row z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 bg-white p-2 rounded-full text-girl-hotpink hover:text-white hover:bg-girl-hotpink transition-all shadow-sm border border-girl-pink/20"
              >
                <X size={20} />
              </button>

              <div className="w-full md:w-2/5 aspect-[3/4] md:h-auto relative bg-girl-pink/10 border-r-2 border-dashed border-girl-pink/30 p-4">
                <div className="washi-tape-pattern top-2 left-1/2 -translate-x-1/2 rotate-1"></div>
                <img src={selectedService.image} alt={selectedService.title} className="w-full h-full object-cover mix-blend-multiply opacity-90 shadow-sm border border-white" />
              </div>

              <div className="w-full md:w-3/5 p-8 flex flex-col relative">
                {/* Decorative dots background */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="text-girl-hotpink">
                      {selectedService.icon}
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-gray-800">{selectedService.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed text-base mb-8 font-light bg-white/60 p-4 rounded-lg border border-girl-pink/20">
                    {selectedService.fullDescription}
                  </p>
                  
                  <div className="flex justify-between items-center mb-8 border-b-2 border-dotted border-girl-pink/40 pb-4">
                    <span className="text-gray-500 italic font-serif">Inversión en vos:</span>
                    <span className="handwritten text-3xl text-girl-red">{selectedService.price}</span>
                  </div>

                  <a
                    href="#contacto"
                    onClick={closeModal}
                    className="ticket-btn w-full text-center block mt-auto"
                  >
                    Agendar Cita 💌
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
