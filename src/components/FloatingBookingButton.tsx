import { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

export function FloatingBookingButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Mostrar tooltip 5 segundos después de que el componente carga
    const timer = setTimeout(() => {
      setShowTooltip(true);
      
      // Ocultar automáticamente después de 10 segundos
      setTimeout(() => setShowTooltip(false), 10000);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Burbuja / Tooltip */}
      <div 
        className={`mb-5 bg-white text-black px-4 py-2 rounded-xl shadow-2xl transform transition-all duration-500 origin-bottom-right relative ${showTooltip ? 'scale-100 opacity-100 translate-y-0' : 'scale-50 opacity-0 translate-y-4 pointer-events-none'}`}
      >
        <div className="font-bold text-sm tracking-wide">¡Sacá tu turno acá!</div>
        {/* Triángulo apuntador */}
        <div className="absolute -bottom-1.5 right-5 w-3 h-3 bg-white transform rotate-45" />
      </div>

      {/* Botón */}
      <a
        href="https://api.whatsapp.com/send/?phone=5491112345678"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-primary-pink hover:bg-[#ff1a8c] text-white rounded-2xl flex items-center justify-center shadow-[0_10px_25px_rgba(255,51,153,0.4)] hover:shadow-[0_15px_35px_rgba(255,51,153,0.6)] hover:-translate-y-1 transition-all duration-300 group"
        aria-label="Reservar Turno"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onClick={() => setShowTooltip(false)}
      >
        <Calendar size={26} className="group-hover:scale-110 transition-transform duration-300" />
      </a>
    </div>
  );
}
