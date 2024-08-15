import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css"; // Import slideshow styles

const FamilySection: React.FC = () => {
  // Array of family photo URLs
  const familyPhotos = [
    "https://images.unsplash.com/photo-1723279230514-c2d1401f794d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1720048170996-40507a45c720?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1723130028854-1b97ca970bf6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // Add more photos as needed
  ];

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
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-alex-brush text-pink-800 text-center mb-8'>
          Family Memories
        </h2>
        <div className='relative overflow-hidden rounded-lg shadow-md'>
          <Slide
            autoplay={true}
            pauseOnHover={true}
            transitionDuration={800}
            duration={3000}
            arrows={true}
          >
            {photoGroups.map((photos, index) => (
              <div
                className='flex'
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
                      className='w-full h-80 md:h-96 object-cover rounded-lg'
                    />
                  </div>
                ))}
              </div>
            ))}
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default FamilySection;
