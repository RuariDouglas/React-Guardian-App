// REACT
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// REDUX
import { loadSection } from "../Redux/Actions/guardianSectionAction";
import { useDispatch, useSelector } from "react-redux";

// COMPONENTS
import WeatherApp from "../Components/WeatherApp";
import Title from "../Components/Title";
import Article from "../Components/Article";
// Grid //
import HeroMain from "../Components/Grid/HeroMain";
import SubMain from "../Components/Grid/SubMain";
import SubAlt from "../Components/Grid/SubAlt";
import MostViewed from "../Components/Grid/MostViewed";

// STYLES
import styled from "styled-components";

const Sport = () => {
  // API CALLS
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadSection("sport"));
  }, [dispatch]);
  const { sectionData, loading } = useSelector((state) => state.guardian);

  // TITLE COMPONENT DATA
  const titleData = {
    mainTitle: "Sport",
    subTitle: false,
  };
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className="sport">
      <div className="wrapper">
        <aside className="col-left">
          <Title titleData={titleData} />
        </aside>
        <main className="col-main">
          <HeroMain newsData={sectionData} loading={loading} />
          <SubMain newsData={sectionData} loading={loading} />
        </main>
      </div>
      <div className="bg--alt">
        <div className="wrapper">
          <aside className="col-left">
            <h2 className="left-col__title article__heading--primary">
              Coronavirus
            </h2>
          </aside>
          <main className="col-main">
            <SubAlt newsData={sectionData} loading={loading} />
          </main>
        </div>
      </div>
      <div className="wrapper">
        <aside className="col-left">
          <h2 className="left-col__title article__heading--primary">
            Most Viewed
          </h2>
        </aside>
        <main className="col-main">
          <MostViewed newsData={sectionData} loading={loading} />
        </main>
      </div>
    </div>
  );
};

const HeadingBg = styled.section`
  width: 100%;
`;

export default Sport;
