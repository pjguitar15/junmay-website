import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

const photoItems = [
  {
    title: "Portraits",
    description: "Elegant portraits capturing the essence of each individual.",
    imgUrl:
      "https://res.cloudinary.com/dbibwzs6c/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1723517838/mayjune/portraits/_ACP6199_lvmtzf.jpg",
  },
  {
    title: "Candid",
    description: "Genuine moments captured in the most natural way.",
    imgUrl:
      "https://res.cloudinary.com/dbibwzs6c/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1723518904/mayjune/portraits/_ACP6223_vawe4g.jpg",
  },
  {
    title: "Ceremony",
    description: "Beautifully captured moments from the ceremony.",
    imgUrl:
      "https://res.cloudinary.com/dbibwzs6c/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1723519036/mayjune/portraits/MRV00466_mom9aj.jpg",
  },
  {
    title: "Reception",
    description:
      "Memorable moments from the reception, filled with joy and celebration.",
    imgUrl:
      "https://res.cloudinary.com/dbibwzs6c/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1723519102/mayjune/portraits/MRV00902_e2cr99.jpg",
  },
];

const OurPhotos = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.5, // Trigger when 50% of the component is in view
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      ref={ref}
      id='photo-collection'
      className='px-4 py-16 bg-white text-center'
    >
      <div className='container mx-auto'>
        <motion.p
          className='text-pink-600 text-lg mb-2 font-lato'
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          <span
            role='img'
            aria-label='photos'
          >
            📸
          </span>{" "}
          Our Photo Collection{" "}
          <span
            role='img'
            aria-label='photos'
          >
            📸
          </span>
        </motion.p>
        <motion.h2
          className='text-3xl md:text-4xl font-extrabold text-gray-800 mb-8 font-alex-brush'
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Explore Our Captured Moments
        </motion.h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 font-lato'>
          {photoItems.map((item, index) => (
            <motion.div
              key={index}
              className='photo-item rounded-lg p-4'
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img
                src={item.imgUrl}
                alt={item.title}
                className='mx-auto mb-4 rounded-lg'
              />
              <h3 className='text-xl font-bold text-gray-800 mb-2'>
                {item.title}
              </h3>
              <p className='text-gray-600 mb-4'>{item.description}</p>
              <button
                onClick={() => navigate(`/gallery/${item.title.toLowerCase()}`)}
                className='text-pink-600 hover:text-pink-800 font-semibold'
              >
                View Gallery
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPhotos;
