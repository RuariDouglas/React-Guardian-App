// REACT
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { loadSection } from "../Redux/Actions/guardianSectionAction";
// COMPONENTS
import Title from "../Components/Title";
import WeatherApp from "../Components/WeatherApp";
import Article from "../Components/ArticleDetail/ArticleDetail";
// Grid
import GridTemplate from "../Components/Grid/GridTemplate";
import SearchResults from "../Components/Grid/SearchResults";

// FUNC
import { dateFormatter } from "../Functions";

const Search = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const menuToggle = useSelector((state) => state.menuToggle);
  const { sectionData, loading } = useSelector((state) => state.guardian);
  const articlePath = location.pathname.split("/")[2];
  const rootPath = "/";
  // Title Component
  let date = dateFormatter();
  const titleData = {
    mainTitle: "Results",
    subTitle: date,
  };
  // Close Sidenav
  const closeMenu = (e) =>
    menuToggle ? dispatch({ type: "SIDE_NAV_TOGGLE" }) : "";

  return (
    <>
      {!loading && (
        <div className="search" onClick={closeMenu}>
          {articlePath && (
            <Article rootPath={rootPath} sectionData={sectionData} />
          )}
          <GridTemplate
            left={<Title titleData={titleData} />}
            weatherApp={<WeatherApp />}
            right={<SearchResults newsData={sectionData} loading={loading} />}
          />
        </div>
      )}
    </>
  );
};

export default Search;
