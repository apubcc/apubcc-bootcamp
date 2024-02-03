// Header.tsx

"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // This function isn't used in the current version of the code.
  // const closeMenu = () => {
  //   setIsMenuOpen(false);
  // };

  return (
    <nav className="flex items-center justify-between p-4 md:p-8 w-full">
      {/* Left section: Logo */}
      <div className="flex items-center justify-start">
        <Link href="https://apubcc.org" className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={150} height={50} priority />
        </Link>
      </div>

      {/* Right section: Navigation links */}
      <div className="items-center flex-grow space-mono-bold">
        {/* Desktop menu */}
        <div className="hidden md:flex justify-end">
          {/* Menu items */}
          <Link
            href="/agenda"
            className="text-lg px-4 py-2 hover:text-blue-600"
          >
            agenda 
          </Link>
          <Link
            href="/speakers"
            className="text-lg px-4 py-2 hover:text-blue-600"
          >
            speakers 
          </Link>
          <Link
            href="/sponsors"
            className="text-lg px-4 py-2 hover:text-blue-600"
          >
            partners 
          </Link>
          <Link
            href="/accommodations"
            className="text-lg px-4 py-2 hover:text-blue-600"
          >
            swag 
          </Link>
          <Link
            href="/side-events"
            className="text-lg px-4 py-2 hover:text-blue-600"
          >
            faq 
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none absolute right-4 top-8"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`absolute top-0 inset-x-0 p-4 transition transform origin-top-right md:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <Link href="/agenda" className="block px-4 py-2 text-lg">
          Agenda
        </Link>
        <Link href="/speakers" className="block px-4 py-2 text-lg">
          Speakers
        </Link>
        <Link href="/sponsors" className="block px-4 py-2 text-lg">
          Sponsors
        </Link>
        <Link href="/side-events" className="block px-4 py-2 text-lg">
          Side Events
        </Link>
        <Link href="/accommodations" className="block px-4 py-2 text-lg">
          Accommodations
        </Link>
      </div>
    </nav>
  );
}
