// page.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Welcome, Speakers } from "@/components";
import { createWidget } from "@typeform/embed";

export default function Home() {
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [typewriterText, setTypewriterText] = useState("");
  const [isActive, setIsActive] = useState(false);

  const sentences = [
    "pragma solidity ^join the bootcamp;",
    "learn to build smart contracts",
    "explore web3 development",
    "connect with industry experts",
    "get insights on web3 developer jobs",
    "build your blockchain portfolio",
  ];

  //  list of speakers
  const speakers = [
    {
      imageSrc: "placeholderPerson.jpg",
      name: "Name",
      title: "Role",
    },
    {
      imageSrc: "placeholderPerson.jpg",
      name: "Name",
      title: "Role",
    },
    {
      imageSrc: "placeholderPerson.jpg",
      name: "Name",
      title: "Role",
    },
    {
      imageSrc: "placeholderPerson.jpg",
      name: "Name",
      title: "Role",
    },
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
    setIsActive(true); // Activate the button's animation
    setTimeout(() => setIsActive(false), 500); // Reset the state after the animation duration
    console.log("Navigating to event page...");
    // createWidget("ikVbM7BD", {
    //   container: document.getElementById("typeform"),
    //   hideHeaders: true,
    //   hideFooter: true,
    //   opacity: 75,
    //   hidden: {
    //     email: "user@example.com",
    //   },
    // });
  };

  return (
    <main className="p-10 text-white flex items-center justify-center">
      <div className="container mx-aut flex flex-wrap items-center lg:justify-between">
        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0 space-mono-bold">
          <p className="text-lg md:text-2xl mb-2">WEB3 DEVELOPER BOOTCAMP:</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-10">
            CODING THE UNKNOWN
          </h1>
          <p className="text-xl md:text-2xl mb-5">When? 📆</p>
          <p className="text-lg md:text-xl mb-10 space-mono-regular">
            March 30, 2024 from 9:00 AM to 7:00 PM
          </p>
          <p className="text-xl md:text-2xl mb-5">Where? 📍</p>
          <p className="text-lg md:text-xl mb-10 space-mono-regular">
            Asia Pacific University of Technology & Innovation
            <sup>
              <a
                href="https://maps.app.goo.gl/NgbD3gTB2pQQbTQQ7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-eventColor"
              >
                {" "}
                (maps)
              </a>
            </sup>
          </p>
          {/* Typewriter text container with fixed height */}
          <div className="flex-row items-center typewriter-container">
            <p className="text-lg md:text-xl space-mono-regular typewriter-text mb-10 md:mb-5 ">
              {typewriterText}
            </p>
            <button
              className={`button-primary space-mono-regular text-lg md:text-xl ${
                isActive ? "active" : ""
              }`}
              onClick={handleRegisterClick}
            >
              Register
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex">
          <div className="image-border">
            <Image
              src="/hero.jpg"
              alt="Event Image"
              width={1000}
              height={1000}
            />
          </div>
        </div>
        <div className="section-divider w-full"></div>
        <Welcome />
        <div className="section-divider w-full"></div>
        <Speakers speakers={speakers} />
      </div>
    </main>
  );
}
