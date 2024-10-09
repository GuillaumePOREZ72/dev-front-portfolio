import { motion } from "framer-motion";

const skills = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Git",
  "Responsive Design",
  "Performance Optimization",
  "UI/UX Design",
  "RESTful APIs",
];

const Skills = () => {
  return (
    <section
      id="compétences"
      className="section bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <h2 className="text-4xl font-bold mb-10 text-gray-900 dark:text-white">
        Compétences
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white p-4 rounded-lg text-center cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
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
          >
            <motion.span
              initial={{ y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              {skill}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
