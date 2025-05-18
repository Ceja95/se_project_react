import "./WeatherCard.css";

function WeatherCard() {
  return (
    <div className="card">
      <div className="card__info">
        <p className="card__text">75F</p>
        <div className="card__image">
          <div className="card__cloud-left"></div>
          <div className="card__cloud-middle"></div>
          <div className="card__cloud-right"></div>
          <div className="card__cloud-bottom"></div>
           <div className="card__sun"></div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
