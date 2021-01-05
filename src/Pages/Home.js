// REACT
import React, { useEffect } from "react";

// REDUX
import { loadSection } from "../Redux/Actions/guardianSectionAction";
import { useDispatch, useSelector } from "react-redux";

// COMPONENTS
import WeatherApp from "../Components/WeatherApp";
import Title from "../Components/Title";
import { dateFormatter } from "../Functions";

// STYLES
import styled from "styled-components";
import { col, fontS } from "../Styles/Styles";
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
    <HeadingBg>
      <div className="headingContainer">
        <div className="mainGrid">
          <div className="leftCol">
            <Title titleData={titleData} />
            <WeatherApp />
          </div>
          <main className="mainSection">
            <section>
              {!loading && (
                <>
                  <article className="mainArticle">
                    <img
                      style={{ width: "100%" }}
                      src={sectionData[0].fields.thumbnail}
                      alt=""
                    />
                    <h2>
                      <span>{`${sectionData[0].sectionName} / `}</span>
                      {sectionData[0].fields.headline}
                    </h2>
                    <p className="trailText">
                      {sectionData[0].fields.headline}
                    </p>
                  </article>
                  <article className="secondaryArticle">
                    <h2>
                      <span>{`${sectionData[1].sectionName} / `}</span>
                      {sectionData[1].fields.headline}
                    </h2>
                  </article>
                  <article className="secondaryArticle">
                    <h2>
                      <span>{`${sectionData[2].sectionName} / `}</span>
                      {sectionData[2].fields.headline}
                    </h2>
                  </article>
                </>
              )}
            </section>
          </main>
          <div className="rightCol">
            {!loading && (
              <>
                <article className="mainArticleRight">
                  <img
                    style={{ width: "100%" }}
                    src={sectionData[3].fields.thumbnail}
                    alt=""
                  />
                  <h2>
                    <span>{`${sectionData[3].sectionName} / `}</span>
                    {sectionData[3].fields.headline}
                  </h2>
                </article>
                <article className="secondaryArticleRight">
                  <h2>
                    <span>{`${sectionData[4].sectionName} / `}</span>
                    {sectionData[4].fields.headline}
                  </h2>
                </article>
              </>
            )}
          </div>
        </div>
      </div>
    </HeadingBg>
  );
};

const HeadingBg = styled.section`
  width: 100vw;
  article {
    img {
      margin-bottom: 0.5rem;
    }
  }
  .mainArticle,
  .mainArticleRight {
    border-top: 1px solid ${col.title};
  }
  .secondaryArticle,
  .secondaryArticleRight {
    margin-top: 0.5rem;
    padding-top: 0.5rem;
    border-top: 1px solid ${col.greyLight};
  }
  h2 {
    span {
      color: ${col.title};
    }
  }
  .headingContainer {
    height: 100vh;
    margin: 0 auto;
    @media (min-width: 500px) {
      width: 90vw;
    }
  }
  // MAIN COLUMN
  .mainSection {
    padding: 1rem;
    width: 100%;
    .mainArticle {
      h2 {
        font-size: ${fontS.large};
      }
    }
  }
  // RIGHT COLUMN
  @media (max-width: 755px) {
    .trailText {
      display: none;
    }
  }
`;

export default Home;
