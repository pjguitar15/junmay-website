import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll"; // Import Link from react-scroll
import { RxHamburgerMenu } from "react-icons/rx";
import ringLogo from "../assets/wedding-ring.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <nav className='bg-white shadow-lg sticky top-0 z-50'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center relative'>
        {/* Logo */}
        <Link
          to='home'
          smooth={true}
          duration={500}
          offset={-80} // Adjust this value based on your navbar height
          className='cursor-pointer'
        >
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

        {/* Burger Menu Icon */}
        <div
          onClick={toggleMenu}
          className={`flex items-center lg:hidden z-50 cursor-pointer`}
        >
          <RxHamburgerMenu className='text-pink-800 text-3xl' />
        </div>

        {/* Navigation Links */}
        <motion.ul
          className='hidden lg:flex gap-8 text-pink-600 font-lato'
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
              className='cursor-pointer'
            >
              <Link
                to={item.split(" ").join("-").toLowerCase()}
                smooth={true}
                duration={500}
                offset={-80} // Adjust based on your navbar height
                className='hover:text-pink-800'
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile Menu */}
        <motion.div
          className={`fixed top-0 right-0 bg-white w-2/4 md:w-1/2 shadow-lg h-full transition-transform ease-in-out duration-300 ${
            isOpen ? "translate-x-0 z-50" : "translate-x-full -z-20"
          }`}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 300 }}
          transition={{ duration: 0.3 }}
        >
          <div className='flex justify-end p-4'>
            <RxHamburgerMenu
              className='text-pink-800 text-3xl cursor-pointer'
              onClick={toggleMenu}
            />
          </div>
          <motion.ul
            className='flex flex-col text-pink-600 font-lato'
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
                whileHover={{ scale: 1.1, color: "#DB2777" }}
                transition={{ type: "spring", stiffness: 300 }}
                className='border-b last:border-b-0 text-black cursor-pointer'
              >
                <Link
                  to={item.split(" ").join("-").toLowerCase()}
                  smooth={true}
                  duration={500}
                  offset={-80} // Adjust based on your navbar height
                  className='block px-4 py-2'
                  onClick={() => setIsOpen(false)} // Close menu on item click
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
