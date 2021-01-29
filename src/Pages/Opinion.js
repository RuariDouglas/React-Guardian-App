// REACT
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { loadSection } from "../Redux/Actions/guardianSectionAction";
// COMPONENTS
import TitleAlt from "../Components/TitleAlt";
import Article from "../Components/ArticleDetail/ArticleDetail";
// Grid
import GridTemplate from "../Components/Grid/GridTemplate";
import MostViewed from "../Components/Grid/MostViewed";
import HeroMain from "../Components/Grid/HeroMain";
import SubMain from "../Components/Grid/SubMain";
import SubAlt from "../Components/Grid/SubAlt";

const Opinion = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const rootPath = location.pathname.split("/")[1];
  const articlePath = location.pathname.split("/")[2];
  const menuToggle = useSelector((state) => state.menuToggle);
  const { sectionData, loading } = useSelector((state) => state.guardian);
  // Title Component
  const titleData = {
    mainTitle: "Opinions",
    subTitle: {
      tagline: '"Comment is free…but facts are sacred"',
      subTag: "CP Scott, 1921 Guardian editor",
      url:
        "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/1/22/1421924658711/CPScottcutout.png?width=140&quality=85&auto=format&fit=max&s=becee668be74bf01d9b0e93b4f0bc144",
    },
  };
  // Close Sidenav
  const closeMenu = (e) =>
    menuToggle ? dispatch({ type: "SIDE_NAV_TOGGLE" }) : "";
  // Get news data
  useEffect(() => {
    dispatch(loadSection("commentisfree"));
  }, [dispatch]);

  return (
    <div className="opinion" onClick={closeMenu}>
      {articlePath && <Article rootPath={rootPath} sectionData={sectionData} />}
      <div className="bg--alt">
        <GridTemplate
          left={<TitleAlt titleData={titleData} />}
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

export default Opinion;
