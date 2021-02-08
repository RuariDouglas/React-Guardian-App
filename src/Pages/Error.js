import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../Animations/animation";

const ErrorPage = () => {
  return (
    <motion.div
      className="account__wrapper"
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <h2 className="detail__heading--primary">
        Sorry, this page doesn't exist
      </h2>
    </motion.div>
  );
};
export default ErrorPage;
