// REACT
import React, { useEffect } from "react";

// REDUX
import { loadSection } from "../Redux/Actions/guardianSectionAction";
import { useDispatch, useSelector } from "react-redux";

// COMPONENTS
import WeatherApp from "../Components/WeatherApp";
import Title from "../Components/Title";
// Grid //
import HeroMain from "../Components/Grid/HeroMain";
import HeroRightCol from "../Components/Grid/HeroRightCol";
import SubMain from "../Components/Grid/SubMain";

import { dateFormatter } from "../Functions";

// STYLES
import styled from "styled-components";
import { col } from "../Styles/Styles";
// import { titleAnim } from "../Animations/animation";

const Home = () => {
  // API CALLS
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadSection("business"));
  }, [dispatch]);

  const { sectionData, loading } = useSelector((state) => state.guardian);

  // TITLE COMPONENT DATA
  let date = dateFormatter();
  const titleData = {
    mainTitle: "Headlines",
    subTitle: date,
  };

  return (
    <>
      <HeadingBg>
        <div className="headingContainer">
          <div className="grid">
            <div className="leftCol">
              <Title titleData={titleData} />
              <WeatherApp />
            </div>
            <main className="mainCol">
              <HeroMain newsData={sectionData} loading={loading} />
              <SubMain newsData={sectionData} loading={loading} />
            </main>
            <div className="rightCol">
              <HeroRightCol newsData={sectionData} loading={loading} />
            </div>
          </div>
        </div>
      </HeadingBg>
    </>
  );
};

const HeadingBg = styled.section`
  width: 100%;
  .headingContainer {
    height: auto;
    width: 90vw;
    margin: 0 auto;
  }

  h2 {
    span {
      color: ${col.title};
    }
  }
`;

export default Home;
