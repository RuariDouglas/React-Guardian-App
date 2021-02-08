// REACT
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { loadSection } from "../Redux/Actions/guardianSectionAction";
// COMPONENTS
import TitleAlt from "../Components/TitleAlt";
import Article from "../Components/ArticleDetail/ArticleDetail";
// GRID
import GridTemplate from "../Components/Grid/GridTemplate";
import List from "../Components/Grid/List";
import HeroMain from "../Components/Grid/HeroMain";
import SubMain from "../Components/Grid/SubMain";
import SubAlt from "../Components/Grid/SubAlt";

const Culture = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const rootPath = location.pathname.split("/")[1];
  const articlePath = location.pathname.split("/")[2];
  const menuToggle = useSelector((state) => state.menuToggle);
  const { sectionData, loading } = useSelector((state) => state.guardian);
  // Title Component
  const titleData = {
    mainTitle: "Culture",
    subTitle: {
      tagline: `"A nation's culture resides in the hearts and in the soul of its people."`,
      subTag: "Mahatma Gandhi",
      url: false,
    },
  };
  // Close Sidenav
  const closeMenu = (e) =>
    menuToggle ? dispatch({ type: "SIDE_NAV_TOGGLE" }) : "";
  // Get news data
  useEffect(() => {
    dispatch(loadSection("culture"));
  }, [dispatch]);
  return (
    <div className="culture" onClick={closeMenu}>
      {articlePath && <Article rootPath={rootPath} sectionData={sectionData} />}
      <GridTemplate
        left={<TitleAlt titleData={titleData} />}
        right={<List newsData={sectionData} loading={loading} />}
      />
      <GridTemplate
        left={false}
        right={<HeroMain newsData={sectionData} loading={loading} />}
      />
      <GridTemplate
        left={false}
        right={<SubMain newsData={sectionData} loading={loading} />}
      />
      <div className="bg--alt">
        <GridTemplate
          left={false}
          right={<SubAlt newsData={sectionData} loading={loading} />}
        />
      </div>
    </div>
  );
};

export default Culture;
