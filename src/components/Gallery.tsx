import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const Gallery: React.FC = () => {
  const { category } = useParams<{ category: string }>();

  // Mock image data for different categories
  const galleries: { [key: string]: string[] } = {
    candid: [
      "/images/engagement1.jpg",
      "/images/engagement2.jpg",
      "/images/engagement3.jpg",
    ],
    ceremony: [
      "/images/wedding1.jpg",
      "/images/wedding2.jpg",
      "/images/wedding3.jpg",
    ],
    reception: [
      "/images/reception1.jpg",
      "/images/reception2.jpg",
      "/images/reception3.jpg",
    ],
    portraits: [
      "/images/reception1.jpg",
      "/images/reception2.jpg",
      "/images/reception3.jpg",
    ],
    prenup: [
      "/images/reception1.jpg",
      "/images/reception2.jpg",
      "/images/reception3.jpg",
    ],
  };

  const galleryImages = galleries[category || ""] || [];

  return (
    <div className='bg-white py-8'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-alex-brush text-pink-800 text-center mb-8'>
          {category
            ? `${category.charAt(0).toUpperCase() + category.slice(1)} Gallery`
            : "Gallery"}
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {galleryImages.length > 0 ? (
            galleryImages.map((src, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                }}
                className='relative overflow-hidden rounded-lg shadow-md'
              >
                <img
                  src={src}
                  alt={`${category} ${index + 1}`}
                  className='w-full h-64 object-cover'
                />
                <div className='absolute inset-0 bg-black opacity-0 hover:opacity-40 transition-opacity duration-300'>
                  <div className='flex items-center justify-center h-full'>
                    <p className='text-white text-lg font-lato'>View Image</p>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <p className='text-center text-pink-600 col-span-full'>
              No images available for this category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
