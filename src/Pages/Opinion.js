// REACT
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// REDUX
import { loadSection } from "../Redux/Actions/guardianSectionAction";
import { useDispatch, useSelector } from "react-redux";

// COMPONENTS
import Title from "../Components/Title";
import Article from "../Components/Article";

// Grid //
import GridTemplate from "../Components/Grid/GridTemplate";
import HeroMain from "../Components/Grid/HeroMain";
import SubMain from "../Components/Grid/SubMain";
import SubAlt from "../Components/Grid/SubAlt";
import MostViewed from "../Components/Grid/MostViewed";

// STYLES
import styled from "styled-components";

const Opinion = () => {
  // API CALLS
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadSection("commentisfree"));
  }, [dispatch]);
  const { sectionData, loading } = useSelector((state) => state.guardian);

  // TITLE COMPONENT DATA
  const titleData = {
    mainTitle: "Opinions",
    subTitle: false,
  };
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  return (
    <div className="opinion">
      {pathId && <Article />}
      <div className="bg--alt">
        <GridTemplate
          left={<Title titleData={titleData} />}
          right={<SubMain newsData={sectionData} loading={loading} />}
        />
        <GridTemplate
          left={false}
          right={<HeroMain newsData={sectionData} loading={loading} />}
        />
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

const HeadingBg = styled.section`
  width: 100%;
`;

export default Opinion;
