"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-[#569BFE]">
      <header className="flex justify-between items-center p-6 max-w-[1200px] mx-auto w-full ">
        <div className="flex items-center gap-2">
          <Link href="/">
            <div className="">
              <p className="text-white text-[32px] md:text-4xl font-semibold leading-[2.25rem]">
                Tranquility Bath Remodel
              </p>
            </div>
            <div className="flex items-center gap-2 mt-3 max-w-[100px]">
              <Image
                src="/logo1.png"
                alt="Moose Group Logo"
                width={1000}
                height={1000}
              />
              <Image
                src="/logo2.png"
                alt="Moose Group Logo"
                width={1000}
                height={1000}
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10 text-white font-bold text-sm uppercase">
          <Link href="/#why-us" className="hover:underline cursor-pointer">
            Why Us
          </Link>
          <Link href="/#services" className="hover:underline cursor-pointer">
            Our Services
          </Link>
          <Link href="/#about" className="hover:underline cursor-pointer">
            About Us
          </Link>
          <a
            href="tel:18885012090"
            className="flex items-center gap-2  text-lg font-extrabold text-white hover:underline"
          >
            <svg
              aria-hidden="true"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.24c1.12.37 2.33.57 3.59.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C9.16 21 3 14.84 3 7a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.26.2 2.47.57 3.59a1 1 0 0 1-.24 1z" />
            </svg>
            1-888-501-2090
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-12 h-12"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="absolute top-40 left-0 right-0 bg-white shadow-lg md:hidden z-50 transition-all duration-300 py-6">
            <nav className="flex flex-col p-4 space-y-6">
              <Link
                href="/#why-us"
                className="hover:underline cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Why Us
              </Link>

              <Link
                href="/#services"
                className="hover:underline cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Services{" "}
              </Link>

              <Link
                href="/#about"
                className="hover:underline cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}
