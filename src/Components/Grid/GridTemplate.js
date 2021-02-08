import React from "react";
// ANIMATIONS
import { pageAnimation } from "../../Animations/animation";
import { motion } from "framer-motion";

const GridTemplate = (props) => {
  return (
    <div className="wrapper">
      <motion.aside
        className="col-left"
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
      >
        {props.left && props.left}

        {props.weatherApp && props.weatherApp}
      </motion.aside>
      <main className="col-main">{props.right}</main>
    </div>
  );
};

export default GridTemplate;
