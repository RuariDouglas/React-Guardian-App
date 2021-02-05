import React from "react";
// ANIMATIONS
import { pageAnimation } from "../../Animations/animation";
import { motion } from "framer-motion";

const GridTemplate = (props) => {
  return (
    <div className="wrapper">
      <aside className="col-left">
        {props.left && props.left}

        {props.weatherApp && props.weatherApp}
      </aside>
      <main className="col-main">{props.right}</main>
    </div>
  );
};

export default GridTemplate;
