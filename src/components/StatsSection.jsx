import { motion } from "framer-motion";
import React from "react";
import { Book, PenTool, Shield, Users } from "react-feather";

function StatsSection() {
  return (
    <motion.div
      className="grid grid-cols-4 gap-2 mx-2"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: "spring" }}
    >
      <div className="stats-box bg-grass-100">
        <Users className="stats-icon" />
        <h1>150</h1> Members
      </div>
      <div className="stats-box bg-base-800 text-base-50">
        <Book className="stats-icon" />
        <h1>1000+</h1> Blogs
      </div>
      <div className="stats-box bg-salmon-100">
        <Shield className="stats-icon" />
        <h1>10 years</h1> of Commitment
      </div>
      <div className="stats-box bg-base-50">
        <PenTool className="stats-icon" />
        <h1>20</h1>
        Published Authors
      </div>
    </motion.div>
  );
}

export default StatsSection;
