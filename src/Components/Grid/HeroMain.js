// REACT
import React from "react";
// ARTICLES
import ArticleHero from "../Articles/ArticleHero";
import ArticleSingle from "../Articles/ArticleSingle";
import ArticleTertiary from "../Articles/ArticleTertiary";
// ANIMATIONS
import { motion } from "framer-motion";
import { pageAnimation } from "../../Animations/animation";

const HeroMain = (props) => {
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
              index === 0 ? (
                <ArticleHero
                  id={article.id}
                  key={article.id}
                  article={article}
                />
              ) : (
                ""
              )
            )}

            <div className="grid grid--3fr grid__item--span3">
              {newsData.map((article, index) =>
                index > 0 && index < 4 ? (
                  <ArticleTertiary
                    id={article.id}
                    key={article.id}
                    article={article}
                  />
                ) : (
                  ""
                )
              )}
            </div>
          </div>
          {/* RIGHT COLUMN */}
          <div className="article-wrapper--column">
            {newsData.map((article, index) =>
              index === 4 ? (
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

export default HeroMain;
