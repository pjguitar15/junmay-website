import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const teamMembers = [
  {
    name: "Placeholder 2",
    role: "Bridesmaid",
    image:
      "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto:low,f_auto/v1723522291/mayjune/team/Juran_jpyoaw.png",
  },
  {
    name: "Placeholder 3",
    role: "Bridesmaid",
    image:
      "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto:low,f_auto/v1723522367/mayjune/team/jerico_wife_qlnhqf.png",
  },
  {
    name: "Placeholder 4",
    role: "Bridesmaid",
    image:
      "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto:low,f_auto/v1723522566/mayjune/team/wife_tpzbgy.png",
  },
  {
    name: "Placeholder 5",
    role: "Bridesmaid",
    image:
      "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto:low,f_auto/v1723522646/mayjune/team/jongwon_partner_lmxxza.png",
  },
  {
    name: "Placeholder 6",
    role: "Bridesmaid",
    image:
      "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto:low,f_auto/v1723522697/mayjune/team/chwen_b3asm7.png",
  },
  {
    name: "Jundo Teves",
    role: "Groomsmen",
    image:
      "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto:low,f_auto/v1723521813/mayjune/team/jundo_l0mu90.png",
  },
  {
    name: "Rinka Basuil",
    role: "Groomsmen",
    image:
      "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto:low,f_auto/v1723521713/mayjune/team/Rinka_zgtbaw.png",
  },
  {
    name: "Jerico",
    role: "Groomsmen",
    image:
      "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto:low,f_auto/v1723521879/mayjune/team/jeric_ji2aes.png",
  },
  {
    name: "Enter Name",
    role: "Groomsmen",
    image:
      "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto:low,f_auto/v1723521944/mayjune/team/asdZ_un8jma.png",
  },
  {
    name: "Jong Won Teves",
    role: "Groomsmen",
    image:
      "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto:low,f_auto/v1723522143/mayjune/team/jong_won_xdmhdw.png",
  },
];

const itemsPerPage = 5;

const TeamSection = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(teamMembers.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = currentPage * itemsPerPage;
  const selectedMembers = teamMembers.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <section
      className='py-24'
      id='bridesmaid-&-groomsmen'
    >
      <div className='text-center mb-8'>
        <h2 className='text-5xl font-bold font-alex-brush'>
          Bridesmaids & Groomsmen
        </h2>
        <p className='text-lg text-gray-500 font-lato'>
          Honoring the Special Ones by Your Side
        </p>
      </div>

      <div className='relative container mx-auto px-12'>
        <AnimatePresence>
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 mx-auto'
          >
            {selectedMembers.map((member, index) => (
              <motion.div
                key={index}
                className='text-center transform transition duration-300 hover:scale-105 font-lato'
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className='w-full h-auto rounded-lg mb-4'
                />
                <h3 className='text-lg font-semibold'>{member.name}</h3>
                <p className='text-gray-500'>{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className='flex justify-center mt-8'>
        <button
          onClick={handlePrev}
          className={`flex items-center justify-center p-4 mx-2 rounded-full transition duration-300 transform hover:scale-105 ${
            currentPage === 0
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white"
          }`}
          disabled={currentPage === 0}
        >
          <SlArrowLeft className='w-4 h-4' />
          <span className='sr-only'>Previous</span>
        </button>
        <button
          onClick={handleNext}
          className={`flex items-center justify-center p-4 mx-2 rounded-full transition duration-300 transform hover:scale-105 ${
            currentPage === totalPages - 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white"
          }`}
          disabled={currentPage === totalPages - 1}
        >
          <SlArrowRight className='w-4 h-4' />
          <span className='sr-only'>Next</span>
        </button>
      </div>
    </section>
  );
};

export default TeamSection;
