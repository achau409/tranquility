import Image from "next/image";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Walk-In Bathtubs",
      description:
        'Safe, stress-free bathing with 2" step-in American-made tubs for comfort and ease. See our before-and-after photos showcasing beautiful walk-in tub transformations.',
      image: "/tubs.png",
    },
    {
      title: "Walk-In Showers",
      description:
        "Upgrade with durable quartz showers that are stylish, accessible, and customizable. View our tub-to-shower conversion gallery to see the dramatic difference.",
      image: "/walk-shower.png",
    },
    {
      title: "Full Bathroom Remodels",
      description:
        "From single upgrades to complete makeovers, we handle every part of your remodel. Our experts create bathrooms that blend safety, style, and lasting value.",
      image: "/bath-remodel.png",
    },
    {
      title: "Senior and ADA-Friendly Solutions",
      description:
        "We design tubs and showers that meet ADA standards and ensure full wheelchair accessibility, making your bathroom safer and easier to use for everyone.",
      image: "/friendly.png",
    },
  ];

  return (
    <section className="py-8 md:py-12 bg-white px-4 md:px-0">
      <div className="max-w-5xl mx-auto px-4 md:px-0">
        {/* Subtitle */}
        <h3 className="text-center text-lg  mb-2 font-bold">Our Services</h3>

        {/* Main Title */}
        <h1 className="text-3xl md:text-3xl font-bold text-center mb-4 md:mb-6">
          Complete Bathroom Solutions Designed for Your Life
        </h1>

        {/* Descriptive Paragraph */}
        <p className="text-center text-base max-w-4xl mx-auto mb-8 md:mb-12 leading-relaxed">
          Tranquility Bath Remodel offers tailored solutions that blend style,
          durability, and function. Every tub and shower is built with
          American-made excellence and backed by a lifetime warranty. Whether
          you're modernizing, aging in place, or boosting your home's value, we
          deliver results that exceed expectations. Browse our before-and-after
          gallery to see the transformation.
        </p>

        {/* Services Grid - 2x2 with vertical dashed line */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group overflow-visible md:mb-24 mb-40 hover:translate-y-[-10px] transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative w-full h-[300px] md:h-[350px] overflow-hidden ">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-125 cursor-pointer"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Text Box Overlay - Partially overlapping the image */}
              <div className="absolute bottom-[-140px] md:bottom-[-80px] left-4 right-4 bg-white rounded-lg p-2 !py-6 md:p-6 shadow-xl text-center">
                <h3 className="text-lg font-bold mb-4">{service.title}</h3>
                <p className="text-sm  leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="flex justify-center">
          <Link
            href="#hero"
            className="bg-gradient-to-r from-[#569BFE] to-[#4A8FE8] text-white font-bold rounded-[50px] py-4 px-8 md:px-12 text-lg md:text-xl hover:from-[#4A8FE8] hover:to-[#569BFE] transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
          >
            Get Your FREE Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
