import Image from "next/image";
import Link from "next/link";
import ContactForm from "./components/ContactForm";
import Gallery from "./components/Gallary";
import WhyUs from "./components/WhyUs";
import HowItWorks from "./components/HowItWorks";
import BeforeAfter from "./components/BeforeAfter";
import Discount from "./components/Discount";
import Servicess from "./components/Services";
import WhyChose from "./components/WhyChose";

export default function HomePage() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section
        className="relative text-[#ffffff] flex items-center min-h-[500px] md:h-[550px] pt-10 md:pt-0"
        id="hero"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/heroBg.png"
            alt="Hero Background"
            fill
            priority
            className="object-cover object-top"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-12 w-full flex flex-col md:flex-row items-center gap-6 md:gap-8 py-8 md:py-0 pt-0">
          <div className="w-full">
            <h1 className="text-4xl md:text-5xl font-bold  md:!leading-[55px]">
              Transform Your <br className="hidden md:block" />
              Bathroom Into a Stylish <br className="hidden md:block" />& Safe
              Comfort Zone{" "}
            </h1>
            <p className="text-lg mt-4 md:mt-8 md:max-w-4xl  font-[200] md:text-justify">
              Experience the perfect blend of style, comfort, and quality with
              Tranquility Bath Remodel. From stunning modern shower upgrades to
              ultra-low entry walk-in tubs and accessible solutions, we deliver
              American-made excellence with Idaho craftsmanship. Our showers
              aren't just for accessibility; they're for every home. From a
              family home to the modern home, and everything in between.
              Lifetime warranty included. Your dream bathroom starts here.{" "}
            </p>
          </div>
          <div className="w-full md:max-w-[330px] mt-4 md:mt-0 py-4 md:py-0">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Features Banner Section */}
      <section className="bg-[#569BFE] py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-0">
            <div className="text-white text-center px-2 md:px-6 flex-1 w-full md:w-auto py-2 md:py-0">
              <p className="text-base font-bold font-sans">
                Lowest Entry in America
              </p>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/30"></div>
            <div className="block md:hidden w-full h-px bg-white/80"></div>
            <div className="text-white text-center px-2 md:px-6 flex-1 w-full md:w-auto py-2 md:py-0">
              <p className="text-base font-bold font-sans">
                100% American Craftsmanship
              </p>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/30"></div>
            <div className="block md:hidden w-full h-px bg-white/80"></div>
            <div className="text-white text-center px-2 md:px-6 flex-1 w-full md:w-auto py-2 md:py-0">
              <p className="text-base font-bold font-sans">
                Lifetime Warranty Protection
              </p>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/30"></div>
            <div className="block md:hidden w-full h-px bg-white/80"></div>
            <div className="text-white text-center px-2 md:px-6 flex-1 w-full md:w-auto py-2 md:py-0">
              <p className="text-base font-bold font-sans">
                30% More Affordable
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Gallery />
      </section>
      <section id="why-us">
        <WhyUs />
      </section>
      <section>
        <Discount />
      </section>
      <section id="services">
        <Servicess />
      </section>
      <section id="why-choose">
        <WhyChose />
      </section>
      <section>
        <BeforeAfter />
      </section>
      <section className="py-12 bg-[#F5F5F5] px-4 md:px-0" id="about">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-start items-center justify-between md:gap-12 gap-4">
            <Image
              src="/aboutImg.png"
              alt="Business Meeting"
              width={1000}
              height={1000}
              className="object-cover md:h-[380px] h-[280px]"
            />
            <div className="w-full text-left">
              <h2 className="text-xl font-bold mb-4">About Us</h2>
              <h2 className="text-3xl md:text-[32px] font-bold mb-4">
                Meet Our Remodeling Experts{" "}
              </h2>
              <p className=" mb-4 text-base text-justify ">
                Tranquility Bath Remodel, based in Idaho, has earned a
                reputation for creating stylish, safe, and affordable bathroom
                solutions. Our certified team is dedicated to providing premium
                American-made products while upholding values of trust,
                transparency, and care. Customer satisfaction is always our top
                priority.  <br /> We are your trusted partner for modern shower
                upgrades, walk-in tubs, and complete bathroom remodels. With our
                personalized approach and lifetime warranty, you'll experience
                the difference of working with a company that values your
                comfort, style, and peace of mind.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-gradient-to-r from-[#569BFE] to-[#4A8FE8] text-white font-bold rounded-[50px] py-4 px-8 md:px-12 text-lg md:text-xl hover:from-[#4A8FE8] hover:to-[#569BFE] transition-all duration-300 shadow-lg hover:shadow-xl">
            Get Your FREE Consultation
          </button>
        </div>
      </section>

      {/* Let's Build Section */}
      <section className="relative flex items-center min-h-[500px] md:min-h-[440px] py-12 md:py-16 px-4 md:px-0">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/letsBuildBg.png"
            alt="Modern Bathroom Background"
            fill
            priority
            className="md:object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.07)]"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 md:px-0">
          <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8 items-center">
            {/* Headline and Text */}
            <div className="md:max-w-[45%]">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6 max-w-xs md:max-w-none">
                Let's Build the Bathroom <br className="hidden md:block" />
                You've Been Dreaming Of
              </h2>

              {/* Body Paragraph */}
              <p className="text-white text-base mb-6 md:mb-8 leading-relaxed text-justify">
                Take the first step toward a bathroom designed for comfort,
                style, and functionality. Whether you want a beautiful shower
                upgrade that elevates your space, a walk-in tub for worry-free
                bathing, or an accessible solution that fits your lifestyle, our
                experts are ready to help. Fill out the quick form, and let's
                design your perfect bathroom.
              </p>
            </div>

            {/* Vertical White Line */}
            <div className="hidden md:block w-px h-36 bg-white"></div>

            {/* Call to Action Button */}
            <div className="flex justify-center items-center w-full md:w-auto">
              <Link
                href="#hero"
                className="bg-[#569BFE] text-white rounded-[50px] font-bold py-4 px-8 md:px-12 text-lg hover:bg-[#4A8FE8] transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap inline-block"
              >
                Let's Build Your Dream Bathroom
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <HowItWorks />
      </section>

      <section className="text-center text-white bg-[#569BFE] py-8">
        <h1 className="text-2xl md:text-[32px] font-semibold mb-4">
          Tranquility Bath Remodel
        </h1>
        <p className="text-sm md:text-sm max-w-4xl mx-auto leading-relaxed">
          Tranquility Bath Remodel is Idaho's trusted provider of stunning
          shower upgrades, walk-in tubs, and full bathroom remodels. We combine
          American-made quality, lifetime warranties, and affordable pricing to
          deliver bathrooms that are stylish, safe, and built to last.
        </p>
      </section>

      <a
        href="tel:18885012090"
        className="md:hidden text-xl  font-bold fixed bottom-6 right-6 z-50 flex h-14 p-4  px-8 items-center justify-center rounded-full bg-[#569BFE] text-white shadow-xl"
        aria-label="Call 1-888-501-2090"
      >
        Call us now{" "}
        <svg
          aria-hidden="true"
          className="h-6 w-6 ml-2"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.24c1.12.37 2.33.57 3.59.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C9.16 21 3 14.84 3 7a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.26.2 2.47.57 3.59a1 1 0 0 1-.24 1z" />
        </svg>
      </a>
    </div>
  );
}
