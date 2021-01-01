// REACT
import React, { useEffect } from "react";

// REDUX
import { loadWeather } from "../Redux/Actions/weatherAction";
import { useDispatch, useSelector } from "react-redux";

// STYLES
import styled from "styled-components";

// COMPONENTS
import WeatherApp from "../Components/WeatherApp";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadWeather());
  }, [dispatch]);

  return (
    <HeadingContainer>
      <CustomGrid>
        <div className="leftCol">
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
      </CustomGrid>
    </HeadingContainer>
  );
};

const HeadingContainer = styled.section`
  width: 80vw;
  height: 100vh;
  background-color: pink;
  margin: 1rem auto;
`;
const CustomGrid = styled.div`
  height: 100%;
  .leftCol {
    grid-area: leftCol;
    background-color: brown;
  }
  .mainSection {
    grid-area: main;
    background-color: aqua;
  }
  .rightCol {
    grid-area: rightCol;
    background-color: purple;
  }
  display: grid;
  grid-template-columns: minmax(5rem, 20%) minmax(20rem, 55%) minmax(11rem, 25%);
  grid-template-rows: 100%;
  grid-template-areas: "leftCol main rightCol";
  @media (max-width: 960px) {
    grid-template-rows: 10% auto;
    grid-template-areas:
      "leftCol leftCol leftCol"
      "main main rightCol"
      "main main rightCol";
  }
  @media (max-width: 755px) {
    display: flex;
    flex-direction: column;
  }
`;

export default Home;
