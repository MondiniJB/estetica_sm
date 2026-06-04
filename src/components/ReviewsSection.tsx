import { Star } from 'lucide-react';
import { Reveal } from './Reveal';

const reviews = [
  {
    id: 1,
    name: "Valentina M.",
    text: "omg Sofi sos la mejor, me dejaste la piel increíble ✨ 10/10 súper recomendada",
    time: "Ayer 14:30",
    isReceived: true,
  },
  {
    id: 2,
    name: "Sofi Maderna",
    text: "Ayy gracias linda! Me alegro que te haya gustado 🥰",
    time: "Ayer 14:35",
    isReceived: false,
  },
  {
    id: 3,
    name: "Camila R.",
    text: "El mejor estudio de zona sur sin dudas. Fui a hacerme las cejas y superó mis expectativas mal!!",
    time: "Hoy 10:15",
    isReceived: true,
  },
  {
    id: 4,
    name: "Sofi Maderna",
    text: "Quedaste potra! Nos vemos en la próxima sesión 💖",
    time: "Hoy 10:20",
    isReceived: false,
  },
  {
    id: 5,
    name: "Luli F.",
    text: "Chicaaas tienen que ir, el lugar es un sueño y la atención es un 10. ¡Volveré sin dudas! 💅🏼",
    time: "Hoy 11:00",
    isReceived: true,
  }
];

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 relative bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="text-center mb-16 relative">
            <h2 className="text-5xl md:text-6xl font-serif mb-4 text-gray-800">
              Spill The <span className="text-transparent bg-clip-text bg-gradient-to-r from-girl-hotpink to-girl-red italic">Tea</span> ☕
            </h2>
            <p className="handwritten text-3xl text-gray-500 mt-2 transform -rotate-1">
              "Lo que dicen de nosotras"
            </p>
          </div>
        </Reveal>

        <div className="bg-[#f5f5f7] rounded-3xl p-4 md:p-8 shadow-inner border border-gray-200">
          <div className="flex flex-col gap-6">
            <div className="text-center text-xs text-gray-400 font-medium mb-4 uppercase tracking-wider">iMessage</div>
            
            {reviews.map((review, index) => (
              <Reveal key={review.id} delay={index * 100}>
                <div className={`flex flex-col ${review.isReceived ? 'items-start' : 'items-end'} w-full`}>
                  <div className="text-xs text-gray-400 mb-1 ml-2 mr-2">
                    {review.name}
                  </div>
                  <div className={review.isReceived ? 'chat-bubble-received' : 'chat-bubble-pink text-white'}>
                    <p className="text-[15px] leading-snug">{review.text}</p>
                  </div>
                  <div className="text-[10px] text-gray-400 mt-1 ml-2 mr-2">
                    {review.time}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={400}>
          <div className="mt-16 text-center">
            <a
              href="https://maps.app.goo.gl/VWrd2KmhGiPybt4D8"
              target="_blank"
              rel="noopener noreferrer"
              className="ticket-btn inline-flex items-center gap-2"
            >
              Dejanos tu amor en Google 💌
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
