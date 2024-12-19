import React, { useEffect, useRef } from 'react';
import { assets } from "../assets/assets"

const AboutVideo = () => {
  const videoRef = useRef(null); // Reference to the video element

  useEffect(() => {
    const video = videoRef.current;

    // Create the observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            video.play();  // Play the video when in view
          } else {
            video.pause(); // Pause the video when out of view
          }
        });
      },
      { threshold: 0.5 } // Play when 50% of the video is in view
    );

    // Observe the video element
    if (video) {
      observer.observe(video);
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (video) {
        observer.unobserve(video);
      }
    };
  }, []);

  return (
    <div className="flex align-center justify-center  h-auto mb-10">
      <video 
        ref={videoRef} 
        className="w-3/4 rounded-xl shadow-xl shadow-black h-auto object-cover"
        src={assets.VideoProject} 
        loop 
        muted
        playsInline
      />
    </div>
  );
}

export default AboutVideo;
