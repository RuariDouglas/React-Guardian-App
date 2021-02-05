// REACT
import React from "react";

import ArticlePrimary from "../Articles/ArticlePrimary";
import ArticleSingle from "../Articles/ArticleSingle";
// ANIMATIONS
import { motion } from "framer-motion";
import { pageAnimation } from "../../Animations/animation";
const SubMain = (props) => {
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
              index === 5 ? (
                <ArticlePrimary
                  id={article.id}
                  key={article.id}
                  article={article}
                />
              ) : (
                ""
              )
            )}

            <div className="article-wrapper--column">
              {newsData.map((article, index) => {
                if (index >= 6 && index <= 7) {
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
            </div>
          </div>
          {/* RIGHT COLUMN */}
          <div className="article-wrapper--column">
            {newsData.map((article, index) => {
              if (index >= 8 && index <= 9) {
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
          </div>
        </motion.div>
      )}
    </>
  );
};

export default SubMain;
