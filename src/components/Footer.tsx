"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="md:w-full p-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left section: Logo and social links */}
        <div className="flex flex-col justify-start items-center mb-4 md:mb-0 space-x-4 md:w-full">
          <Image
            src="/logo.png"
            alt="APUBCC Logo"
            width={200}
            height={100}
            priority
          />
          <div className="flex space-x-4">
            <a
              href="https://twitter.com/apubcc"
              className="hover:text-gray-300"
            >
              Twitter
            </a>
            <a
              href="https://youtube.com/apubcc"
              className="hover:text-gray-300"
            >
              Youtube
            </a>
            <a href="https://meetup.com/apubcc" className="hover:text-gray-300">
              Meetup
            </a>
          </div>
        </div>

        {/* Right section: Copyright */}
        <div className="text-sm text-center md:text-right w-full">
          ©{new Date().getFullYear()} APUBCC. All rights reserved. Built with 🤖
          by 0xYudhishthra.
        </div>
      </div>
    </footer>
  );
}
