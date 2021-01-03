// REACT
import React, { useEffect } from "react";

// REDUX
import { loadWeather } from "../Redux/Actions/weatherAction";
import { useDispatch } from "react-redux";

// COMPONENTS
import WeatherApp from "../Components/WeatherApp";
import Title from "../Components/Title";

// STYLES
import styled from "styled-components";
// import { titleAnim } from "../Animations/animation";

const Home = () => {
  // API CALLS
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadWeather("london"));
  }, [dispatch]);
  // // TITLE COMPONENT DATA
  // const date = new Date();
  const titleData = {
    mainTitle: "Headlines",
    subTitle: "Thursday",
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
              <article>
                <h2>Main Story</h2>
              </article>
              <article style={{ padding: "1rem", width: "100%" }}>
                <img
                  style={{ padding: "1rem", width: "100%" }}
                  src="https://i.guim.co.uk/img/media/45535da84dfb818ccdeccc394b511dd95e08a4da/0_262_3938_2362/master/3938.jpg?width=620&quality=85&auto=format&fit=max&s=75bd2d3b74b29f49e377c4e60c520ee4"
                  alt="alternative"
                />
              </article>
              <article>Sub Story</article>
              <article>Sub Story</article>
            </section>
          </main>
          <div className="rightCol">
            <article>Right Column</article>
            <article></article>
            <article></article>
          </div>
        </div>
      </div>
    </HeadingBg>
  );
};

const HeadingBg = styled.section`
  width: 100vw;
  .headingContainer {
    height: 100vh;
    margin: 0 auto;
    @media (min-width: 500px) {
      width: 80vw;
    }
  }
`;

export default Home;
