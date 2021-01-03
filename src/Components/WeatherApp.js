// REACT
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { loadWeather } from "../Redux/Actions/weatherAction";

// MATERIAL UI
import TypoGraphy from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import DownAngle from "@material-ui/icons/ExpandMore";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

// STYLES
import styled from "styled-components";
// import { motion } from "framer-motion";
// import { col, fontS } from "../Styles/Styles";

const WeatherApp = () => {
  const dispatch = useDispatch();
  const { weatherData, forecastData, loading } = useSelector(
    (state) => state.weather
  );
  const [location, setLocation] = useState();

  const checkValue = (e) => {
    setLocation(e.target.value);
  };
  const sendResult = (e) => {
    e.preventDefault();
    dispatch(loadWeather(location));
  };
  const weatherToggle = useSelector((state) => state.weatherToggle);

  return (
    <WeatherContainer>
      {!loading && (
        <>
          <CurrentWeather>
            <div className="currentWeatherContainer">
              <div className="iconContainer">
                <img
                  src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                  title={`${weatherData.weather[0].description} Icon`}
                  alt={`${weatherData.weather[0].description} Icon`}
                />
              </div>
              <div className="textContainer">
                <TypoGraphy variant="subtitle2">Now</TypoGraphy>
                <TypoGraphy variant="subtitle1">
                  {weatherData.main.temp.toString().substr(0, 1)}ºC
                </TypoGraphy>
              </div>
              <div className="weatherToggle">
                <DownAngle
                  className={`${weatherToggle ? "rotate" : ""}`}
                  onClick={() => dispatch({ type: "WEATHER_TOGGLE" })}
                />
              </div>
            </div>
          </CurrentWeather>

          <ForecastList weatherToggle={weatherToggle}>
            <div className="searchContainer">
              <form onSubmit={sendResult}>
                <TextField
                  id="input-with-icon-textfield"
                  color="secondary"
                  onChange={checkValue}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </form>
            </div>
            <div className="forecastContainer">
              <ul>
                {forecastData.map((entry) => {
                  return (
                    <li key={uuidv4()} className="forecastItem">
                      <TypoGraphy variant="subtitle2">
                        {entry.dt_txt.substr(-8, 5)}
                      </TypoGraphy>
                      <div className="iconContainer">
                        <img
                          src={`http://openweathermap.org/img/wn/${entry.weather[0].icon}@2x.png`}
                          title={`${entry.weather[0].description} Icon`}
                          alt={`${entry.weather[0].description} Icon`}
                        />
                      </div>
                      <div className="textContainer">
                        <TypoGraphy variant="subtitle1">
                          {entry.main.temp.toString().substr(0, 1)}ºC
                        </TypoGraphy>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </ForecastList>
        </>
      )}
    </WeatherContainer>
  );
};

const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  h6 {
    line-height: 1;
  }
  @media (min-width: 960px) {
    position: relative;
  }
`;

const CurrentWeather = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 1rem;
  padding-right: 1rem;
  .currentWeatherContainer {
    display: flex;
    align-items: center;
    flex-direction: row;

    .iconContainer {
      height: 40px;
      width: 65px;
      position: relative;
      margin-right: 0.2rem;
      img {
        position: absolute;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
        height: 75px;
        width: 75px;
      }
    }
  }
  @media (min-width: 960px) {
    justify-content: center;
    padding-top: 0;
    .currentWeatherContainer {
      .iconContainer {
        width: 70px;
        height: 70px;
        img {
          height: 90px;
          width: 90px;
        }
      }
      .weatherToggle {
        display: none;
      }
    }
  }
`;

const ForecastList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  display: ${(props) => (props.weatherToggle ? "flex" : "none")};
  background-color: #eee;
  box-shadow: 0 5px 0.4rem rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 5rem;
  right: 0;
  text-align: center;
  border-radius: 10px;
  .forecastContainer {
    margin-top: 10px;

    ul {
      display: flex;
      justify-content: space-evenly;
    }
    .iconContainer {
      height: 45px;
      width: 45px;
      position: relative;
      img {
        position: absolute;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
        height: 55px;
        width: 55px;
        filter: brightness(90%);
      }
    }
  }
  @media (min-width: 960px) {
    display: flex;
    box-shadow: none;
    background-color: transparent;
    padding-top: 0;
    .searchContainer > div {
      width: 100%;
    }
  }
  @media (max-width: 500px) {
    width: 100%;
    border-radius: none;
    .searchContainer > div {
      width: 80%;
    }
  }
`;

export default WeatherApp;
