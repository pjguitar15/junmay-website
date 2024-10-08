import React from "react";
import { Fade } from "react-slideshow-image"; // Import the Fade component
import "react-slideshow-image/dist/styles.css"; // Import slideshow styles
import { PrenupImages } from "../images/ImageUrls";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl"; // Import icons

const PrenupSlideshow: React.FC = () => {
  return (
    <div className='bg-white py-16 md:py-28'>
      <div className='container mx-auto px-4 md:px-24'>
        <div className='flex flex-col lg:flex-row items-start md:items-center gap-8 md:gap-3'>
          <div className='relative overflow-hidden rounded-lg shadow-md w-full'>
            <div className='relative overflow-hidden aspect-w-16 aspect-h-9'>
              <Fade
                autoplay={true}
                pauseOnHover={true}
                transitionDuration={500} // Transition duration in ms
                duration={1000} // Duration to display each slide in ms
                arrows={true}
                prevArrow={
                  <div className='custom-arrow left'>
                    <SlArrowLeft />
                  </div>
                }
                nextArrow={
                  <div className='custom-arrow right'>
                    <SlArrowRight />
                  </div>
                }
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
                      className='w-full h-auto object-cover'
                    />
                  </div>
                ))}
              </Fade>
            </div>
          </div>
          <div className='mt-8 md:mt-4 md:ml-8 text-center md:text-left'>
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
