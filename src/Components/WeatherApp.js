// REACT
import React, { useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
// REDUX
import { useSelector, useDispatch } from "react-redux";
import { loadWeather } from "../Redux/Actions/weatherAction";
// MATERIAL UI
import TypoGraphy from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import DownAngle from "@material-ui/icons/ExpandMore";
// STYLES
import styled from "styled-components";
import { col } from "../Styles/Styles";
// APP
const WeatherApp = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadWeather("london"));
  }, [dispatch]);
  const { weatherData, forecastData, loading } = useSelector(
    (state) => state.weather
  );
  // Weather search input
  const inputRef = useRef();
  const sendResult = (e) => {
    e.preventDefault();
    dispatch(loadWeather(inputRef.current.value));
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
                  {Math.round(Number(weatherData.main.temp))}ºC
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
                <button>
                  <SearchIcon />
                </button>
                <input ref={inputRef} type="text" />
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
                          {Math.round(Number(entry.main.temp))}ºC
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
    .weatherToggle {
      cursor: pointer;
      .rotate {
        transform: rotate(180deg);
      }
    }
  }
  @media (min-width: 960px) {
    justify-content: center;
    padding: 0;
    .currentWeatherContainer {
      .iconContainer {
        width: 70px;
        height: 70px;
        img {
          height: 90px;
          width: 90px;
        }
      }
    }
    .weatherToggle {
      display: none;
    }
  }
`;

const ForecastList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  display: ${(props) => (props.weatherToggle ? "flex" : "none")};
  background-color: #eee;
  box-shadow: 0 5px 2rem rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 5rem;
  right: 0;
  text-align: center;
  border-radius: 10px;
  .searchContainer {
    form {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      button {
      }
      button,
      button:focus,
      button:active {
        cursor: pointer;
        outline: none;
        border: none;
        height: 35px;
        width: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
      }
      button svg {
        transition: opacity 0.3s linear;
      }
      button svg:hover {
        opacity: 0.6;
      }
      input {
        width: 100%;
        padding: 0.5rem 1rem;
        border: 1px solid ${col.greyLight};
        border-radius: 2rem;
        transition: all 0.3s ease;
        &:focus,
        :active {
          border-color: ${col.accent};
        }
      }
    }
  }
  .forecastContainer {
    margin-top: 10px;

    ul {
      display: flex;
      justify-content: space-evenly;
      li {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      li:nth-of-type(2) {
        border-right: 1px solid ${col.greyLight};
        border-left: 1px solid ${col.greyLight};
      }
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
    width: 100%;
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
  }
`;

export default WeatherApp;
