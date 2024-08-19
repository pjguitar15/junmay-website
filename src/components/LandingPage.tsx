import { motion } from "framer-motion";
import { Link } from "react-scroll";

const LandingPage = () => {
  return (
    <section
      className='relative w-full h-screen flex items-center justify-center overflow-hidden'
      id='home'
    >
      <div className='absolute inset-0 w-full h-full'>
        <iframe
          src='https://player.vimeo.com/video/1000211229?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0&autoplay=1&muted=1&background=1'
          frameBorder='0'
          allow='autoplay; fullscreen; picture-in-picture; clipboard-write'
          allowFullScreen
          className='absolute inset-0 w-full h-full'
          title='Jun & May Wedding BG Slide'
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        ></iframe>
        {/* Dark overlay */}
        <div className='absolute inset-0 w-full h-full bg-black opacity-50'></div>
      </div>

      <div className='relative z-10 container mx-auto px-4 py-16'>
        <motion.div
          className='w-full md:w-7/12 lg:w-6/12 text-left'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.p
            className='text-white text-lg mb-2 font-lato'
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
            className='text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4 font-alex-brush'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            A Celebration of love, <br /> captured in timeless moments.
          </motion.h1>
          <motion.p
            className='text-white mb-6 font-lato'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            Relive the joy, the laughter, and the heartfelt emotions that made
            our day unforgettable. <br /> Each photo is a piece of our story, a
            memory to cherish forever.
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
      </div>
    </section>
  );
};

export default LandingPage;
