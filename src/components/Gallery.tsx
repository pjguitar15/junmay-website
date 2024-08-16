import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Modal from "./Modal"; // Import the Modal component
import {
  CANDID_IMAGES,
  CEREMONY_IMAGES,
  PORTRAIT_IMAGES,
  RECEPTION_IMAGES,
} from "../images/ImageUrls";

const Gallery: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Mock image data for different categories
  const galleries: { [key: string]: string[] } = {
    candid: CANDID_IMAGES,
    ceremony: CEREMONY_IMAGES,
    reception: RECEPTION_IMAGES,
    portraits: PORTRAIT_IMAGES,
  };

  const galleryImages = galleries[category || ""] || [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  const handleImageClick = (src: string, index: number) => {
    setSelectedImage(src);
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    setSelectedImage(galleryImages[(currentIndex + 1) % galleryImages.length]);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + galleryImages.length) % galleryImages.length
    );
    setSelectedImage(
      galleryImages[
        (currentIndex - 1 + galleryImages.length) % galleryImages.length
      ]
    );
  };

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
                className='relative overflow-hidden rounded-lg shadow-md cursor-pointer'
                onClick={() => handleImageClick(src, index)}
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
      <Modal
        isOpen={isModalOpen}
        imageSrc={selectedImage || ""}
        onClose={closeModal}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </div>
  );
};

export default Gallery;
