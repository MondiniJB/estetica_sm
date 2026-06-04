import { useState, useEffect } from 'react';
import { X, Gift } from 'lucide-react';

export function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Detectar si es celular (pantalla menor a 768px)
    const isMobile = window.innerWidth < 768;
    // En celular queremos que salte a los 2s para asegurar el toque para el video. En PC a los 10s.
    const delay = isMobile ? 2000 : 10000;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submit
    handleClose();
    alert("¡Código enviado a tu email!");
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Fondo oscuro */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />
      
      {/* Contenido del Modal */}
      <div className="relative paper-panel w-full max-w-md p-8 text-center animate-in fade-in zoom-in duration-300">
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="w-16 h-16 bg-primary-pink/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Gift className="w-8 h-8 text-primary-pink" />
        </div>
        
        <h3 className="text-3xl font-bold mb-4 text-gray-900">¡Bienvenida!</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Usá el código <span className="font-bold text-primary-pink px-2 py-1 bg-primary-pink/10 rounded-md">BEAUTYWEB</span> y obtené un <span className="font-bold text-gray-900">5% OFF</span> en tu primera sesión.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 mb-6 relative z-10">
          <input 
            type="email" 
            placeholder="Tu email para recibir el cupón" 
            required
            className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-primary-pink focus:ring-1 focus:ring-primary-pink transition-colors"
          />
          <button 
            type="submit" 
            className="btn-primary w-full flex items-center justify-center gap-2 text-lg"
          >
            Quiero mi descuento
          </button>
          <button
            type="button"
            onClick={handleClose}
            className="px-6 py-3 rounded-full border border-gray-300 text-gray-600 font-medium hover:bg-gray-50 w-full transition-colors mt-2"
          >
            Seguir explorando
          </button>
        </form>
      </div>
    </div>
  );
}
