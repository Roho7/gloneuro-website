import { motion } from "framer-motion";
import React from "react";
import { Book, PenTool, Shield, Users } from "react-feather";

function StatsSection() {
  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-4 mx-4 rounded-xl overflow-clip shadow-xl text-base-500"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: "spring" }}
    >
      <div className="stats-box bg-salmon-100">
        <Users className="stats-icon" />
        <h1 className="stats-header">7000+</h1> Members
      </div>
      <div className="stats-box bg-salmon-200">
        <Book className="stats-icon" />
        <h1 className="stats-header">30+</h1> Blogs
      </div>
      <div className="stats-box bg-salmon-300">
        <Shield className="stats-icon" />
        <h1 className="stats-header">12+ years</h1> of Commitment
      </div>
      <div className="stats-box bg-salmon-500">
        <PenTool className="stats-icon" />
        <h1 className="stats-header">20+</h1>
        Published Authors
      </div>
    </motion.div>
  );
}

export default StatsSection;
