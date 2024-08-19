import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";
import ringLogo from "../assets/wedding-ring.svg";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // New state for scroll detection
  const location = useLocation();
  const navigate = useNavigate();

  // Toggle menu function
  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle link click
  const handleLinkClick = (item: string) => {
    if (item === "Home") {
      navigate("/");
    } else {
      navigate("/");
      setTimeout(() => {
        document
          .querySelector(`#${item.split(" ").join("-").toLowerCase()}`)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
    setIsOpen(false); // Close the menu on link click
  };

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adjust scroll position threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if current path is home
  const isHomePage = location.pathname === "/";

  return (
    <nav
      className={`${
        isHomePage ? "fixed top-0 left-0 right-0 z-50" : ""
      } transition-colors duration-300 ${
        isHomePage
          ? isScrolled
            ? "bg-white shadow-lg"
            : "bg-transparent"
          : "bg-white shadow-lg"
      }`}
    >
      <div className='container mx-auto px-4 py-4 flex justify-between items-center relative'>
        {/* Logo */}
        <ScrollLink
          to='home'
          smooth={true}
          duration={500}
          offset={-80} // Adjust based on your navbar height
          className='cursor-pointer'
        >
          <motion.div
            onClick={() => navigate("/")}
            className={`text-2xl font-bold cursor-pointer ${
              isScrolled || !isHomePage ? "text-pink-800" : "text-white"
            }`}
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
        </ScrollLink>

        {/* Burger Menu Icon */}
        <div
          onClick={toggleMenu}
          className={`flex items-center lg:hidden z-50 cursor-pointer ${
            isScrolled || !isHomePage ? "text-pink-800" : "text-white"
          }`}
        >
          <RxHamburgerMenu className='text-3xl' />
        </div>

        {/* Navigation Links */}
        <motion.ul
          className={`hidden lg:flex gap-2 font-lato ${
            isScrolled || !isHomePage ? "text-pink-600" : "text-white"
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            "Home",
            "About",
            "Photo Collection",
            "Bridesmaid & Groomsmen",
            "Wedding Vows",
            "Essential Items", // Moved "Essential Items" to the end
          ].map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1, color: "#DB2777" }} // scale on hover with pink color
              transition={{ type: "spring", stiffness: 300 }}
              className='cursor-pointer'
            >
              <ScrollLink
                to={item.split(" ").join("-").toLowerCase()}
                smooth={true}
                duration={500}
                offset={-80} // Adjust based on your navbar height
                activeClass='text-pink-600 underline' // Class to apply when active
                className={`block px-4 py-2 transition-colors ${
                  isScrolled || !isHomePage
                    ? "text-pink-800 hover:text-pink-600"
                    : "text-white hover:text-pink-400"
                }`}
                onClick={() => handleLinkClick(item)}
              >
                {item}
              </ScrollLink>
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile Menu */}
        <motion.div
          className={`fixed top-0 right-0 bg-white w-2/4 md:w-1/2 shadow-lg h-full transition-transform ease-in-out duration-300 ${
            isOpen ? "translate-x-0 z-50" : "translate-x-full -z-20 hidden"
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
            className='flex flex-col font-lato'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {[
              "Home",
              "About",
              "Photo Collection",
              "Bridesmaid & Groomsmen",
              "Wedding Vows",
              "Essential Items", // Moved "Essential Items" to the end
            ].map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1, color: "#DB2777" }}
                transition={{ type: "spring", stiffness: 300 }}
                className='border-b last:border-b-0 cursor-pointer'
              >
                <ScrollLink
                  to={item.split(" ").join("-").toLowerCase()}
                  smooth={true}
                  duration={500}
                  offset={-80} // Adjust based on your navbar height
                  activeClass='text-pink-600 underline' // Class to apply when active
                  className={`block px-4 py-2 ${
                    isScrolled || !isHomePage
                      ? "text-black hover:text-gray-800"
                      : "text-black hover:text-gray-600"
                  }`}
                  onClick={() => handleLinkClick(item)} // Close menu on item click
                >
                  {item}
                </ScrollLink>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
