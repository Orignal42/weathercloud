import CardLyon from "./CardLyon";
import Days from "./Days";
import Header from "./Header";
import { useState, useEffect } from "react";import "./index.css";
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
     data.list[7].dt ,
     data.list[15].dt,
     data.list[23].dt,
     data.list[31].dt
  ])

};
function changeDay(timestamp){
  result.list.forEach( element => {
    if (element.dt==timestamp){
    console.log(element)
    setTemp(element.main.temp)
    setWind(element.wind.speed)
    setIcon(element.weather[0].icon)
    setDeg(element.wind.deg)
  }
});
}

  useEffect(async () => {
    if (on) {
      await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=Lyon,FR&units=metric&APPID=cb0a930e7a31a1900ac0ff06d2ddaf24&lang=fr`
      )
        .then((res) => res.json())
        .then(async (data) => {
          setData(data);
       
        });
    }

    await setOn(false);
  }, []);

  return (
    <div>
      <Header />
      <CardLyon
        name={name}
        temp={temp}
        wind={wind}
        deg={deg}
        weather={weather}
        icon={icon}
      />

      <div className="days">
              
    <Days

      day={day} changeDay={changeDay} nextDays={days}
     
    />
      </div>
    </div>
  );
}

export default App;
