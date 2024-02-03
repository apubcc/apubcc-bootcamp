// Define a type for the speaker data
type Speaker = {
  imageSrc: string;
  name: string;
  title: string;
};

// SpeakerCard.tsx
const SpeakerCard = ({
  imageSrc,
  name,
  title,
}: {
  imageSrc: string;
  name: string;
  title: string;
}) => {
  return (
    <div className="p-4 w-full md:w-1/4 flex flex-col items-center space-y-4">
      <div
        className="h-72 w-72 bg-cover rounded-full overflow-hidden object-cover" // Adjusted to Tailwind CSS classes for 300px by 300px
        style={{ backgroundImage: `url('${imageSrc}')` }} // Removed height inline style
        title={name}
      >
        {/* Image will be displayed here */}
      </div>
      <div className="w-72 border-gray-400 bg-white rounded p-4 flex flex-col items-center">
        <p className="text-sm text-gray-600">{title}</p>
        <div className="text-gray-900 font-bold text-xl mb-2">{name}</div>
      </div>
    </div>
  );
};

// Speakers.tsx
const Speakers = ({ speakers }: { speakers: Speaker[] }) => {
  return (
    <div className="container mx-auto">
      <h2 className="text-lg md:text-2xl font-bold mb-3 space-mono-bold">
        Speakers
      </h2>
      <p className="text-sm md:text-xl mb-10 space-mono-regular">
        The lineup of speakers here will be updated on an ongoing basis, do
        check back from time to time!
      </p>
      <div className="flex flex-wrap justify-start">
        {speakers.map((speaker, index) => (
          <SpeakerCard
            key={index}
            imageSrc={speaker.imageSrc}
            name={speaker.name}
            title={speaker.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Speakers;
