// REACT
import React from "react";

import ArticleSingle from "../Articles/ArticleSingle";
// ANIMATIONS
import { motion } from "framer-motion";
import { pageAnimation } from "../../Animations/animation";
const SearchResults = (props) => {
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
              if (index >= 0 && index <= 3) {
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
          <motion.div
            className="grid grid--4fr"
            exit="exit"
            variants={pageAnimation}
            initial="hidden"
            animate="show"
          >
            {newsData.map((article, index) => {
              if (index >= 4 && index <= 7) {
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
          <motion.div
            className="grid grid--4fr"
            exit="exit"
            variants={pageAnimation}
            initial="hidden"
            animate="show"
          >
            {newsData.map((article, index) => {
              if (index >= 8 && index <= 11) {
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
          <motion.div
            className="grid grid--4fr"
            exit="exit"
            variants={pageAnimation}
            initial="hidden"
            animate="show"
          >
            {newsData.map((article, index) => {
              if (index >= 12 && index <= 15) {
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

export default SearchResults;
