// REACT
import React, { useRef, useEffect, useState } from "react";
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
  const inputRef = useRef();
  const [weatherToggle, setWeatherToggle] = useState(false);
  const { weatherData, forecastData, loading } = useSelector(
    (state) => state.weather
  );
  useEffect(() => {
    dispatch(loadWeather("london"));
  }, [dispatch]);
  // Weather search input
  const sendResult = (e) => {
    e.preventDefault();
    dispatch(loadWeather(inputRef.current.value));
  };

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
                <p>{Math.round(Number(weatherData.main.temp))}ºC</p>
              </div>
              <div className="weatherToggle">
                <DownAngle
                  className={`${weatherToggle ? "rotate" : ""}`}
                  onClick={() => setWeatherToggle(!weatherToggle)}
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
                      <p>{entry.dt_txt.substr(-8, 5)}</p>
                      <div className="iconContainer">
                        <img
                          src={`http://openweathermap.org/img/wn/${entry.weather[0].icon}@2x.png`}
                          title={`${entry.weather[0].description} Icon`}
                          alt={`${entry.weather[0].description} Icon`}
                        />
                      </div>
                      <div className="textContainer">
                        <p>{Math.round(Number(entry.main.temp))}ºC</p>
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
  position: relative;
  width: 50%;
  height: 100%;
  padding: 0.5rem 0;
  h6 {
    line-height: 1;
  }
  @media (min-width: 960px) {
    width: 100%;
    position: relative;
  }
`;

const CurrentWeather = styled.div`
  display: flex;
  justify-content: flex-end;
  .currentWeatherContainer {
    display: flex;
    width: inherit;
    align-items: center;
    flex-direction: row;
    border: 1px solid ${col.brandMain};
    color: ${col.brandMain};
    font-weight: 900;
    .iconContainer {
      height: 35px;
      width: 55px;
      position: relative;
      margin-right: 0.2rem;
      background-color: ${col.brandMain};
      img {
        position: absolute;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
        height: 55px;
        width: 55px;
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
    justify-content: flex-start;
    .currentWeatherContainer {
      width: 100%;
      border-color: ${col.neutral86};

      background-color: ${col.neutral97};
      border-bottom: none;
      .iconContainer {
        width: 50%;
      }
      .textContainer {
        width: 50%;
        text-align: center;
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
  /* box-shadow: 0 5px 1rem rgba(0, 0, 0, 0.2); */
  position: absolute;
  right: 0;
  top: 2.7rem;
  text-align: center;
  border: 1px solid ${col.brandMain};
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
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
        padding: 0.3rem 1rem;
        border: 1px solid ${col.brandMain};
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
        color: ${col.brandMain};
        font-weight: 900;
      }
      li > p {
        font-weight: 300;
      }
      li:nth-of-type(2) {
        border-right: 1px solid ${col.brandMain};
        border-left: 1px solid ${col.brandMain};
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

  @media (max-width: 500px) {
    width: 100%;
    border-radius: none;
  }
  @media (min-width: 960px) {
    top: 2.5rem;
    left: 0;
    padding: 0.25rem;
    display: flex;
    box-shadow: none;
    border-color: ${col.neutral86};
    border-top: none;
    .forecastContainer {
      ul {
        li:nth-of-type(2) {
          border-color: ${col.neutral90};
        }
        li > p {
          font-size: 0.8rem;
        }
      }
    }
  }
`;

export default WeatherApp;
