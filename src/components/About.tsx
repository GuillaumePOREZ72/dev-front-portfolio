import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="à-propos"
      className="section bg-white/30 dark:bg-gray-800/30 text-gray-900 dark:text-white transition-colors duration-300"
    >
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-6">À propos de moi</h2>
        <motion.p
          className="text-xl leading-relaxed mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Passionné par le développement web front-end, je crée des expériences
          utilisateur uniques et engageantes. Mon expertise en React, Tailwind
          CSS et les animations me permet de donner vie à des designs créatifs
          et performants.
        </motion.p>
        <motion.p
          className="text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Toujours à l'affût des dernières tendances et technologies, j'aime
          relever de nouveaux défis et apprendre continuellement pour offrir les
          meilleures solutions à mes clients.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
