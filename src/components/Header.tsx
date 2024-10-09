import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Menu, X, Sun, Moon } from "lucide-react";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  const navItems = ["à-propos", "compétences", "projets", "contact"];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 z-50 transition-colors duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <motion.div className="flex items-center" whileHover={{ scale: 1.1 }}>
          <Code className="text-secondary-light dark:text-secondary-dark mr-2" />
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            Guillaume Porez
          </span>
        </motion.div>

        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }}>
              <button
                onClick={() => scrollToSection(item)}
                className="text-gray-900 dark:text-white hover:text-secondary-light dark:hover:text-secondary-dark transition-colors"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            </motion.li>
          ))}
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleDarkMode}
            className="cursor-pointer"
          >
            {darkMode ? (
              <Sun className="text-yellow-400" />
            ) : (
              <Moon className="text-gray-600" />
            )}
          </motion.li>
        </ul>

        <motion.button
          className="md:hidden text-gray-900 dark:text-white"
          onClick={toggleMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X /> : <Menu />}
        </motion.button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white dark:bg-gray-900"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col items-center py-4">
              {navItems.map((item) => (
                <motion.li
                  key={item}
                  className="my-2"
                  whileHover={{ scale: 1.1 }}
                >
                  <button
                    onClick={() => scrollToSection(item)}
                    className="text-gray-900 dark:text-white hover:text-secondary-light dark:hover:text-secondary-dark transition-colors"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                </motion.li>
              ))}
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleDarkMode}
                className="cursor-pointer mt-2"
              >
                {darkMode ? (
                  <Sun className=" text-gray-600" />
                ) : (
                  <Moon className=" text-gray-600" />
                )}
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
