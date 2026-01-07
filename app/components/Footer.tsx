import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#333333] text-white border-t-2 border-[#569BFE]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-sm md:text-base">© Tranquility Bath Remodel</div>

          {/* Privacy Policy Link */}
          <div>
            <Link
              href="/privacy-policy"
              className="text-sm md:text-base hover:underline"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
