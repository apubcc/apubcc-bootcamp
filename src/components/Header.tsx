"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/outline"; // Import icons from Heroicons

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle menu animation
  const menuClasses = isMenuOpen
    ? "fixed inset-0 bg-black backdrop-filter backdrop-blur-lg z-40 opacity-100 transition-opacity duration-500"
    : "fixed inset-0 bg-black backdrop-filter backdrop-blur-lg z-40 opacity-0 transition-opacity duration-500 pointer-events-none";

  return (
    <nav className="flex items-center justify-between p-4 md:p-8 w-full bg-black relative z-20">
      {/* Logo */}
      <div>
        <Image src="/logo.png" alt="Logo" width={150} height={50} priority />
      </div>

      {/* Hamburger Menu */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden focus:outline-none z-50"
      >
        {isMenuOpen ? (
          <XIcon className="h-8 w-8 text-yellow-500" />
        ) : (
          <MenuIcon className="h-8 w-8 text-white" />
        )}
      </button>

      {/* Mobile Menu Overlay with Blur Effect and Animation */}
      <div className={menuClasses}>
        <div className="absolute top-0 right-0 mt-16 mr-4 p-6 bg-white rounded-lg transition-transform transform duration-500">
          <div className="flex flex-col items-end">
            {["#agenda", "#speakers", "#partners", "#swag", "#faq"].map(
              (href, index) => (
                <Link
                  key={index}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className="space-mono-bold text-eventColor text-lg hover:text-yellow-300 p-2 block transition-colors duration-300"
                >
                  {href.substring(1)}
                </Link>
              )
            )}
          </div>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-4">
        {["#agenda", "#speakers", "#partners", "#swag", "#faq"].map(
          (href, index) => (
            <Link
              key={index}
              href={href}
              className="space-mono-bold text-eventColor text-lg hover:underline transition-colors duration-300"
            >
              {href.substring(1)}
            </Link>
          )
        )}
      </div>
    </nav>
  );
}
