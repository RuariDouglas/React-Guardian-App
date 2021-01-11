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
import SubMain from "../Components/Grid/SubMain";
import SubAlt from "../Components/Grid/SubAlt";

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
        <div className="wrapper">
          <aside className="leftCol">
            <Title titleData={titleData} />
            <WeatherApp />
          </aside>
          <main className="mainCol">
            <HeroMain newsData={sectionData} loading={loading} />
            <SubMain newsData={sectionData} loading={loading} />
          </main>
        </div>
      </HeadingBg>
      <div className="altBg">
        <div className="wrapper">
          <aside className="leftCol">
            <h2>CoronaVirus</h2>
          </aside>
          <main className="mainCol">
            <SubAlt newsData={sectionData} loading={loading} />
          </main>
        </div>
      </div>
      <div className="wrapper">
        <aside className="leftCol">
          <h2>CoronaVirus</h2>
        </aside>
        <main className="mainCol">
          <HeroMain newsData={sectionData} loading={loading} />
        </main>
      </div>
    </>
  );
};

const HeadingBg = styled.section`
  width: 100%;
`;

export default Home;
