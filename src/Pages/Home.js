// REACT
import React, { useEffect } from "react";

// REDUX
import { loadWeather } from "../Redux/Actions/weatherAction";
import { useDispatch, useSelector } from "react-redux";

// COMPONENTS
import WeatherApp from "../Components/WeatherApp";
import Title from "../Components/Title";

// MATERIALUI
import Typography from "@material-ui/core/Typography";

// STYLES
import styled from "styled-components";

const Home = () => {
  // API CALLS
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadWeather());
  }, [dispatch]);
  // TITLE COMPONENT DATA
  const date = new Date();
  console.log(date);
  const titleData = {
    mainTitle: "Headlines",
    subTitle: "Thursday",
  };

  return (
    <HeadingContainer>
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
            <article>Sub Story</article>
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
    </HeadingContainer>
  );
};

const HeadingContainer = styled.section`
  width: 80vw;
  height: 100vh;
  margin: 1rem auto;
`;

export default Home;
