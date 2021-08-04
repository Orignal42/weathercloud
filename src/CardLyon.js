import react from "react";
import "./index.css";
import "./App.css";


function CardLyon(props) {
// console.log(props);
  return (
    <div class="App">
      <div class="row">
        <div class="col s12 m6 push-m3">
          <div class="weather card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">{props.name ? props.name : ""}</span>
              <p>
                <img
                  src={props.icon
                      ? "http://openweathermap.org/img/wn/" + props.icon+ "@2x.png"
                      : "01d.png"
                  }
                />
              </p>
              <span class="temperature">{props.temp ? props.temp : ""}°</span>
              <span class="weather">{props.weather ? props.weather : ""}</span>
              <span class="day">{props.day}</span>
              <div class="wind">
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
