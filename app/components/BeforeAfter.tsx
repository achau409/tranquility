import Image from "next/image";

export default function BeforeAfter() {
  const transformations = [
    {
      before: "/before1.png",
      after: "/after1.png",
      beforeLabel: "Before",
      afterLabel: "After",
    },
    {
      before: "/before2.png",
      after: "/after2.png",
      beforeLabel: "Before",
      afterLabel: "After",
    },
  ];

  return (
    <section className="py-6 md:py-12 bg-[#F8F8F8] px-4 md:px-0">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        {/* Main Title */}
        <h2 className="text-center text-3xl md:text-3xl font-bold mb-8 md:mb-12">
          Before and After
        </h2>

        {/* Grid Layout - 2x2: Each row has Before (left) and After (right) */}
        <div className="space-y-4 md:space-y-6">
          {transformations.map((transformation, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
            >
              {/* Before Image */}
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] overflow-hidden  shadow-md">
                <Image
                  src={transformation.before}
                  alt={`Before transformation ${index + 1}`}
                  fill
                  className="object-cover hover:scale-125 transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Before Label */}
                <div className="absolute top-4 left-4 bg-[rgba(51,51,51,0.4)] text-white px-4 py-2 rounded-md font-semibold text-sm md:text-base">
                  {transformation.beforeLabel}
                </div>
              </div>

              {/* After Image */}
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] overflow-hidden  shadow-md">
                <Image
                  src={transformation.after}
                  alt={`After transformation ${index + 1}`}
                  fill
                  className="object-cover hover:scale-125 transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* After Label */}
                <div className="absolute top-4 left-4 bg-[#569BFE] text-white px-4 py-2 rounded-md font-semibold text-sm md:text-base">
                  {transformation.afterLabel}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
