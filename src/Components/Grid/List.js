// REACT
import React from "react";

import ArticleSingle from "../Articles/ArticleSingle";
// ANIMATIONS
import { motion } from "framer-motion";
import { pageAnimation } from "../../Animations/animation";

const List = (props) => {
  const { newsData, loading } = props;
  return (
    <>
      {!loading && (
        <>
          <motion.div
            className="grid grid--4fr"
            exit="exit"
            variants={pageAnimation}
            initial="hidden"
            animate="show"
          >
            {newsData.map((article, index) => {
              if (index >= 13 && index <= 16) {
                return (
                  <ArticleSingle
                    id={article.id}
                    key={article.id}
                    img={true}
                    article={article}
                  />
                );
              }
            })}
          </motion.div>
          <motion.div className="grid grid--4fr">
            {newsData.map((article, index) => {
              if (index >= 17 && index <= 20) {
                return (
                  <ArticleSingle
                    id={article.id}
                    key={article.id}
                    img={true}
                    article={article}
                  />
                );
              }
            })}
          </motion.div>
        </>
      )}
    </>
  );
};

export default List;
