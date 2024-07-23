// Welcome.tsx

import React from "react";

export default function Welcome() {
	return (
		<section className='text-white space-mono-regular pt-10 md:pt-20'>
			<h2 className='text-lg md:text-2xl text-justify space-mono-bold mb-3'>
				Welcome
				<sup>
					<a
						href='https://x.com/apubcc/status/1751929034542551454?s=20'
						target='_blank'
						rel='noopener noreferrer'
						className='text-eventColor'
					>
						(again)
					</a>
				</sup>{" "}
				to APUBCC’s fourth bootcamp under the{" "}
				<a
					className='text-eventColor'
					href='https://devcon.org/en/'
					target='_blank'
					rel='noopener noreferrer'
				>
					Road to Devcon
				</a>{" "}
				initiative!
			</h2>
			<p className='text-sm md:text-xl mb-10 space-mono-regular text-justify'>
				Enjoyed our first, second and third bootcamp? We’re back with another exciting bootcamp
				filled with interactive, and more hands-on activities that will take your Web3 skills from
				zero to hero.
			</p>
			<h3 className='text-lg md:text-2xl mb-3 space-mono-bold'>Why should I join?</h3>
			<ul className='text-sm md:text-xl text-justify list-disc list-inside space-mono-regular'>
				<li className='pt-2 mb-3'>
					In this bootcamp series, you will brainstorm IDEAS for your cool WEB3 projects!
				</li>
				<li className='pt-2 mb-3'>
					Job in Web 3: Grab a chance to connect with web3 company and get hired.
				</li>
				<li className='pt-2'>Networking: Meet and connect with like-minded individuals.</li>
			</ul>
			{/* Add more content as needed */}
		</section>
	);
}
