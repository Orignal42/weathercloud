import CardLyon from "./CardLyon";
import Days from "./Days";
import Hours from "./Hours";
import Header from "./Header";
import { useState } from "react";
import "./index.css";
import "./App.css";

function App() {
  const [humide, setHumide] = useState("");
  const [pression, setPression] = useState("");
  const [name, setName] = useState("");
  const [temp, setTemp] = useState("");
  const [wind, setWind] = useState("");
  const [deg, setDeg] = useState("");
  const [weather, setWeather] = useState("");
  const [day, setDay] = useState("");
  const [days, setDays] = useState("");
  const [hour, setHour] = useState("");
  const [hours, setHours] = useState("");
  const [icon, setIcon] = useState("");
  const [result, setResult] = useState({});
  const [choiceDay, setchoiceDay] = useState("");
  const [userInput, setUserInput] = useState("");

  const setData = (data) => {
    setName(data.city.name);
    setTemp(data.list[0].main.temp);
    setWeather(data.list[0].weather[0].description);
    setPression(data.list[0].main.pressure);
    setHumide(data.list[0].main.humidity);
    setIcon(data.list[0].weather[0].icon);
    setWind(data.list[0].wind.speed);
    setDeg(data.list[0].wind.deg);
    setResult(data);
    setDay(data.list[0].dt);
    setDays([
      data.list[7].dt,
      data.list[15].dt,
      data.list[23].dt,
      data.list[31].dt,
    ]);
    setHour(data.list[0].dt);
    setHours([
      data.list[1].dt,
      data.list[2].dt,
      data.list[3].dt,
      data.list[4].dt,
      data.list[5].dt,
      data.list[6].dt,
      data.list[7].dt,
      data.list[8].dt,
      data.list[9].dt,
      data.list[10].dt,
      data.list[11].dt,
      data.list[12].dt,
      data.list[13].dt,
      data.list[14].dt,
      data.list[15].dt,
      data.list[16].dt,
      data.list[17].dt,
      data.list[18].dt,
      data.list[19].dt,
      data.list[20].dt,
      data.list[21].dt,
      data.list[22].dt,
      data.list[23].dt,
      data.list[24].dt,
      data.list[25].dt,
      data.list[26].dt,
      data.list[27].dt,
      data.list[28].dt,
      data.list[29].dt,
      data.list[30].dt,
      data.list[31].dt,
      data.list[32].dt,
      data.list[33].dt,
      data.list[34].dt,
      data.list[35].dt,
      data.list[36].dt,
      data.list[37].dt,
      data.list[38].dt,
      data.list[39].dt,
    ]);
  };

  function changeDay(timestamp) {
    setchoiceDay(timestamp);
    setHour(timestamp);

    result.list.forEach((element) => {
      if (element.dt == timestamp) {
        setTemp(element.main.temp);
        setWind(element.wind.speed);
        setIcon(element.weather[0].icon);
        setDeg(element.wind.deg);
        setPression(element.main.pressure);
        setHumide(element.main.humidity);
      }
    });
  }


    const changeday = new Date (choiceDay * 1000);
    const daychoc = new Intl.DateTimeFormat("fr-FR", { day: "numeric" }).format(
      changeday
    );

   
  function changeHour(timestamp) {
    const changehour = new Date (timestamp * 1000);
    const hourchoc = new Intl.DateTimeFormat("fr-FR", { day: "numeric" }).format(
      changehour
    );
    console.log(daychoc)
    console.log(hourchoc)
   
    result.list.forEach((element) => { 
        setTemp(element.main.temp);
        setWind(element.wind.speed);
        setIcon(element.weather[0].icon);
        setDeg(element.wind.deg);
        setPression(element.main.pressure);
        setHumide(element.main.humidity);
 

    });
  }

  const handleSearch = (event) => {
    event.preventDefault();
    setUserInput(event.target.value);
  };

  if (name === "") {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getPosition);
    }
    function getPosition(position) {
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=0c09503f2db57be3e137a5e8d8606c6f&lang=fr&units=metric`
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (userInput !== "") {
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${userInput},FR&APPID=0c09503f2db57be3e137a5e8d8606c6f&lang=fr&units=metric`
      ).then((res) => {
        if (res.status) {
          res.json().then((data) => {
            setData(data);
          });
        } else {
          alert("ville inexistante");
        }
      });
    }
  };

  return (
    <div>
      <Header />
      <div className="App">
        <div className="row">
          <div className="col s12 m6 push-m3">
            <div className="search card blue-grey darken-1">
              <div className="card-content white-text">
                <form onSubmit={handleSubmit}>
                  Rechercher la ville de votre choix
                  <input type="text" onChange={handleSearch} />
                  <button type="submit">Rechercher</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CardLyon
        name={name}
        temp={temp}
        wind={wind}
        deg={deg}
        weather={weather}
        pression={pression}
        humide={humide}
        icon={icon}
      />

      <div className="days">
        <Days day={day} changeDay={changeDay} nextDays={days} />
      </div>

      <div className="hours">
        <Hours hour={hour} changeHour={changeHour} nextHours={hours} changeDay={changeDay} />
      </div>
    </div>
  );
}

export default App;
