import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css"; // Import slideshow styles
import { PrenupImages } from "../images/PrenupImages";

const PrenupSlideshow: React.FC = () => {
  return (
    <div className='bg-white py-16 md:py-28'>
      <div className='container mx-auto px-4 md:px-24'>
        <div className='flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-14'>
          <div className='relative overflow-hidden rounded-lg shadow-md w-full md:w-2/3'>
            <div className='relative overflow-hidden aspect-w-16 aspect-h-9'>
              <Slide
                autoplay={true}
                pauseOnHover={true}
                transitionDuration={500} // Transition duration in ms
                duration={900} // Duration to display each slide in ms
                arrows={true}
                canSwipe={true}
                infinite={true} // Ensure the slideshow loops
              >
                {PrenupImages.map((src, index) => (
                  <div
                    className='mySlides fade'
                    key={index}
                  >
                    <img
                      src={src}
                      alt={`Prenup ${index}`}
                      className='slide-image'
                    />
                  </div>
                ))}
              </Slide>
            </div>
          </div>
          <div className='mt-8 md:mt-0 md:ml-8 text-center md:text-left'>
            <h2 className='text-3xl md:text-4xl font-alex-brush text-pink-800 mb-6'>
              Prenup Moments
            </h2>
            <p className='text-gray-700 mb-4'>
              Our prenup photos beautifully capture the essence of our love
              story and the journey we've been on together. From candid moments
              to carefully crafted poses, each image tells a unique part of our
              story and our excitement for the future.
            </p>
            <p className='text-gray-700'>
              We hope these images bring a smile to your face and make you feel
              a part of our special day. Thank you for being a cherished part of
              our lives and our celebration!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrenupSlideshow;
