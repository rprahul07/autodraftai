import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const phrases = [
  "Generate Letters Effortlessly.",
  "Speed Up Your Paperwork.",
  "Professional Drafts in Seconds.",
  "Made for Students. Loved by Teachers."
];

const Home = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const fullText = phrases[currentPhrase];
      setDisplayedText(fullText.slice(0, index));
      setIndex((prev) => {
        if (prev >= fullText.length) {
          clearInterval(interval);
          setTimeout(() => {
            setIndex(0);
            setCurrentPhrase((prevPhrase) => (prevPhrase + 1) % phrases.length);
          }, 1500);
        }
        return prev + 1;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [index, currentPhrase]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-indigo-950 text-white flex flex-col justify-center items-center px-6 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold text-center mb-6"
      >
        autodraft.ai
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-xl md:text-2xl font-mono text-indigo-300 text-center h-16"
      >
        {displayedText}
        <span className="animate-pulse">|</span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="flex gap-6 mt-10"
      >
        <Link
          to="/login"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-2xl text-lg shadow-lg hover:shadow-2xl transition"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="bg-white text-indigo-600 hover:text-white hover:bg-indigo-700 font-bold py-3 px-6 rounded-2xl text-lg shadow-lg hover:shadow-2xl transition"
        >
          Sign Up
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-sm text-gray-400"
      >
        Empowering student communication with speed & precision.
      </motion.div>
    </div>
  );
};

export default Home;
