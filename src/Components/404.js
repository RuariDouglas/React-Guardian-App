import React from "react";
// ANIMATIONS
import { motion } from "framer-motion";
import { pageAnimation } from "../Animations/animation";

const ErrorDefault = (props) => {
  return (
    <>
      <motion.h2
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
      >
        This page doesn't exist, go back to home?
      </motion.h2>
    </>
  );
};

export default ErrorDefault;
