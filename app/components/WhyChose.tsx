import Image from "next/image";

export default function WhyChose() {
  const features = [
    {
      title: "Easy to Clean & Maintain",
      description:
        "No special cleaners needed, just basic household cleaners like white vinegar or Scrubbing Bubbles. Minimal upkeep with a quick weekly wipe keeps your Onyx shower or vanity top looking brand new. The non-porous surface resists stains, soap scum, and water spots. Use a surface protectant like Rain-X to make cleaning even easier and keep that showroom shine.",
      icon: "/clean.png",
    },
    {
      title: "Built with Superior Materials",
      description:
        "63% Alumina Trihydrate (used in solid surfaces like Corian) for strength, fire resistance, and durability. 37% Proprietary Polyester Resin developed over 30+ years for flexibility, clarity, and longevity. Our resin contains no urea formaldehyde, unlike many plastics.",
      icon: "/built.png",
    },
    {
      title: "Real Stone Look & Feel",
      description:
        "Deep, translucent beauty mimicking natural onyx, not flat, cheap-looking plastic. Customizable, with the ability to trim, cut, and install easily using common tools. ISO-NPG gelcoat finish adds premium protection and water resistance.",
      icon: "/stone.png",
    },
    {
      title: "Designed for Real Life Installation",
      description:
        'Installs easily over standard ½" sheetrock. No special prep needed—just wipe and silicone. Durable enough for modifications with belt sanders, jigsaws, and circular saws.',
      icon: "/design.png",
    },
    {
      title: "Low Environmental Impact",
      description:
        "Derived from natural bauxite, a naturally occurring mineral. Flame retardant and smoke resistant, thanks to the alumina content. Manufactured with precision and minimal waste—no flashy marketing, just quality products.",
      icon: "/environment.png",
    },
    {
      title: "Trusted Nationwide",
      description:
        "Available through a network of experienced dealers across the U.S. No pushy sales reps; we focus on manufacturing better products, not bigger ads.",
      icon: "/trust.png",
    },
  ];

  return (
    <section className="py-8 md:py-12 bg-[#F5F5F5]">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        {/* Top Section: Image and Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Shower Image */}
          <div className="relative w-full h-[400px] md:h-[450px] overflow-hidden">
            <Image
              src="/onyx.png"
              alt="Modern Onyx Stone Shower"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-lg font-bold text-gray-900 mb-4 md:mb-6">
              Why Choose ONYX STONE Over Plastic Alternatives?
            </h2>

            {/* Key Benefits */}
            <div className="flex flex-wrap gap-4 mb-4 md:mb-6">
              <span className="text-sm md:text-2xl font-bold text-gray-900">
                Quality.
              </span>
              <span className="text-sm md:text-2xl font-bold text-gray-900">
                Durability.
              </span>
              <span className="text-sm md:text-2xl font-bold text-gray-900">
                Beauty.
              </span>
              <span className="text-sm md:text-2xl font-bold text-gray-900">
                Simplicity.
              </span>
            </div>

            {/* Introductory Paragraph */}
            <p className="text-gray-700 text-sm md:text-base mb-6 leading-relaxed">
              Onyx Stone products are engineered for lasting elegance and
              effortless upkeep. Unlike the low-grade plastic used by big box
              stores and large franchises, our solutions deliver superior
              performance and timeless appeal.
            </p>

            {/* Say Goodbye To List */}
            <div className="mb-6">
              <h3 className="text-lg md:text-xl text-gray-900 mb-3">
                Say Goodbye to:
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Cheap-looking plastic that stains, warps, or scratches
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    High-maintenance surfaces that need special cleaners
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Mold-prone, hollow shower panels from big box stores
                  </span>
                </li>
              </ul>
            </div>

            {/* Call to Action Slogan */}
            <p className="text-lg font-bold text-gray-900">
              Choose Onyx for Timeless, Trouble-Free Bathrooms. Built to
              perform. Made to last. Easy to love.
            </p>
          </div>
        </div>

        {/* Bottom Section: Feature Cards */}
        <div className="grid grid-cols-1  gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row justify-center gap-4 items-center md:items-start"
            >
              {/* Icon */}
              <div className="flex justify-start mb-4">
                <div className="h-12 w-12">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={1000}
                    height={1000}
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Title */}
              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 text-start">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 text-sm  leading-relaxed text-start">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
