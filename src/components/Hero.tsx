import { motion } from "framer-motion";

/**
 * Component that renders the hero section of the website.
 *
 * The hero section contains a title, a description and a call-to-action to
 * scroll to the projects section. The title and description are animated with
 * framer motion.
 *
 * @returns {JSX.Element} The hero section of the website
 */
const Hero = (): JSX.Element => {
  /**
   * Scrolls to the projects section of the website with a smooth animation.
   */
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projets");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="accueil"
      className="section bg-transparent transition-colors duration-300"
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-6xl font-bold mb-4 text-gray-900 dark:text-white"
          animate={{ color: ["#1F2937", "#00FFFF", "#87CEFA", "#1F2937"] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          Développeur Web Front-End
        </motion.h1>
        <motion.p
          className="text-xl mb-8 text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Créatif, passionné et toujours à la pointe de la technologie
        </motion.p>
        <motion.button
          className="bg-secondary-light dark:bg-secondary-dark text-white dark:text-gray-900 px-6 py-3 rounded-full font-semibold transition-colors duration-300 hover:bg-tertiary-light dark:hover:bg-tertiary-dark"
          whileHover={{
            scale: 1.05,
            rotate: [0, 2, -2, 0],
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
            transition: {
              duration: 0.3,
              rotate: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 0.5,
              },
            },
          }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToProjects}
        >
          Découvrir mes projets
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
