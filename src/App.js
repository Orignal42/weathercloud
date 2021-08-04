import CardLyon from "./CardLyon";
import Days from "./Days";
import Header from "./Header";
import { useState, useEffect } from "react";
import "./index.css";
import "./App.css";

function App() {
  const [on, setOn] = useState(true);
  const [name, setName] = useState("");
  const [temp, setTemp] = useState("");
  const [wind, setWind] = useState("");
  const [deg, setDeg] = useState("");
  const [weather, setWeather] = useState("");
  const [day, setDay] = useState("");
  const [days, setDays] = useState("");
  const [icon, setIcon] = useState("");
  const [result, setResult] = useState({});
  const [error, setError] = useState(null);
  const [userInput, setUserInput] = useState("");
  const setData = (data) => {
    setName(data.city.name);
    setTemp(data.list[0].main.temp);
    setWeather(data.list[0].weather[0].main);
    setIcon(data.list[0].weather[0].icon);
    setWind(data.list[0].wind.speed);
    setDeg(data.list[0].wind.deg);
    setResult(data);
    setDay(data.list[0].dt);
    setDays([
      // data.list[0].dt + 86400,
      // data.list[0].dt+(86400*2),
      // data.list[0].dt+(86400*3),
      // data.list[0].dt+(86400*4),
      data.list[7].dt,
      data.list[15].dt,
      data.list[23].dt,
      data.list[31].dt,
    ]);
  };

  function changeDay(timestamp) {
    result.list.forEach((element) => {
      if (element.dt == timestamp) {
        setTemp(element.main.temp);
        setWind(element.wind.speed);
        setIcon(element.weather[0].icon);
        setDeg(element.wind.deg);
      }
    });
  }

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(userInput);
    setUserInput(event.target.value);
  };

  if (name === '') {
   
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getPosition);
    }
    function getPosition(position) {
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=0c09503f2db57be3e137a5e8d8606c6f`
      )
      .then((res) => res.json())
      .then( (data) => {
        setData(data);
       
      });
    
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${userInput},FR&units=metric&APPID=0c09503f2db57be3e137a5e8d8606c6f&lang=fr`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      
      });
    }
  

  return (
    <div>
      <Header />
      <div className="search">
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleSearch} />
          <button type="submit">Rechercher</button>
        </form>
      </div>
      <CardLyon
        name={name}
        temp={temp}
        wind={wind}
        deg={deg}
        weather={weather}
        icon={icon}
      />

      <div className="days">
        <Days day={day} changeDay={changeDay} nextDays={days} />
      </div>
    </div>
  );
}

export default App;
