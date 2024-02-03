// page.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [typewriterText, setTypewriterText] = useState("");

  const sentences = [
    "pragma solidity ^join the bootcamp;",
    "learn to build smart contracts",
    "explore web3 development",
    "connect with industry experts",
    "get insights on web3 developer jobs",
    "build your blockchain portfolio",
  ];

  useEffect(() => {
    let currentIndex = -1; // Start from -1 because we increment at the beginning of the interval
    let currentSentence = sentences[typewriterIndex];
    let typewriterInterval: NodeJS.Timeout;

    const startTyping = () => {
      typewriterInterval = setInterval(() => {
        currentIndex++;
        if (currentIndex < currentSentence.length) {
          setTypewriterText(
            (prevText) => prevText + currentSentence[currentIndex]
          );
        } else {
          clearInterval(typewriterInterval); // Clear the interval when the current sentence is completed
          setTimeout(() => {
            setTypewriterText(""); // Reset the text after the delay
            setTypewriterIndex(
              (prevIndex) => (prevIndex + 1) % sentences.length
            ); // Move to the next sentence after the delay
          }, 1000); // Delay of 2 seconds before moving to the next sentence
          currentIndex = -1; // Reset index for the next sentence
        }
      }, 100);
    };

    startTyping(); // Start the typewriter effect

    return () => {
      clearInterval(typewriterInterval); // Clear the interval on unmount or when the component re-renders
    };
  }, [typewriterIndex]);

  const handleRegisterClick = () => {
    console.log("Navigating to event page...");
  };

  return (
    <main className="p-10 text-white flex items-center justify-center">
      <div className="container mx-aut flex flex-wrap items-center lg:justify-between">
        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0 space-mono-bold">
          <p className="text-2xl mb-2">WEB3 DEVELOPER BOOTCAMP:</p>
          <h1 className="text-5xl font-bold mb-10">CODING THE UNKNOWN</h1>
          <p className="text-2xl mb-3">When? 📆</p>
          <p className="text-xl mb-10 space-mono-regular">
            March 30, 2024 from 9:00 AM to 7:00 PM
          </p>
          <p className="text-2xl mb-3">Where? 📍</p>
          <p className="text-xl mb-5 space-mono-regular">
            Asia Pacific University of Technology & Innovation
            <sup>
              <a
                href="https://maps.app.goo.gl/NgbD3gTB2pQQbTQQ7"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                (maps)
              </a>
            </sup>
          </p>
          {/* Typewriter text container with fixed height */}
          <div className="flex-row items-center typewriter-container">
            <p className="text-xl space-mono-regular typewriter-text">
              {typewriterText}
            </p>
            <button className="button-primary" onClick={handleRegisterClick}>
              Register
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex">
          <div className="image-border rounded-lg overflow-hidden">
            <Image
              src="/hero.jpg"
              alt="Event Image"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
