"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white space-mono-bold">
      <div className="w-full md:w-full p-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Left section: Logo */}
        <div className="mb-4 md:mb-0">
          <Image
            onClick={() => {
              window.open("https://apubcc.org");
            }}
            src="/logo.png"
            alt="APUBCC Logo"
            width={250}
            height={150}
            priority
          />
        </div>

        {/* Right section: Social links and Copyright */}
        <div className="flex-1 flex flex-col items-center md:items-end">
          <div className="text-xs md:text-lg flex justify-center md:justify-end space-x-4 pt-4 mb-4 text-eventColor">
            <a
              href="https://twitter.com/apubcc"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com/apubcc"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Instagram
            </a>
            <a
              href="https://youtube.com/@apubcc"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              YouTube
            </a>
            <a
              href="https://apubcc.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Substack
            </a>
            <a
              href="https://github.com/apubcc"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
          </div>
          <span className="text-xs md:text-sm md:text-lg text-center md:text-right space-mono-regular-italic">
            © {new Date().getFullYear()} APUBCC. All rights reserved. Built with
            🤖 by{" "}
            <a
              href="https://twitter.com/0xYudhishthra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-eventColor hover:underline"
            >
              0xYudhishthra
            </a>
            .
          </span>
        </div>
      </div>
    </footer>
  );
}
