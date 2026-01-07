import Image from "next/image";

export default function Gallery() {
  const showerImages = [
    "/window.png",
    "/shower-tubs.png",
    "/shower2.png",
    "/shower3.png",
  ];

  const tubImages = [
    "/tubs1.png",
    "/tubs2.png",
    "/shower4.png",
    "/shower5.png", // Reusing images to fill the grid
  ];

  return (
    <section className="py-6 md:py-12">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        {/* Gallery Title */}
        <h2 className="text-center text-base md:text-xl font-semibold mb-2 md:mb-4">
          Gallery
        </h2>

        {/* Main Title */}
        <h3 className="text-center text-xl md:text-3xl font-bold mb-8 md:mb-12 px-2">
          Bathrooms Built for Comfort and Style
        </h3>

        {/* Desktop: Category Labels - Horizontal */}
        <div className="hidden md:flex flex-row justify-center items-center gap-96 mb-6 max-w-5xl mx-auto">
          <h4 className="text-xl font-bold text-center underline decoration-2 underline-offset-4">
            Showers
          </h4>
          <h4 className="text-xl font-bold text-center underline decoration-2 underline-offset-4">
            Walk-In Tubs
          </h4>
        </div>

        {/* Desktop: Large Images - Side by side */}
        <div className="hidden md:grid grid-cols-2 gap-2 mb-4 max-w-5xl mx-auto">
          {/* Large Shower Image */}
          <div className="relative w-full h-[280px] overflow-hidden">
            <Image
              src="/shower.png"
              alt="Modern walk-in shower"
              fill
              className="object-cover"
              priority
              sizes="50vw"
            />
          </div>

          {/* Large Walk-In Tub Image */}
          <div className="relative w-full h-[280px] overflow-hidden">
            <Image
              src="/tubs.png"
              alt="Modern walk-in tub"
              fill
              className="object-cover"
              priority
              sizes="50vw"
            />
          </div>
        </div>

        {/* Desktop: Small Images Grid - 4 columns */}
        <div className="hidden md:grid grid-cols-4 gap-2 max-w-5xl mx-auto">
          {/* Shower Images (First 2 columns) */}
          {showerImages.slice(0, 2).map((image, index) => (
            <div
              key={`shower-${index}`}
              className="relative w-full h-[300px] overflow-hidden"
            >
              <Image
                src={image}
                alt={`Shower ${index + 1}`}
                fill
                className="object-cover cursor-pointer hover:scale-105 transition-all duration-300"
                sizes="25vw"
              />
            </div>
          ))}

          {/* Tub Images (Last 2 columns) */}
          {tubImages.slice(0, 2).map((image, index) => (
            <div
              key={`tub-${index}`}
              className="relative w-full h-[300px] overflow-hidden"
            >
              <Image
                src={image}
                alt={`Walk-in tub ${index + 1}`}
                fill
                className="object-cover cursor-pointer hover:scale-105 transition-all duration-300"
                sizes="25vw"
              />
            </div>
          ))}

          {/* Second Row - Shower Images */}
          {showerImages.slice(2, 4).map((image, index) => (
            <div
              key={`shower-${index + 2}`}
              className="relative w-full h-[300px] overflow-hidden"
            >
              <Image
                src={image}
                alt={`Shower ${index + 3}`}
                fill
                className="object-cover cursor-pointer hover:scale-105 transition-all duration-300"
                sizes="25vw"
              />
            </div>
          ))}

          {/* Second Row - Tub Images */}
          {tubImages.slice(2, 4).map((image, index) => (
            <div
              key={`tub-${index + 2}`}
              className="relative w-full h-[300px] overflow-hidden"
            >
              <Image
                src={image}
                alt={`Walk-in tub ${index + 3}`}
                fill
                className="object-cover cursor-pointer hover:scale-105 transition-all duration-300"
                sizes="25vw"
              />
            </div>
          ))}
        </div>

        {/* Mobile: Showers Section */}
        <div className="md:hidden space-y-4 mb-8">
          <h4 className="text-xl font-bold text-center mb-4 underline decoration-2 underline-offset-4">
            Showers
          </h4>

          {/* Large Shower Image */}
          <div className="relative w-full h-[280px] overflow-hidden mb-4">
            <Image
              src="/shower.png"
              alt="Modern walk-in shower"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>

          {/* Small Shower Images Grid */}
          <div className="grid grid-cols-2 gap-2">
            {showerImages.map((image, index) => (
              <div
                key={`shower-mobile-${index}`}
                className="relative w-full h-[180px] overflow-hidden"
              >
                <Image
                  src={image}
                  alt={`Shower ${index + 1}`}
                  fill
                  className="object-cover cursor-pointer hover:scale-105 transition-all duration-300"
                  sizes="50vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Walk-In Tubs Section */}
        <div className="md:hidden space-y-4">
          <h4 className="text-xl font-bold text-center mb-4 underline decoration-2 underline-offset-4">
            Walk-In Tubs
          </h4>

          {/* Large Walk-In Tub Image */}
          <div className="relative w-full h-[280px] overflow-hidden mb-4">
            <Image
              src="/tubs.png"
              alt="Modern walk-in tub"
              fill
              className="object-contain"
              priority
              sizes="100vw"
            />
          </div>

          {/* Small Tub Images Grid */}
          <div className="grid grid-cols-2 gap-2">
            {tubImages.map((image, index) => (
              <div
                key={`tub-mobile-${index}`}
                className="relative w-full h-[180px] overflow-hidden"
              >
                <Image
                  src={image}
                  alt={`Walk-in tub ${index + 1}`}
                  fill
                  className="object-cover cursor-pointer hover:scale-105 transition-all duration-300"
                  sizes="50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
