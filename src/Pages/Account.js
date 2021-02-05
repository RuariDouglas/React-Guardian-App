import React from "react";
import { useLocation } from "react-router-dom";
// COMPONENTS
import SignUpModal from "../Components/Account/SignUpModal";
import LoginModal from "../Components/Account/LoginModal";
// ANIMATION
import { motion } from "framer-motion";
import { pageAnimation } from "../Animations/animation";

export function Account() {
  const location = useLocation();
  const rootPath = location.pathname.split("/")[1];
  return (
    <motion.div
      className="account__wrapper"
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      {rootPath === "signup" ? <SignUpModal /> : <LoginModal />}
    </motion.div>
  );
}
export default Account;
