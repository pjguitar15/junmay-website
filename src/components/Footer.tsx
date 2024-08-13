import { motion } from "framer-motion";
import ringLogo from "../assets/wedding-ring.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-pink-100 shadow-inner'>
      <div className='container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center'>
        {/* Logo and Copyright */}
        <motion.div
          className='text-pink-800 font-alex-brush md:col-span-1 text-center md:text-left'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className='flex gap-3 items-center justify-center md:justify-start'>
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
          className='flex flex-col md:flex-row md:space-x-8 text-pink-600 font-lato mt-6 md:mt-0 text-center md:text-left'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { name: "Home", link: "#" },
            { name: "Collection", link: "#" },
            { name: "About", link: "#" },
            { name: "Our Team", link: "#" },
            { name: "Essential Items", link: "#" },
          ].map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1, color: "#DB2777" }} // scale on hover with pink color
              transition={{ type: "spring", stiffness: 300 }}
              className='text-center'
            >
              <a
                href={item.link}
                className='hover:text-pink-800 transition duration-300 ease-in-out'
              >
                {item.name}
              </a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Footer Legal Links */}
        <motion.ul
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
        </motion.ul>
      </div>
    </footer>
  );
};

export default Footer;
