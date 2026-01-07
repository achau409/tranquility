import Image from "next/image";
import Link from "next/link";

export default function WhyUs() {
  const features = [
    {
      title: "Lowest Step Entry",
      description:
        "Our walk-in tubs feature the industry's lowest step-in height at just 2 inches, making bathing safer and easier.",
      icon: "/step.png",
    },
    {
      title: "Proudly American-Made",
      description:
        "Every tub and shower is built in the USA with the highest standards of craftsmanship.",
      icon: "/usa.png",
    },
    {
      title: "Full Remodel Solutions",
      description:
        "From walk-in tubs to complete bathroom remodels, we handle everything from start to finish.",
      icon: "/remodel.png",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-[#F8F8F8] px-4 md:px-0">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        {/* Why Choose Us Heading */}
        <h2 className="text-center text-lg font-bold  mb-4">Why Choose Us?</h2>

        {/* Main Title */}
        <h1 className="text-center text-3xl md:text-2xl font-bold  mb-6 md:mb-8">
          Your Safety and Comfort Are Our Lifetime Commitment
        </h1>

        {/* Descriptive Paragraph */}
        <p className="text-center   text-base max-w-4xl mx-auto mb-12 md:mb-16 leading-relaxed font-semibold">
          You deserve more than a bathroom upgrade; you deserve peace of mind.
          At Tranquility Bath Remodel, we combine beautiful modern design with
          functional solutions, backed by unmatched American craftsmanship and a
          lifetime warranty. Whether you're upgrading to a luxurious new shower,
          seeking independence, aging in place, or creating a stunning bathroom
          transformation, we deliver solutions that enhance your daily life for
          years to come.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 md:p-8 shadow-md hover:shadow-lg  hover:translate-y-[-10px] transition-all duration-500"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={1000}
                  height={1000}
                  className="object-cover h-12 w-12"
                />
              </div>

              {/* Title */}
              <h4 className="text-xl  font-bold text-gray-900 mb-3 text-center">
                {feature.title}
              </h4>

              {/* Description */}
              <p className="text-gray-700 text-sm md:text-base text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="flex justify-center">
          <Link
            href="#hero"
            className="bg-gradient-to-r from-[#569BFE] to-[#4A8FE8] text-white font-bold rounded-[50px] py-4 md:py-4 px-6 md:px-10 text-lg md:text-lg hover:from-[#4A8FE8] hover:to-[#569BFE] transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
          >
            Book Your FREE Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
