import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Section = ({ title, text }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // When 20% of the element is visible
  });

  return (
    <motion.div
      ref={ref}
      className="p-10 bg-gray-800 text-white rounded-xl shadow-lg my-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="text-lg mt-2">{text}</p>
    </motion.div>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
      {/* Header Section */}
      <motion.h1
        className="text-5xl font-bold mt-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        Welcome to My Page
      </motion.h1>

      {/* Scrollable Content */}
      <div className="w-2/3">
        <Section title="About Us" text="We create amazing web experiences." />
        <Section title="Our Services" text="We offer design, development, and animations." />
        <Section title="Contact" text="Reach out to us for your next project." />
      </div>
    </div>
  );
}

export default App;
