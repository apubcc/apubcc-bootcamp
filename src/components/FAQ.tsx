"use client";

import React, { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/solid";

const faqs = [
	{
		question: "Who are the organizers of this bootcamp?",
		answer:
			"The organizers are APUBCC, the first and largest student blockchain club in Malaysia.",
	},
	{
		question: "Who can attend this bootcamp?",
		answer:
			"The bootcamp is open to all university students and lecturers interested in learning about basic blockchain development, regardless of their prior knowledge in development or experience in the field.",
	},
	{
		question:
			"I have purchased the tickets, but I cannot attend the event. What will happen to the tickets?",
		answer:
			"The money used to purchase the ticket cannot be refunded, but the swags will still be distributed to the participants even if they cannot make it physically to the bootcamp.",
	},
	{
		question:
			"I do not know anything about Blockchain Development or Web3 Development, will I be able to catch up with what’s being shared inside the bootcamp?",
		answer:
			"Yes definitely! The contents within the workshops that will be covered within this bootcamp will be basic and easy for everyone to follow along.",
	},
	{
		question:
			"Will this bootcamp be having more talks than  to teach about blockchain development?",
		answer:
			"No. The bootcamp will be workshop focused. The workshops are designed to be interactive and hands-on, so that participants can apply their knowledge practically.",
	},
	{
		question: "How will the bootcamp be conducted?",
		answer:
			"The bootcamp comprises of workshops, activity sessions, networking sessions and panel discussions. It's a mix of learning through development workshops taught by industry professionals and applying what you learned within your own project.",
	},
	{
		question: "Do I need to bring my laptop for the workshops within the bootcamp?",
		answer: "Yes! It is COMPULSORY to bring your own laptop.",
	},
	{
		question: "How do I stay updated on the latest news and announcements?",
		answer:
			"Check your emails regularly after you have registered, and do follow our social media pages for the latest updates on our events.",
	},
	{
		question: "I’m lost! How do I get to the event spaces?",
	},
	// ... potentially more FAQs from the image
];

export default function FAQSection() {
	const [openIndex, setOpenIndex] = useState(null);

	const toggleFAQ = (index: any) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className='w-full'>
			<h2 id='faq' className='text-lg md:text-2xl font-bold mb-5 space-mono-bold'>
				Frequently Asked Questions
			</h2>
			<div className='w-full'>
				{faqs.map((faq, index) => (
					<div key={index} className='mb-8'>
						<button
							className={`flex justify-between items-center w-full py-5 text-left text-sm md:text-lg font-semibold rounded-t-lg ${
								openIndex === index ? "rounded-b-none" : "rounded-lg"
							} bg-gradient-to-r from-blue-600 to-white-500 text-white shadow-xl hover:shadow-2xl transition-shadow duration-300`}
							onClick={() => toggleFAQ(index)}
						>
							<span className='flex-1 space-mono-regular text-justify'>{faq.question}</span>
							<span className='ml-4'>
								{openIndex === index ? (
									<MinusIcon className='w-6 h-6' />
								) : (
									<PlusIcon className='w-6 h-6' />
								)}
							</span>
						</button>
						{openIndex === index && (
							<div className='space-mono-regular-italic px-6 text-xs md:text-sm text-gray-700 bg-white rounded-b-lg shadow-lg text-justify'>
								{faq.answer}
								{/* render optional links */}
								{faq.question === "I’m lost! How do I get to the event spaces?" && (
									<div>
										Venue guides are available at{" "}
										<a
											href='https://drive.google.com/drive/folders/1lUr5L9zc8-zQ8EYR8soiVsrWLEJj8GZe'
											target='_blank'
											rel='noopener noreferrer'
											className='text-eventColor'
										>
											[link]
										</a>
									</div>
								)}
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
}
