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
              <p className="text-white md:text-4xl font-semibold">
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
        <nav className="hidden md:flex space-x-10 text-white font-bold text-sm uppercase">
          <Link href="/#why-us" className="hover:underline cursor-pointer">
            Why Us
          </Link>
          <Link href="/#services" className="hover:underline cursor-pointer">
            Our Services
          </Link>
          <Link href="/#about" className="hover:underline cursor-pointer">
            About Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
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
          <div className="absolute top-28 left-0 right-0 bg-white shadow-lg md:hidden z-50 transition-all duration-300">
            <nav className="flex flex-col p-4 space-y-4">
              <Link
                href="/"
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
                href="/about"
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
