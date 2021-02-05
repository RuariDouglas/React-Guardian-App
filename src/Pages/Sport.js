// REACT
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { loadSection } from "../Redux/Actions/guardianSectionAction";
// COMPONENTS
import Title from "../Components/Title";
import Article from "../Components/ArticleDetail/ArticleDetail";
// GRID
import GridTemplate from "../Components/Grid/GridTemplate";
import MostViewed from "../Components/Grid/MostViewed";
import HeroMain from "../Components/Grid/HeroMain";
import SubMain from "../Components/Grid/SubMain";
import SubAlt from "../Components/Grid/SubAlt";
import List from "../Components/Grid/List";

const Sport = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const rootPath = location.pathname.split("/")[1];
  const articlePath = location.pathname.split("/")[2];
  const menuToggle = useSelector((state) => state.menuToggle);
  const { sectionData, loading } = useSelector((state) => state.guardian);
  // Title Component
  const titleData = {
    mainTitle: "Sport",
    subTitle: false,
  };
  // Close Sidenav
  const closeMenu = (e) =>
    menuToggle ? dispatch({ type: "SIDE_NAV_TOGGLE" }) : "";
  // Get news data
  useEffect(() => {
    dispatch(loadSection("sport"));
  }, [dispatch]);

  return (
    <div className="sport" onClick={closeMenu}>
      {articlePath && <Article rootPath={rootPath} sectionData={sectionData} />}
      <div className="bg--alt">
        <GridTemplate
          left={<Title titleData={titleData} />}
          right={<SubAlt newsData={sectionData} loading={loading} />}
        />
      </div>
      <GridTemplate
        left={false}
        right={<HeroMain newsData={sectionData} loading={loading} />}
      />
      <GridTemplate
        left={false}
        right={<SubMain newsData={sectionData} loading={loading} />}
      />
      <GridTemplate
        left={false}
        right={<List newsData={sectionData} loading={loading} />}
      />
    </div>
  );
};

export default Sport;
