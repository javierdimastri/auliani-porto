"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-pink-primary via-purple to-blue bg-clip-text text-transparent hover:scale-105 transition-transform">
            Auliani Puteri
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            <ul className="flex gap-4 xl:gap-6 text-sm font-semibold uppercase tracking-wider">
              <li>
                <Link
                  href="/gallery"
                  className="text-foreground hover:text-pink-primary hover:bg-pink-light/20 px-3 xl:px-4 py-2 rounded-full transition-all duration-300"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-foreground hover:text-purple hover:bg-purple/10 px-3 xl:px-4 py-2 rounded-full transition-all duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-foreground hover:text-blue hover:bg-blue/20 px-3 xl:px-4 py-2 rounded-full transition-all duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <a
              href="/cv.pdf"
              download="Auliani_Puteri_CV.pdf"
              className="bg-gradient-to-r from-pink-primary to-purple text-white px-4 xl:px-5 py-2 rounded-full text-sm font-bold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Download CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-accent pt-4">
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/gallery"
                  className="block text-foreground hover:text-pink-primary hover:bg-pink-light/20 px-4 py-2 rounded-full transition-all duration-300 text-sm font-semibold uppercase tracking-wider"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block text-foreground hover:text-purple hover:bg-purple/10 px-4 py-2 rounded-full transition-all duration-300 text-sm font-semibold uppercase tracking-wider"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block text-foreground hover:text-blue hover:bg-blue/20 px-4 py-2 rounded-full transition-all duration-300 text-sm font-semibold uppercase tracking-wider"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li className="pt-2">
                <a
                  href="/cv.pdf"
                  download="Auliani_Puteri_CV.pdf"
                  className="block text-center bg-gradient-to-r from-pink-primary to-purple text-white px-5 py-2 rounded-full text-sm font-bold hover:shadow-lg transition-all duration-300"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
