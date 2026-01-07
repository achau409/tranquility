import Image from "next/image";
import Link from "next/link";

export default function HowItWorks() {
  const features = [
    {
      title: "Initial Consultation",
      description:
        "Begin by providing us with some basic information through our user-friendly form.",
      icon: (
        <Image
          src="/1.png"
          alt="Lowest Step Entry"
          width={100}
          height={100}
          className="w-16 h-16 object-contain"
        />
      ),
    },
    {
      title: "Personalized Plan",
      description:
        "Receive your personalized design concept and detailed quote with transparent pricing. ",
      icon: (
        <Image
          src="/2.png"
          alt="Made in USA badge"
          width={100}
          height={100}
          className="w-16 h-16 object-contain"
        />
      ),
    },
    {
      title: "Expert Installation",
      description:
        "Our exceptional craftsmen transform your space with precision, care, and regular updates.",
      icon: (
        <Image
          src="/3.png"
          alt="Full Remodel Solutions"
          width={100}
          height={100}
          className="w-16 h-16 object-contain"
        />
      ),
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-[#F8F8F8]">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        {/* Why Choose Us Heading */}
        <h2 className="text-center text-lg md:text-xl font-semibold  mb-4">
          How It Works
        </h2>

        {/* Main Title */}
        <h3 className="text-center text-3xl md:text-4xl font-bold  mb-6 md:mb-8">
          Your Dream Bathroom in Three Simple Steps{" "}
        </h3>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 md:p-8 shadow-md hover:shadow-lg hover:translate-y-[-10px] transition-all duration-500"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">{feature.icon}</div>

              {/* Title */}
              <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 text-center">
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
            Transform Your Bathroom Today
          </Link>
        </div>
      </div>
    </section>
  );
}
