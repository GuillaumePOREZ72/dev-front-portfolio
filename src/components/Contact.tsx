import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("http://localhost:3001/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage("Message envoyé avec succès !");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitMessage(
          "Erreur lors de l'envoi du message. Veuillez réessayer."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitMessage(
        "Erreur lors de l'envoi du message. Veuillez réessayer."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="section bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Contactez-moi
        </h2>
        <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
          N'hésitez pas à me contacter pour discuter de vos projets ou
          opportunités de collaboration.
        </p>

        <motion.form
          onSubmit={handleSubmit}
          className="mb-8 text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 dark:text-gray-300 mb-2"
            >
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-light dark:focus:ring-secondary-dark"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 dark:text-gray-300 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-light dark:focus:ring-secondary-dark"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 dark:text-gray-300 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 py-2 text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-light dark:focus:ring-secondary-dark"
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="w-full bg-secondary-light dark:bg-secondary-dark text-white dark:text-gray-900 font-bold py-2 px-4 rounded-md hover:bg-tertiary-light dark:hover:bg-tertiary-dark transition-colors duration-300 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Envoi en cours..." : "Envoyer"}{" "}
            <Send className="ml-2" size={18} />
          </motion.button>
        </motion.form>

        {submitMessage && (
          <motion.p
            className={`text-center mb-4 ${
              submitMessage.includes("succès")
                ? "text-green-500"
                : "text-red-500"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {submitMessage}
          </motion.p>
        )}

        <div className="flex justify-center space-x-6">
          <motion.a
            href="mailto:votre-email@example.com"
            className="text-gray-700 dark:text-gray-300 hover:text-secondary-light dark:hover:text-secondary-dark transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <Mail size={32} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/votre-profil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-secondary-light dark:hover:text-secondary-dark transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <Linkedin size={32} />
          </motion.a>
          <motion.a
            href="https://github.com/votre-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-secondary-light dark:hover:text-secondary-dark transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <Github size={32} />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
