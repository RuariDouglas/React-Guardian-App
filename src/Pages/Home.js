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
import MostViewed from "../Components/Grid/MostViewed";
import HeroMain from "../Components/Grid/HeroMain";
import SubMain from "../Components/Grid/SubMain";
import SubAlt from "../Components/Grid/SubAlt";
// FUNC
import { dateFormatter } from "../Functions";

const Home = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const menuToggle = useSelector((state) => state.menuToggle);
  const { sectionData, loading } = useSelector((state) => state.guardian);
  const articlePath = location.pathname.split("/")[2];
  const rootPath = "/";
  // Title Component
  let date = dateFormatter();
  const titleData = {
    mainTitle: "Headlines",
    subTitle: date,
  };
  // Close Sidenav
  const closeMenu = (e) =>
    menuToggle ? dispatch({ type: "SIDE_NAV_TOGGLE" }) : "";
  // Get news Data
  useEffect(() => {
    dispatch(loadSection(false));
  }, [dispatch]);

  return (
    <div className="news" onClick={closeMenu}>
      {articlePath && <Article rootPath={rootPath} sectionData={sectionData} />}
      <GridTemplate
        left={<Title titleData={titleData} />}
        weatherApp={<WeatherApp />}
        right={<HeroMain newsData={sectionData} loading={loading} />}
      />
      <GridTemplate
        right={<SubMain newsData={sectionData} loading={loading} />}
      />
      <div className="bg--alt">
        <GridTemplate
          left={false}
          right={<SubAlt newsData={sectionData} loading={loading} />}
        />
      </div>
      <GridTemplate
        left={<h2 className="left-col__title">Most Viewed</h2>}
        right={<MostViewed newsData={sectionData} loading={loading} />}
      />
    </div>
  );
};

export default Home;
