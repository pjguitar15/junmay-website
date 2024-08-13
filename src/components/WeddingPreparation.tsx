import { motion } from "framer-motion";

const accessoryItems = [
  {
    imgUrl:
      "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,w_800/v1723524056/mayjune/wedding%20prep/MRV09248_kw1uzv.jpg",
    alt: "Accessory 1",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,w_800/v1723524054/mayjune/wedding%20prep/MRV09255_uje2ub.jpg",
    alt: "Accessory 2",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dbibwzs6c/image/upload/q_auto,w_800/v1723524054/mayjune/wedding%20prep/MRV09265_qnkwcx.jpg",
    alt: "Accessory 3",
  },
];

const WeddingPreparation = () => {
  return (
    <section
      className='container mx-auto px-4 py-16 bg-pink-50 text-center'
      id='essential-items'
    >
      <motion.p
        className='text-pink-600 text-lg mb-2 font-lato'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span
          role='img'
          aria-label='wedding'
        >
          💍
        </span>{" "}
        Wedding Preparation{" "}
        <span
          role='img'
          aria-label='wedding'
        >
          💍
        </span>
      </motion.p>
      <motion.h2
        className='text-4xl md:text-5xl font-extrabold text-gray-800 mb-8 font-alex-brush'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Essential Items for Your Big Day
      </motion.h2>
      <div className='grid grid-cols-1 md:grid-cols-2 md:w-3/4 lg:w-5/8 mx-auto font-lato'>
        <motion.div
          className='item rounded-lg p-4 flex flex-col items-center'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src='https://res.cloudinary.com/dbibwzs6c/image/upload/w_600,q_auto,c_fill,g_auto,e_sharpen/v1723520864/mayjune/wedding%20essentials/MRV09216_rbhngw.jpg'
            alt='Wedding Gown'
            className='w-full rounded-lg mb-4'
          />
          <h3 className='text-xl font-bold text-gray-800 mb-2'>Wedding Gown</h3>
          <p className='text-gray-600'>
            Stunning gowns tailored to make you look your best on your special
            day.
          </p>
        </motion.div>
        <motion.div
          className='item rounded-lg p-4 flex flex-col items-center'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src='https://res.cloudinary.com/dbibwzs6c/image/upload/w_600,q_auto,c_fill,g_auto,e_sharpen/v1723521013/mayjune/wedding%20essentials/MRV09201_ojlqbq.jpg'
            alt='Groom Suit'
            className='w-full rounded-lg mb-4'
          />
          <h3 className='text-xl font-bold text-gray-800 mb-2'>Groom's Suit</h3>
          <p className='text-gray-600'>
            Elegant suits that ensure the groom looks sharp and stylish.
          </p>
        </motion.div>
      </div>
      <div className='mt-12 font-lato'>
        <h3 className='text-3xl font-bold text-gray-800 mb-4 font-alex-brush'>
          Wedding Accessories
        </h3>
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {accessoryItems.map((accessory, index) => (
            <motion.div
              key={index}
              className='rounded-lg p-4'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img
                src={accessory.imgUrl}
                alt={accessory.alt}
                className='w-full rounded-lg mb-4'
              />
            </motion.div>
          ))}
        </motion.div>
        <p className='text-gray-600 mt-4 font-lato'>
          Complement your outfit with beautiful accessories for a complete look.
        </p>
      </div>
    </section>
  );
};

export default WeddingPreparation;
