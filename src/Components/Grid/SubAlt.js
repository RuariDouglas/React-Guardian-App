// REACT
import React from "react";

import ArticleSingle from "../Articles/ArticleSingle";
import ArticlePrimaryAlt from "../Articles/ArticlePrimaryAlt";
// ANIMATIONS
import { motion } from "framer-motion";
import { pageAnimation } from "../../Animations/animation";
const SubAlt = (props) => {
  const { newsData, loading } = props;
  return (
    <>
      {!loading && (
        <motion.div
          className="grid grid--3fr-1fr"
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
          <div className="grid grid--3fr">
            {newsData.map((article, index) =>
              index === 10 ? (
                <ArticlePrimaryAlt
                  id={article.id}
                  key={article.id}
                  article={article}
                />
              ) : (
                ""
              )
            )}
          </div>

          <div className="article-wrapper--column">
            {newsData.map((article, index) =>
              index >= 11 && index <= 12 ? (
                <ArticleSingle
                  id={article.id}
                  key={article.id}
                  img={true}
                  article={article}
                />
              ) : (
                ""
              )
            )}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default SubAlt;
