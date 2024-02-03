"use client";

import React, { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/solid";

const faqs = [
  {
    question: "Who are the organizers of this bootcamp?",
    answer:
      "The organizers are APUBCC, the first and largest student blockchain club in Malaysia.",
  },
  {
    question: "Who can attend this bootcamp?",
    answer:
      "The bootcamp is open to all university students and lecturers interested in learning about blockchain, regardless of their prior knowledge or experience in the field.",
  },
  {
    question:
      "I have purchased the tickets, but I cannot attend the event. What will happen to the tickets?",
    answer:
      "The money used to purchase the ticket cannot be refunded, but the swags will still be distributed to the participants even if they cannot make it physically to the bootcamp.",
  },
  {
    question:
      "I do not know anything about Blockchain or Cryptocurrencies, will I be able to catch up with what’s being shared inside the bootcamp?",
    answer:
      "Yes definitely! This is our first bootcamp and is tailored towards beginners to learn more about the field.",
  },
  {
    question:
      "Will this bootcamp be talking about the trading and investment aspect of cryptocurrencies?",
    answer:
      "No. We are more focused on sharing about blockchain technology, what is being powered by it, and use cases of it!",
  },
  {
    question: "How will the bootcamp be conducted?",
    answer:
      "The bootcamp comprises talks, workshops, interactive sessions, games and panel discussions. It's a mix of learning through presentations and hands-on activities to reinforce the concepts covered.",
  },
  {
    question:
      "Do I need to bring my laptop for any practical application or hands-on activities?",
    answer:
      "Yes! Do bring your laptop as there are workshops and activities that are planned where participants can apply their knowledge practically. These include creating a portfolio, exploring blockchains, understanding DeFi tools, and participating in a clue hunt.",
  },
  {
    question: "How do I stay updated on the latest news and announcements?",
    answer:
      "Check your emails regularly after you have registered, and do follow our social media pages for the latest updates on our events.",
  },
  {
    question: "I’m lost! How do I get to the event spaces?",
  },
  // ... potentially more FAQs from the image
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      <h2
        id="faq"
        className="text-lg md:text-2xl font-bold mb-10 space-mono-bold"
      >
        Frequently Asked Questions
      </h2>
      <div className="w-full">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-8">
            <button
              className={`flex justify-between items-center w-full py-5 text-left text-sm md:text-lg font-semibold rounded-t-lg ${
                openIndex === index ? "rounded-b-none" : "rounded-lg"
              } bg-gradient-to-r from-blue-600 to-white-500 text-white shadow-xl hover:shadow-2xl transition-shadow duration-300`}
              onClick={() => toggleFAQ(index)}
            >
              <span className="flex-1 space-mono-regular">{faq.question}</span>
              <span className="ml-4">
                {openIndex === index ? (
                  <MinusIcon className="w-6 h-6" />
                ) : (
                  <PlusIcon className="w-6 h-6" />
                )}
              </span>
            </button>
            {openIndex === index && (
              <div className="space-mono-regular-italic px-6 py-5 text-md text-gray-700 bg-white rounded-b-lg shadow-lg">
                {faq.answer}
                {/* render optional links */}
                {faq.question ===
                  "I’m lost! How do I get to the event spaces?" && (
                  <div>
                    Venue guides are available at{" "}
                    <a
                      href="https://drive.google.com/drive/folders/1lUr5L9zc8-zQ8EYR8soiVsrWLEJj8GZe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-eventColor"
                    >
                      [link]
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
