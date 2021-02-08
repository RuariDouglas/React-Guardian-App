// REACT
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { loadSection } from "../Redux/Actions/guardianSectionAction";
// COMPONENTS
import TitleAlt from "../Components/TitleAlt";
import Article from "../Components/ArticleDetail/ArticleDetail";
// Grid //
import GridTemplate from "../Components/Grid/GridTemplate";
import ListOpinions from "../Components/Grid/ListOpinions";
import HeroMain from "../Components/Grid/HeroMain";
import SubMain from "../Components/Grid/SubMain";
import SubAlt from "../Components/Grid/SubAlt";

const Lifestyle = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const rootPath = location.pathname.split("/")[1];
  const articlePath = location.pathname.split("/")[2];
  const menuToggle = useSelector((state) => state.menuToggle);
  const { sectionData, loading } = useSelector((state) => state.guardian);
  // Title Component Data
  const titleData = {
    mainTitle: "Lifestyle",
    subTitle: {
      tagline: `"Turns out there isn't much interesting to say about 'lifestyle'"`,
      subTag: "Me, Ruari",
      url: false,
    },
  };
  // Close Sidenav
  const closeMenu = (e) =>
    menuToggle ? dispatch({ type: "SIDE_NAV_TOGGLE" }) : "";
  // Get news data
  useEffect(() => {
    dispatch(loadSection("lifeandstyle"));
  }, [dispatch]);

  return (
    <div className="lifestyle" onClick={closeMenu}>
      {articlePath && <Article rootPath={rootPath} sectionData={sectionData} />}

      <GridTemplate
        left={<TitleAlt titleData={titleData} />}
        right={<SubAlt newsData={sectionData} loading={loading} />}
      />

      <GridTemplate
        left={false}
        right={<HeroMain newsData={sectionData} loading={loading} />}
      />
      <div className="bg--alt">
        <GridTemplate
          left={false}
          right={<SubMain newsData={sectionData} loading={loading} />}
        />
        <GridTemplate
          left={false}
          right={<ListOpinions newsData={sectionData} loading={loading} />}
        />
      </div>
    </div>
  );
};

export default Lifestyle;
