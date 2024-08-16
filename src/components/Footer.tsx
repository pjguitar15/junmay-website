import { motion } from "framer-motion";
import ringLogo from "../assets/wedding-ring.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-pink-100 shadow-inner'>
      <div className='container mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-2 items-center justify-between'>
        {/* Logo and Copyright */}
        <motion.div
          className='text-pink-800 font-alex-brush md:col-span-1 text-center lg:text-left'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className='flex gap-3 items-center justify-center lg:justify-start'>
            <img
              className='w-9'
              src={ringLogo}
              alt='ring logo'
            />
            <span className='text-3xl'>Mayrried in June</span>
          </div>
          <p className='text-sm font-lato mt-2 text-pink-600'>
            © {currentYear} Mayrried in June. All rights reserved.
          </p>
        </motion.div>

        {/* Footer Navigation Links */}
        <motion.ul
          className='flex flex-col lg:flex-row xl:gap-9 justify-end text-pink-600 font-lato mt-6 md:mt-0 text-center md:text-right'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { name: "Home" },
            { name: "About", link: "#" },
            { name: "Photo Collection" },
            { name: "Bridesmaid & Groomsmen" },
            { name: "Essential Items" },
          ].map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1, color: "#DB2777" }} // scale on hover with pink color
              transition={{ type: "spring", stiffness: 300 }}
              className='text-center'
            >
              <a
                href={`#${item.name.split(" ").join("-").toLowerCase()}`}
                className='hover:text-pink-800 transition duration-300 ease-in-out'
              >
                {item.name}
              </a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Footer Legal Links */}
        {/* <motion.ul
          className='flex flex-col md:space-x-6 text-pink-600 font-lato mt-6 md:mt-0 text-center md:text-right'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { name: "Privacy Policy", link: "#" },
            { name: "Terms of Service", link: "#" },
            { name: "Contact Us", link: "#" },
          ].map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1, color: "#DB2777" }} // scale on hover with pink color
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href={item.link}
                className='hover:text-pink-800 transition duration-300 ease-in-out'
              >
                {item.name}
              </a>
            </motion.li>
          ))}
        </motion.ul> */}
      </div>
    </footer>
  );
};

export default Footer;
