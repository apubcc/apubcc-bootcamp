// Welcome.tsx

import React from "react";

export default function Welcome() {
  return (
    <section className="text-white space-mono-regular pt-10 md:pt-20">
      <h2 className="text-lg md:text-2xl text-justify space-mono-bold mb-3">
        Welcome
        <sup>
          <a
            href="https://x.com/apubcc/status/1751929034542551454?s=20"
            target="_blank"
            rel="noopener noreferrer"
            className="text-eventColor"
          >
            (again)
          </a>
        </sup>{" "}
        to APUBCC’s second bootcamp under the{" "}
        <a
          className="text-eventColor"
          href="https://devcon.org/en/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Road to Devcon
        </a>{" "}
        initiative!
      </h2>
      <p className="text-sm md:text-xl mb-10 space-mono-regular text-justify">
        Enjoyed our first bootcamp? We’re back with another exciting bootcamp
        filled with interactive, hands-on activities that will take your Web3
        skills from zero to hero.
      </p>
      <h3 className="text-lg md:text-2xl mb-3 space-mono-bold">Why should I join?</h3>
      <ul className="text-sm md:text-xl text-justify list-disc list-inside space-mono-regular">
        <li className="pt-2 mb-3">Interactive Workshops: Even more hands-on!</li>
        <li className="pt-2 mb-3">
          Web3 Developer Job Panel: Learn about the latest job opportunities in
          the Web3 space.
        </li>
        <li className="pt-2">
          Networking: Meet and connect with like-minded individuals.
        </li>
      </ul>
      {/* Add more content as needed */}
    </section>
  );
}
