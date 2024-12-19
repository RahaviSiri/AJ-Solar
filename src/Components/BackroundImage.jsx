import { assets } from '../assets/assets';
import React, { useState, useEffect } from 'react'; 

const BackroundImage = () => {
    const [backgroundImage, setBackgroundImage] = useState('');

    // Array of background images
    const backgroundImages = [
        assets.back_1, 
        assets.back_2,
        assets.back_3,
        assets.back_4,
        assets.back_5,
        assets.backround_img,
        assets.back_7,
        // Add more images as needed
    ];

    // Function to randomly select a background image
    const getRandomBackgroundImage = () => {
        const randomIndex = Math.floor(Math.random() * backgroundImages.length);
        return backgroundImages[randomIndex];
    };

    useEffect(() => {
        // Set initial background image
        setBackgroundImage(getRandomBackgroundImage());

        // Change background image every second
        const intervalId = setInterval(() => {
            setBackgroundImage(getRandomBackgroundImage());
        }, 1000); // Change image every 1000 milliseconds (1 second)

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="relative">
            <div className="relative w-full h-[500px]">
                {/* Background Image */}
                <img src={backgroundImage} alt="Banner" className="w-full h-full object-cover" />
            </div>

            
            {/* Bottom Section with Hotline and Social Links */}
            <div className="absolute bottom-0 left-0 flex items-center justify-between w-full p-4 text-white bg-black bg-opacity-50 z-30">
                <div>
                    <p className="text-lg">Hotline: 077-7123-986</p>
                </div>
                <div className="flex gap-4">
                    <a href="https://www.facebook.com/profile.php?id=61562148731964&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f fa-2x"></i>
                    </a>
                    <a href="https://wa.me/94759329632" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-whatsapp fa-2x"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BackroundImage;
