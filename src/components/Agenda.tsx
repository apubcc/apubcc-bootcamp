"use client";

import React from "react";

// Sample data taken from the picture provided
const agendaItems = [
  {
    time: "8:00 AM",
    description: "Registration + Breakfast",
    venue: "Cafeteria",
  },
  { time: "9:00 AM", description: "Opening Speech", venue: "Audi 2" },
  { time: "9:15 AM", description: "Smart Contract Workshop", venue: "Audi 2" },
  { time: "11:45 AM", description: "Lunch", venue: "Cafeteria" }, 
  { time: "12:45 PM", description: "Frontend UI Workshop", venue: "Audi 2" },
  { time: "3:15 PM", description: "Integration Smart Contract with your UI", venue: "Audi 2" }, 
  { time: "5:45 PM", description: "Jobs in Web3", venue: "Audi 2" },
  { time: "6:45 PM", description: "Dinner + Networking", venue: "Cafeteria" },
];

// Agenda.jsx
export default function Agenda() {
  return (
    <>
      <h2
        id="agenda"
        className="text-lg md:text-2xl font-bold mb-4 md:mb-6 space-mono-bold"
      >
        Bootcamp Agenda
      </h2>
      <div className="flex flex-col md:flex-row md:flex-wrap gap-2 md:gap-4 justify-start w-full">
        {agendaItems.map((item, index) => (
          <div
            key={index}
            className="bg-white p-2 md:p-3 rounded-lg shadow-sm w-full md:w-48 transform transition hover:scale-105 space-mono-regular text-xs md:text-sm text-black"
            style={{
              backgroundImage: `
                  linear-gradient(to right, #240b36, #c31432)
                `,
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="text-xs md:text-sm rounded-full py-0.5 md:py-1 mb-2 md:mb-3">{item.venue}</div>
            <div className="space-mono-bold text-xs md:text-sm mb-1">{item.time}</div>
            <div className="text-xs md:text-sm">{item.description}</div>
          </div>
        ))}
      </div>
    </>
  );
}

