import react from "react";
import "./index.css";
import "./App.css";


function CardLyon(props) {
// console.log(props);
  return (
    <div className="App">
      <div className="row">
        <div className="col s12 m6 push-m3">
          <div className="weather card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{props.name ? props.name : ""}</span>
              <p>
                <img
                  src={props.icon
                      ? "http://openweathermap.org/img/wn/" + props.icon+ "@2x.png"
                      : "01d.png"
                  }
                />
              </p>
              <span className="temperature">{props.temp ? props.temp : ""}°</span>
              <span className="weather">{props.weather ? props.weather : ""}</span>
              <span className="day">{props.day}</span>
              <div className="wind">
                Vent {props.wind ? props.wind : ""}km/h ({props.deg}°)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardLyon;
