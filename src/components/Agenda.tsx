"use client";

import React from "react";

// Sample data taken from the picture provided
const agendaItems = [
  {
    time: "8:00 AM",
    description: "Registration",
    venue: "Cafeteria",
  },
  { time: "9:00 AM", description: "Opening Speech", venue: "Atrium" },
  { time: "9:15 AM", description: "Workshop A", venue: "Audi 2" },
  { time: "11:15 AM", description: "Workshop B", venue: "Audi 2" },
  { time: "12:45 PM", description: "Lunch", venue: "Cafeteria" },
  { time: "1:45 PM", description: "Activity", venue: "TBC" },
  { time: "3:00 PM", description: "Workshop C", venue: "Audi 2" },
  { time: "4:30 PM", description: "Workshop D", venue: "Audi 2" },
  { time: "6:00 PM", description: "Panel", venue: "Audi 2" },
  { time: "7:00 PM", description: "Dinner + Networking", venue: "Cafeteria" },
];

// Agenda.jsx
const Agenda = () => {
  return (
    <>
      <h2 className="text-lg md:text-2xl font-bold mb-10 space-mono-bold">
        Bootcamp Agenda
      </h2>
      <div className="flex flex-col md:flex-row md:flex-wrap gap-4 justify-start w-full">
        {agendaItems.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-lg w-full md:w-auto transform transition hover:scale-105 space-mono-regular text-black"
            style={{
              backgroundImage: `
                  linear-gradient(to right, #240b36, #c31432)
                `,
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
            }}
          >
            <div className="text-lg rounded-full py-1 mb-5">{item.venue}</div>
            <div className="space-mono-bold text-lg  mb-2">{item.time}</div>
            <div className="text-md">{item.description}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Agenda;
