// REACT
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// REDUX
import { loadSection } from "../Redux/Actions/guardianSectionAction";
import { useDispatch, useSelector } from "react-redux";

// COMPONENTS
// import WeatherApp from "../Components/WeatherApp";
import Title from "../Components/Title";
import Article from "../Components/Article";
// Grid //
import GridTemplate from "../Components/Grid/GridTemplate";
import HeroMain from "../Components/Grid/HeroMain";
import SubMain from "../Components/Grid/SubMain";
import SubAlt from "../Components/Grid/SubAlt";
import MostViewed from "../Components/Grid/MostViewed";

import { dateFormatter } from "../Functions";

const Home = () => {
  // API CALLS
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadSection(false));
  }, [dispatch]);

  const { sectionData, loading } = useSelector((state) => state.guardian);

  // TITLE COMPONENT DATA
  let date = dateFormatter();
  const titleData = {
    mainTitle: "Headlines",
    subTitle: date,
  };
  const location = useLocation();
  const rootPath = "/";
  const articlePath = location.pathname.split("/")[2];

  return (
    <div className="news">
      {articlePath && <Article rootPath={rootPath} sectionData={sectionData} />}
      <GridTemplate
        left={<Title titleData={titleData} />}
        // weatherApp={<WeatherApp />}
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
