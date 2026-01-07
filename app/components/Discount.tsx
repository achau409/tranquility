import Image from "next/image";
import Link from "next/link";

export default function Discount() {
  return (
    <section className="relative flex items-center justify-center min-h-[500px] md:min-h-[490px] py-12 md:py-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/discountBg.png"
          alt="Bathroom Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 md:px-10 w-full">
        {/* Semi-transparent Gray Overlay */}
        <div className="bg-[rgba(0,0,0,0.4)] backdrop-blur-sm rounded-[10px] p-6 md:p-10 max-w-3xl mx-auto">
          {/* Headline */}
          <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-4 ">
            10% Off + Special <br />
            Veterans Discount
          </h2>

          {/* Body Text */}
          <p className="text-white text-sm md:text-base text-center mb-6 eading-relaxed">
            Sign up today and enjoy 10% off your new walk-in tub or shower
            remodel. As a thank you for your service, veterans receive an
            additional discount. Experience safety, comfort, and style at an
            unbeatable value.
          </p>

          {/* Call to Action Button */}
          <div className="flex justify-center">
            <Link
              href="#hero"
              className="bg-gradient-to-r from-[#569BFE] to-[#4A8FE8] text-white font-bold rounded-[50px] py-3 md:py-4 px-6 md:px-10 text-base md:text-lg hover:from-[#4A8FE8] hover:to-[#569BFE] transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
            >
              Claim Your FREE Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
