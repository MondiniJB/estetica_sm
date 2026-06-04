import { Reveal } from './Reveal';

const photos = [
  { id: 1, src: '/media__1780551061762.png', caption: "antes", rotation: "-rotate-6", zIndex: "z-10", top: "top-4", left: "left-[10%]" },
  { id: 2, src: '/media__1780551124582.png', caption: "después ✨", rotation: "rotate-3", zIndex: "z-20", top: "top-12", left: "left-[40%]" },
  { id: 3, src: '/media__1780551156648.png', caption: "perfección", rotation: "-rotate-2", zIndex: "z-10", top: "top-8", left: "left-[70%]" },
];

export function ScrapbookGallery() {
  return (
    <section id="gallery" className="py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="text-center mb-16 relative">
            <h2 className="text-5xl md:text-6xl font-serif mb-4 text-gray-800">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-girl-hotpink to-girl-red italic">Scrapbook</span> 📸
            </h2>
            <p className="handwritten text-3xl text-gray-500 mt-2 transform rotate-2">
              "Resultados reales"
            </p>
          </div>
        </Reveal>

        <div className="relative h-[600px] w-full max-w-4xl mx-auto hidden md:block">
          {photos.map((photo, index) => (
            <Reveal key={photo.id} delay={index * 200}>
              <div className={`absolute ${photo.top} ${photo.left} ${photo.rotation} ${photo.zIndex} w-64 polaroid hover:z-30 transition-all duration-300`}>
                <div className="washi-tape"></div>
                <div className="aspect-square bg-gray-100 overflow-hidden mb-3">
                  <img src={photo.src} alt="Resultado" className="w-full h-full object-cover" />
                </div>
                <p className="handwritten text-center text-xl text-girl-hotpink">{photo.caption}</p>
              </div>
            </Reveal>
          ))}
        </div>
        
        {/* Mobile View */}
        <div className="md:hidden flex flex-col gap-8 items-center">
          {photos.map((photo, index) => (
            <Reveal key={photo.id} delay={index * 100}>
              <div className={`w-64 polaroid ${photo.rotation}`}>
                <div className="washi-tape"></div>
                <div className="aspect-square bg-gray-100 overflow-hidden mb-3">
                  <img src={photo.src} alt="Resultado" className="w-full h-full object-cover" />
                </div>
                <p className="handwritten text-center text-xl text-girl-hotpink">{photo.caption}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
