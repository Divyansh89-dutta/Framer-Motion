import React from "react";
import { motion } from "motion/react";

function App() {
  return (
    <div className="p-3">
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: 360, x: 200 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        whileHover={{ scale: 1.2, rotate: 10 }}
        className="box w-25 h-23 bg-red-500 rounded-xl border"
      ></motion.div>
    </div>
  );
}

export default App;
