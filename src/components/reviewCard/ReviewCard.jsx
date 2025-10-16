import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./ReviewCard.css";
import logo from "../../assets/logo.webp"

export default function ReviewCard({ text, name, title, color }) {
  const ref = useRef(null);

  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

 
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <motion.div
      ref={ref}
      className="review-card"
      style={{  y, backgroundColor:color }}
      transition={{ duration: 0.5 }}
    >
      <div className="icon"><img src={logo} alt="logo"/></div>
      <p className="review-text">{text}</p>
      <div className="review-author">
        <h3>{name}</h3>
        <span>{title}</span>
      </div>
    </motion.div>
  );
}
