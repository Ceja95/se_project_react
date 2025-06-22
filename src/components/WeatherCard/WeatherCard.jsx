import "./WeatherCard.css";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../Context/CurrentTemperatureUnitContext";
import { weatherTypes, defaultWeatherTypes } from "../../utils/constants";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const filterType = weatherTypes.filter((type) => {
    return (
      type.day === weatherData.isDay && type.condition === weatherData.condition
    );
  });

  let weatherType;

  if (filterType.length === 0) {
    weatherType = defaultWeatherTypes[weatherData.isDay ? "day" : "night"];
  }else {
  weatherType = filterType[0];
  }

  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherData.temp[currentTemperatureUnit]}&deg;{currentTemperatureUnit}</p>
      <img
        src={weatherType?.url}
        alt={`Showing ${weatherType?.day ? "day" : "night"} time ${weatherType?.condition} weather`}
        className="weather-card__img"
      />
    </section>
  );
}

export default WeatherCard;
