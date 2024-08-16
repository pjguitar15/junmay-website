import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl"; // Import icons

interface ModalProps {
  isOpen: boolean;
  imageSrc: string;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  imageSrc,
  onClose,
  onNext,
  onPrevious,
}) => {
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        onNext();
      } else if (event.key === "ArrowLeft") {
        onPrevious();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onNext, onPrevious]);

  // Handle clicks outside the modal to close it
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50'
      onClick={handleOverlayClick} // Handle overlay click
    >
      <motion.div
        className='relative bg-white rounded-lg max-w-3xl mx-4'
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Close Button */}
        <button
          className='absolute top-2 right-2 text-black text-3xl bg-white rounded-full p-2 hover:bg-gray-100'
          onClick={onClose}
        >
          &times;
        </button>

        {/* Navigation Buttons */}
        <button
          className='absolute left-0 top-1/2 transform -translate-y-1/2 text-pink-800 text-3xl p-2 bg-white rounded-full hover:bg-gray-100'
          onClick={onPrevious}
        >
          <SlArrowLeft />
        </button>
        <button
          className='absolute right-0 top-1/2 transform -translate-y-1/2 text-pink-800 text-3xl p-2 bg-white rounded-full hover:bg-gray-100'
          onClick={onNext}
        >
          <SlArrowRight />
        </button>

        {/* Image */}
        <img
          src={imageSrc}
          alt='Selected'
          className='w-full h-auto max-h-[80vh] object-contain'
        />
      </motion.div>
    </div>
  );
};

export default Modal;
