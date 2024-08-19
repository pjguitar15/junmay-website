import React from "react";
import { Fade } from "react-slideshow-image"; // Import the Fade component
import "react-slideshow-image/dist/styles.css"; // Import slideshow styles
import { GROUP_PHOTOS } from "../images/ImageUrls";

const GroupPhotosSection: React.FC = () => {
  // Array of group photo URLs
  const groupPhotos = GROUP_PHOTOS;

  return (
    <section className='bg-gray-100 py-8'>
      <div className='container mx-auto px-4 flex flex-col md:flex-row items-center'>
        {/* Slider */}
        <div className='w-full md:w-1/2 mb-8 md:mb-0 md:pe-12'>
          <Fade
            autoplay={true}
            pauseOnHover={true}
            transitionDuration={800}
            duration={2000}
            arrows={true}
          >
            {groupPhotos.length > 0 ? (
              groupPhotos.map((src, index) => (
                <div
                  className='flex justify-center items-center'
                  key={index}
                >
                  <img
                    src={src}
                    alt={`Group Photo ${index + 1}`}
                    className='w-full h-60 md:h-96 object-cover rounded-lg'
                    onError={(e) => {
                      // Handle image load error
                      e.currentTarget.src =
                        "https://via.placeholder.com/800x600?text=Image+Not+Found";
                    }}
                    style={{ display: "block" }} // Ensure images are displayed
                  />
                </div>
              ))
            ) : (
              <p className='text-center text-gray-700'>No images available.</p>
            )}
          </Fade>
        </div>

        {/* Text */}
        <div className='w-full md:w-1/2'>
          <h2 className='text-3xl font-alex-brush text-pink-800 text-center md:text-left mb-4'>
            Group Photos
          </h2>
          <p className='text-gray-700 text-center md:text-left'>
            A collection of group photos from our wedding. These images capture
            the joy and camaraderie of our special day, showcasing the moments
            shared with our loved ones.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GroupPhotosSection;
