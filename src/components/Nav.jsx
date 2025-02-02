import React from "react";
import { motion } from "framer-motion";

function Nav() {
  const navLinks = ["Home", "About", "Services", "Portfolio", "Blog", "Contact"];

  return (
    <nav className="flex justify-center gap-8 py-4 bg-gray-900 text-white">
      {navLinks.map((link, index) => (
        <motion.a
          key={index}
          href="#"
          className="text-lg font-semibold hover:text-red-500 transition"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeIn", delay: index * 0.3 }}
          whileHover={{ scale: 1.2, color: "#ff4757" }}
        >
          {link}
        </motion.a>
      ))}
    </nav>
  );
}

export default Nav;
