import React from "react";
import Image from "next/image";

const swags = [
  {
    name: "Swag 1",
    description: "Coming Soon",
    imageUrl: "/wip.png", // Update the path to your image
  },
  {
    name: "Swag 2",
    description: "Coming Soon",
    imageUrl: "/wip.png", // Update the path to your image
  },
  {
    name: "Swag 3",
    description: "Coming Soon",
    imageUrl: "/wip.png", // Update the path to your image
  },
  {
    name: "Swag 4",
    description: "Coming Soon",
    imageUrl: "/wip.png", // Update the path to your image
  },

  // Add more swag items here
];

export default function Swag() {
  return (
    <>
      <h2
        id="swag"
        className="text-center text-lg md:text-2xl font-bold space-mono-bold"
      >
        Merchandise{" "}
        <span className="italic space-mono-bold-italic">("Swags")</span>
      </h2>
      <div className="flex justify-center items-center flex-wrap md:flex-wrap md:w-full">
        {swags.map((item, index) => (
          <div
            key={index}
            className="mt-4 w-1/2 md:w-1/4 p-5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:-translate-y-1"
          >
            <h3 className="text-lg font-bold text-white text-center mb-2">
              {item.name}
            </h3>
            <div className="flex justify-center mb-2">
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={200}
                height={200}
              />
            </div>
            <p className="text-sm text-white text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
