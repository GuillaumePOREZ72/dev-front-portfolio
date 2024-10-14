import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocalStorage } from "react-use";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

/**
 * The main App component of the website.
 *
 * This component stores the dark mode state in local storage and updates the
 * `dark` class on the root `html` element when the state changes. It also
 * toggles the dark mode state when the user clicks the dark mode toggle button
 * in the `Header` component.
 *
 * The App component renders the following components:
 *
 * 1. `Header`
 * 2. `Hero`
 * 3. `About`
 * 4. `Skills`
 * 5. `Projects`
 * 6. `Contact`
 *
 * The components are wrapped in a `motion.div` to animate their opacity when
 * the component is mounted.
 *
 * @returns {JSX.Element} The App component
 */

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [storedDarkMode, setStoredDarkMode] = useLocalStorage(
    "darkMode",
    false
  );

  useEffect(() => {
    if (storedDarkMode) {
      setDarkMode(storedDarkMode);
    }
  }, [storedDarkMode]);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    setStoredDarkMode(darkMode);
  }, [darkMode, setStoredDarkMode]);

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
