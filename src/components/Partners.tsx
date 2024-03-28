import React from "react";

type PartnerLogosProps = { url: string; src: string }[];

const mainSponsors: PartnerLogosProps = [
  { url: "https://arbitrum.io", src: "AF.png"},
  { url: "https://esp.ethereum.foundation/devcon-grants", src: "RTD.png"},
  // { url: "https://twitter.com/SuperteamMY", src: "superteam.png" },
  { url: "https://polygon.technology/", src:"polygon white.png" }
];
const venueSponsors: PartnerLogosProps = [
  { url: "https://apu.edu.my", src: "/APU.png" },
];

const communityPartners: PartnerLogosProps = [
  { url: "https://www.myunilah.com", src:"unilah.png" },
  { url: "https://ethereumsingapore.com", src: "ETHSG.png" },
  { url: "https://talentweb3.co/", src: "talent@web3.png" },
];

const supportedByLogos: PartnerLogosProps = [
  { url: "https://apu-hackthletes.vercel.app/", src: "hackthletes.png"}
  // { url: "https://solana.com", src: "solanaLogo.png" }, //Solana logo to be added once RTD approved
];

// modify the PartnerLogos to be able to be clicked and open a new tab with the sponsor's website. the website is to be received alongside the URL of image src.
const PartnerLogos = ({ logos }: { logos: { url: string; src: string }[] }) => (
  <div className="flex justify-center items-center flex-wrap mt-2 mb-8">
    {logos.map((logo, index) => (
      <a
        key={index}
        href={logo.url}
        target="_blank"
        rel="noopener noreferrer"
        className="m-4"
      >
        <img
          src={logo.src}
          alt={`Partner logo ${index + 1}`}
          className="h-8 md:h-16 transition-transform duration-300 hover:scale-105" 
        />
      </a>
    ))}
  </div>
);

export default function Partners() {
  return (
    <div id="partners" className="container mx-auto">
      <h2 className="text-xl md:text-2xl space-mono-bold mb-10">
        Sponsored by
      </h2>
      <section className="text-center space-mono-regular text-eventColor">
        <div className="mb-8">
          <h3 className="text-lg md:text-xl mb-2">Main Sponsors</h3>
          <div className="border-b-2 w-full border-yellow-500 md:w-full mx-auto mb-4"></div>
          <PartnerLogos logos={mainSponsors} />
        </div>
        <div className="mb-8">
          <h3 className="text-lg md:text-xl mb-2">Venue Sponsor</h3>
          <div className="border-b-2 border-yellow-500 md:w-full w-full mx-auto mb-4"></div>
          <PartnerLogos logos={venueSponsors} />
        </div>
        <div className="mb-8">
          <h3 className="text-lg md:text-xl mb-2">Community Partners</h3>
          <div className="border-b-2 border-yellow-500 md:w-full mx-auto mb-4"></div>
          <PartnerLogos logos={communityPartners} />
        </div>
      <div className="mb-8">
          <h3 className="text-lg md:text-xl mb-2">Supported by</h3>
          <div className="border-b-2 border-yellow-500 md:w-full mx-auto mb-4"></div>
        <PartnerLogos logos={supportedByLogos} />
      </div>
      </section>
    </div>
  );
}
