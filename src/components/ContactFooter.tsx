import { MapPin, AlertCircle } from 'lucide-react';

export function ContactFooter() {
  return (
    <footer id="contacto" className="bg-[#FFF0F5] pt-16 pb-8 border-t-2 border-dashed border-girl-pink/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 mb-12">
          
          <div className="flex flex-col items-start">
            <h2 className="text-4xl font-serif italic font-bold text-girl-hotpink tracking-widest mb-4">
              Estética SM
            </h2>
            <p className="text-gray-600 text-sm max-w-xs mb-6">
              Resaltá tu belleza natural con la mejor tecnología y profesionalismo en Dermatocosmiatría.
            </p>

            {/* Aviso Importante Policy */}
            <div className="bg-white/60 border border-girl-pink/40 rounded-xl p-4 mt-auto shadow-sm">
              <div className="flex items-center gap-2 text-girl-hotpink mb-2 font-bold">
                <AlertCircle size={18} />
                <h4>Aviso Importante</h4>
              </div>
              <p className="text-gray-600 text-xs leading-relaxed">
                La persona que no asista al turno o que no avise con 24hs de anticipación, no se le dará próximo turno en Estética SM. En caso de querer seguir viniendo, deberán abonar el valor del turno solicitado.
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-gray-800 font-serif font-bold text-xl mb-6">Ubicación</h4>
            <div className="flex items-start gap-3 text-gray-600 mb-6 text-sm">
              <MapPin className="text-girl-hotpink shrink-0 mt-1" size={20} />
              <p>
                Palermo <br />
                CABA, Argentina <br />
                (Dirección exacta al reservar)
              </p>
            </div>
          </div>

          <div className="lg:px-4">
            <h4 className="text-gray-800 font-serif font-bold text-xl mb-6">Horarios</h4>
            <ul className="text-gray-600 text-sm flex flex-col gap-2 max-w-[220px]">
              <li className="flex justify-between border-b border-dotted border-girl-pink/40 pb-1"><span>Lunes</span> <span className="font-medium text-gray-800">09:00 - 20:00</span></li>
              <li className="flex justify-between border-b border-dotted border-girl-pink/40 pb-1"><span>Mar a Vie</span> <span className="font-medium text-gray-800">08:00 - 20:00</span></li>
              <li className="flex justify-between border-b border-dotted border-girl-pink/40 pb-1"><span>Sábado</span> <span className="font-medium text-gray-800">09:00 - 15:00</span></li>
              <li className="flex justify-between text-gray-400"><span>Domingo</span> <span>Cerrado</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-gray-800 font-serif font-bold text-xl mb-6">Contacto & Redes</h4>
            
            <div className="flex flex-col gap-4 text-sm mb-6">
              <a 
                href="https://api.whatsapp.com/send/?phone=5491112345678" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 hover:text-green-500 transition-colors bg-white/50 w-fit px-4 py-2 rounded-full shadow-sm border border-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle shrink-0 text-green-500 md:text-current"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
                <span className="font-medium">WhatsApp</span>
              </a>

              <a 
                href="https://www.instagram.com/estetica_sm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 hover:text-girl-hotpink transition-colors bg-white/50 w-fit px-4 py-2 rounded-full shadow-sm border border-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram shrink-0 text-[#E1306C] md:text-current"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                <span className="font-medium">@estetica_sm</span>
              </a>
            </div>
          </div>
          
        </div>
        
        <div className="border-t border-girl-pink/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Estética SM. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-sm">
            Diseñado por <a href="https://qvantastudio.com.ar/" target="_blank" rel="noopener noreferrer" className="hover:text-girl-hotpink transition-colors font-medium">Qvanta Studio</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
