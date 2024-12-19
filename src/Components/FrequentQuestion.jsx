import React, { useState } from 'react';

const FrequentQuestion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleVisibility = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqItems = [
        {
        question: "What to consider when installing a solar power plant at your home",
        answers: [
                "Available space on the roof and strength of the roof",
                "The amount of light that the roof gets",
                "Selection of a reliable institution to install a solar power system",
        ],
        },
        {
        question: "How does solar power work?",
        answers: [
                "Solar panels capture sunlight and convert it into electricity",
                "Inverters convert the direct current (DC) electricity into alternating current (AC)",
                "The electricity is then used to power your home or stored in batteries",
        ],
        },
        {
            question: "Do I need special permission for solar pannel installation?",
            answers: [
                "No permission is required for an off-grid solar panel system which is not connected to the grid. However, for a grid-connected solar PV system, it is necessary to get permission from CEB/LECO and follow the right procedure for approvals.",
                "Our team will aid you in the entire process of receiving the necessary permissions.",
        ],
        },
        {
            question: "How much oes it need cost to installsolar panels",
            answers: [
                "The cost for the installation of solar panels varies due to numerous factors, including the brand/ model of solar panels of your choice, the capacity of the solar PV system required, the type of roof you have and the angle at your roof is installed, labour costs and so on.",
        ],
        },
        {
            question: "What happen if there is a power cut?",
            answers: [
                "The grid-tied inverter in a Solar PV system alone won't work during a power outage - but when paired with a battery backup solution, it can.",

                "As your solar panel is connected to the grid, most solar installations will shut off during a power cut to ensure that it doesn't feed live electricity into the power lines. However, if you have a battery backup system connected to your solar panels, you will be able to use your solar energy during a power cut.",
        ],
        },
        {
            question: "How long do solar panels last?",
            answers: [
                "According to industry standards, the efficient lifespan expectancy of solar panels ranges from 25-30 years. However, a solar panel won't die after 20-30 years, rather, its power output will gradually decrease from its designed capacity of 85%. Solar panels are likely to continue to work for many decades, given they aren't physically damaged by extreme weather, wind, debris or any other external factors.",
        ],
        },

    ];

    return (
        <div className="p-4 max-w-2xl mx-auto my-5">
            <h1 className="text-2xl font-bold mb-4 text-center">Frequently Asked Questions</h1>
            {faqItems.map((item, index) => (
                <div key={index} className="border border-gray-300 rounded-md shadow-lg p-4 mb-3">
                    <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleVisibility(index)}>
                        <p className="text-lg font-medium">
                            <i className={`fa ${openIndex === index ? 'fa-minus' : 'fa-plus'} mr-2`} aria-hidden="true"></i>
                            {item.question}
                        </p>
                    </div>
                    {openIndex === index && (
                        <div className="mt-2 ml-4">
                            <ul className="list-disc pl-5 space-y-2">
                                {item.answers.map((answer, i) => (
                                    <li key={i}>{answer}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FrequentQuestion;
