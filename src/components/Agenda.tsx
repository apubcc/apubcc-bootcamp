"use client";

import React from "react";

// Sample data taken from the picture provided
const agendaItems = [
  {
    time: "8:00AM",
    description: "Registration & Breakfast",
    venue: "Atrium & Cafeteria",
  },
  { time: "9:00AM", description: "Opening", venue: "Atrium" },
  // ... include other items as needed
  { time: "6:30PM", description: "Day 1 Closing", venue: "Audi 4" },
];

// Agenda.jsx
const Agenda = () => {
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap gap-4 p-4">
      {agendaItems.map((item, index) => (
        <div
          key={index}
          className="bg-gradient-to-r from-gray-100 via-white to-gray-100 p-4 rounded-lg shadow-md flex flex-col md:flex-row md:items-center w-full md:w-auto"
        >
          <div className="flex-shrink-0 bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-800 mr-4">
            {item.venue}
          </div>
          <div className="font-bold text-lg text-blue-800 mb-2 md:mb-0">
            {item.time}
          </div>
          <div className="text-md text-gray-700">{item.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Agenda;
