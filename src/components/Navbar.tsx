import { motion } from "framer-motion";
import ringLogo from "../assets/wedding-ring.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='bg-white shadow-lg'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        {/* Logo */}
        <Link to='/'>
          <motion.div
            className='text-2xl font-bold text-pink-800'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className='flex gap-2 items-center font-alex-brush'>
              <img
                className='w-7'
                src={ringLogo}
                alt='ring logo'
              />
              Mayrried in June
            </div>
          </motion.div>
        </Link>

        {/* Navigation Links */}
        <motion.ul
          className='flex space-x-8 text-pink-600 font-lato'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            "Home",
            "Photo Collection",
            "About",
            "Bridesmaid & Groomsmen",
            "Essential Items",
          ].map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1, color: "#DB2777" }} // scale on hover with pink color
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href='#'
                className='hover:text-pink-800'
              >
                {item}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </nav>
  );
};

export default Navbar;
