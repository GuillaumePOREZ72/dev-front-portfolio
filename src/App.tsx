import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

/**
 * The root component of the website.
 *
 * Manages the dark mode state and adds or removes the "dark" class from
 * `document.documentElement` based on the state. The component also wraps the
 * entire app in a container element with a gradient background and a transition
 * effect on the background color.
 *
 * The `Header` component is rendered with the `darkMode` and `toggleDarkMode`
 * props, and the `Hero`, `About`, `Skills`, `Projects`, and `Contact` components
 * are rendered as children of the container element.
 */
function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  /**
   * Toggles the dark mode state.
   *
   * This function is passed to the `Header` component as a prop and is called
   * when the user clicks the dark mode toggle button. It simply toggles the
   * `darkMode` state by calling `setDarkMode` with the opposite value of `darkMode`.
   */
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-gradient-light dark:bg-gradient-dark bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </motion.div>
    </div>
  );
}

export default App;
