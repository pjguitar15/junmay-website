import React from "react";
import { Fade } from "react-slideshow-image"; // Import the Fade component
import "react-slideshow-image/dist/styles.css"; // Import slideshow styles
import { FAMILY_IMAGES } from "../images/ImageUrls";

const FamilySection: React.FC = () => {
  // Array of family photo URLs
  const familyPhotos = FAMILY_IMAGES;

  // Helper function to group photos into pairs or single images based on screen size
  const groupPhotos = (photos: string[]) => {
    const grouped: string[][] = [];
    const isSmallScreen = window.innerWidth < 768; // Check for small screen size

    const itemsPerGroup = isSmallScreen ? 1 : 2; // 1 photo per slide on small screens, 2 on larger screens

    for (let i = 0; i < photos.length; i += itemsPerGroup) {
      grouped.push(photos.slice(i, i + itemsPerGroup));
    }
    return grouped;
  };

  const photoGroups = groupPhotos(familyPhotos);

  return (
    <section className='bg-gray-100 py-8'>
      <div className='container mx-auto px-4 flex flex-col md:flex-row items-center'>
        <div className='w-full md:w-1/2 mb-8 md:mb-0 md:pe-12'>
          <h2 className='text-3xl font-alex-brush text-pink-800 text-center md:text-left mb-4'>
            Family Memories
          </h2>
          <p className='text-gray-700 text-center md:text-left'>
            Cherish the moments with our family, capturing the love and
            togetherness we share. These photos are a testament to the joy we
            experience when we are with the ones we love the most.
          </p>
        </div>
        <div className='w-full md:w-1/2 relative overflow-hidden rounded-lg'>
          <Fade
            autoplay={true}
            pauseOnHover={true}
            transitionDuration={800}
            duration={3000}
            arrows={true}
          >
            {photoGroups.map((photos, index) => (
              <div
                className={`flex ${
                  photos.length === 1 ? "justify-center items-center" : ""
                }`} // Center single photo in the middle
                key={index}
              >
                {photos.map((src, idx) => (
                  <div
                    className={`w-full ${
                      photos.length > 1 ? "md:w-1/2" : "md:w-full"
                    } p-2`} // Adjust width based on number of photos per slide
                    key={idx}
                  >
                    <img
                      src={src}
                      alt={`Family ${index * 2 + idx + 1}`}
                      className='w-full h-60 md:h-96 object-cover rounded-lg'
                    />
                  </div>
                ))}
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default FamilySection;
