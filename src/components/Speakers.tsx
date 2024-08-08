"use client";

// Define a type for the speaker data
type Speaker = {
	imageSrc: string;
	name: string;
	title: string;
};

//  list of speakers
const speakers = [
	{
		imageSrc: "amiera-norazizan.jpeg",
		name: "Amiera Norazizan, Future Lab",
		title: "Community Executive",
	},
	{
		imageSrc: "vienna.jpeg",
		name: "vienna, Pagoda",
		title: "Community Executive",
	},
];

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
		<div className='p-4 md:px-8 w-1/2 md:w-1/4 flex flex-col items-center space-y-4'>
			{" "}
			{/* Adjusted padding */}
			<div
				className='md:h-72 md:w-72 h-36 w-36 bg-cover rounded-full overflow-hidden object-cover'
				style={{ backgroundImage: `url('${imageSrc}')` }}
				title={name}
			>
				{/* Image will be displayed here */}
			</div>
			<div className='border-gray-400 bg-white rounded p-4 flex flex-col items-center text-center'>
				<p className='text-sm text-gray-600 mb-2'>{title}</p>
				<div className='text-gray-900 font-bold text-lg mb-2'>{name}</div>
			</div>
		</div>
	);
};

// Speakers.tsx
export default function Speakers() {
	return (
		<div className='container mx-auto'>
			<h2 id='speakers' className='text-lg md:text-2xl font-bold mb-3 space-mono-bold'>
				Speakers
			</h2>
			<p className='text-justify text-sm md:text-xl mb-10 space-mono-regular'>
				The lineup of speakers here will be updated on an ongoing basis, do check back from time to
				time!
			</p>
			<div className='flex flex-wrap justify-start'>
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
}
