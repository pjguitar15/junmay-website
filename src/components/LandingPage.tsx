import { motion } from "framer-motion";
import MayFlowers from "../assets/may-flowers.webp";
import CoupleStare from "../assets/couple-stare.webp";
import { Link } from "react-scroll";

const LandingPage = () => {
  return (
    <section
      className='container mx-auto px-4 py-16 flex flex-col md:flex-row gap-9 justify-between items-center'
      id='home'
    >
      <motion.div
        className='w-full md:w-5/12 mb-8 md:mb-0'
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={MayFlowers}
          alt='Bride'
          className='rounded-lg shadow-lg'
        />
      </motion.div>

      <motion.div
        className='w-full md:w-5/12 text-center md:text-left'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.p
          className='text-pink-600 text-lg mb-2 font-lato'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <span
            role='img'
            aria-label='wedding'
          >
            💒
          </span>{" "}
          Our Wedding Day
          <span
            role='img'
            aria-label='wedding'
          >
            💒
          </span>
        </motion.p>
        <motion.h1
          className='text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-4 font-alex-brush'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          A Celebration of love, captured in timeless moments.
        </motion.h1>
        <motion.p
          className='text-gray-600 mb-6 font-lato'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          Relive the joy, the laughter, and the heartfelt emotions that made our
          day unforgettable. Each photo is a piece of our story, a memory to
          cherish forever.
        </motion.p>
        <Link
          to='video-section'
          smooth={true}
          duration={500}
          offset={-80} // Adjust based on your navbar height
        >
          <motion.button
            className='bg-pink-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-pink-700 font-lato'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            Watch Our Wedding Video
          </motion.button>
        </Link>
      </motion.div>

      <motion.div
        className='w-full md:w-5/12 mb-8 md:mb-0'
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={CoupleStare}
          alt='Couple'
          className='rounded-lg shadow-lg'
        />
      </motion.div>
    </section>
  );
};

export default LandingPage;
