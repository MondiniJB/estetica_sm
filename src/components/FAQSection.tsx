import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Reveal } from './Reveal';

const faqs = [
  {
    question: "¿Cuántas sesiones de depilación definitiva necesito?",
    answer: "Depende de la zona y el tipo de vello, pero en general se recomiendan entre 6 y 8 sesiones para lograr resultados permanentes. Se realizan cada 30 a 45 días."
  },
  {
    question: "¿Duele el tratamiento de depilación definitiva?",
    answer: "Nuestra tecnología cuenta con un cabezal de enfriamiento que hace que el tratamiento sea prácticamente indoloro. Solo sentirás una leve sensación de calor o pequeños pinchazos tolerables."
  },
  {
    question: "¿Qué es la Dermatocosmiatría?",
    answer: "Es una especialidad que trata la piel sana o enferma con productos y aparatología específica. Ayuda a mejorar condiciones como acné, rosácea, manchas y envejecimiento cutáneo."
  },
  {
    question: "¿Cómo debo prepararme para mi turno de depilación?",
    answer: "Debes rasurarte la zona a tratar la noche anterior o el mismo día. No utilizar cremas, desodorantes ni maquillaje en la zona antes de la sesión. Evitar tomar sol directo 48hs antes."
  },
  {
    question: "¿Cuánto dura el efecto del Lifting de Pestañas?",
    answer: "El efecto del lifting de pestañas dura aproximadamente entre 4 y 6 semanas, dependiendo del ciclo natural de crecimiento de tus pestañas. Es un tratamiento rápido e indoloro."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Preguntas <span className="text-primary-pink">Frecuentes</span></h2>
            <p className="text-gray-600 text-lg">
              Resolvemos tus dudas principales para que vengas con total tranquilidad a Estética SM.
            </p>
          </div>
        </Reveal>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={index} delay={index * 100}>
                <div 
                  className={`paper-panel overflow-hidden transition-all duration-300 ${isOpen ? 'border-primary-pink/50 shadow-lg' : 'hover:border-primary-pink/30'}`}
                >
                  <button 
                    className="w-full px-6 pl-12 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                    onClick={() => toggleAccordion(index)}
                  >
                    <h3 className={`text-lg font-semibold pr-8 ${isOpen ? 'text-primary-pink' : 'text-gray-800'}`}>
                      {faq.question}
                    </h3>
                    <div className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border transition-colors duration-300 ${isOpen ? 'bg-primary-pink/10 border-primary-pink text-primary-pink' : 'border-gray-300 text-gray-400'}`}>
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>
                  
                  <div 
                    className={`grid transition-all duration-300 ease-in-out pl-12 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                  >
                    <div className="overflow-hidden">
                      <div className="pr-6 pb-6 text-gray-600 text-base leading-relaxed border-t border-gray-100 pt-4">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
