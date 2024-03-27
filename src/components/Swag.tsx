import React from "react";
import Image from "next/image";

const swags = [
  {
    name: "Swag 1",
    description: "Bucket Hat",
    imageUrl: "/hat.jpeg", // Update the path to your image
  },
  {
    name: "Swag 2",
    description: "Lanyard",
    imageUrl: "/lanyard.jpeg", // Update the path to your image
  },
  {
    name: "Swag 3",
    description: "Stickers",
    imageUrl: "/stickers.jpeg", // Update the path to your image
  },
  {
    name: "Swag 4",
    description: "Participant Pass",
    imageUrl: "/pass.jpg", // Update the path to your image
  },
];

export default function Swag() {
  return (
    <>
      <h2
        id="swag"
        className="text-center text-lg md:text-2xl font-bold space-mono-bold"
      >
        Merchandise{" "}
        <span className="italic space-mono-bold-italic">(&quot;Swags&quot;)</span>
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
              <div className="border-4 border-white rounded overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={200}
                  height={200}
                />
              </div>
            </div>
            <p className="text-sm text-white text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

