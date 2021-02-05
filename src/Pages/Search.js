// REACT
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
// REDUX
import { useDispatch, useSelector } from "react-redux";

import { loadSearch } from "../Redux/Actions/guardianSectionAction";
// COMPONENTS
import Title from "../Components/Title";
import WeatherApp from "../Components/WeatherApp";
import ArticleDetail from "../Components/ArticleDetail/ArticleDetail";
// Grid
import GridTemplate from "../Components/Grid/GridTemplate";
import SearchResults from "../Components/Grid/SearchResults";

// FUNC
import { dateFormatter } from "../Functions";
// ANIMATIONS
import { motion } from "framer-motion";
import { pageAnimation } from "../Animations/animation";

const Search = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const menuToggle = useSelector((state) => state.menuToggle);
  const { sectionData, loading } = useSelector((state) => state.guardian);
  const searchTerm = location.search.split("=")[1];
  const articlePath = location.pathname.split("/")[2];
  // const rootPath = "/";
  const rootPath = `search`;
  // Title Component
  let date = dateFormatter();
  // Close Sidenav
  const closeMenu = (e) =>
    menuToggle ? dispatch({ type: "SIDE_NAV_TOGGLE" }) : "";

  useEffect(() => {
    if (articlePath !== "article") {
      dispatch(loadSearch(searchTerm));
    } else return;
  }, [dispatch]);

  const titleData = {
    mainTitle: searchTerm === "undefined" ? "" : searchTerm,
    subTitle: date,
  };
  return (
    <>
      {!loading && (
        <motion.div
          className="search"
          onClick={closeMenu}
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
          {articlePath && (
            <ArticleDetail rootPath={rootPath} sectionData={sectionData} />
          )}
          <GridTemplate
            left={<Title titleData={titleData} />}
            weatherApp={<WeatherApp />}
            right={<SearchResults newsData={sectionData} loading={loading} />}
          />
        </motion.div>
      )}
    </>
  );
};

export default Search;
