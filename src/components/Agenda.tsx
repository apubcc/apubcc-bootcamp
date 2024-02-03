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
    <div className="bg-white text-gray-700 p-5 shadow-lg rounded-lg">
      <ul className="space-y-4">
        {agendaItems.map((item, index) => (
          <li
            key={index}
            className="flex flex-col md:flex-row md:items-center relative"
          >
            {/* Vertical line for smaller devices */}
            <div className="absolute left-0 md:left-1/2 top-0 h-full w-0.5 bg-gray-300 transform -translate-x-1/2 md:hidden"></div>

            {/* Horizontal line for larger devices */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-300 transform -translate-y-1/2"></div>

            {/* Venue above the line on smaller screens, left of the line on larger screens */}
            <div className="md:w-1/3 md:pr-4 lg:pr-8 md:text-right">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mb-2 md:mb-0">
                {item.venue}
              </span>
            </div>

            {/* Time at the start/left of the item */}
            <div className="flex-shrink-0 md:bg-white md:p-2 md:rounded-full md:shadow-md z-10">
              <time className="font-bold text-lg">{item.time}</time>
            </div>

            {/* Description below the line on smaller screens, right of the line on larger screens */}
            <div className="md:w-2/3 md:pl-4 lg:pl-8">
              <p className="text-md mt-2 md:mt-0">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Agenda;
