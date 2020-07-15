import React from "react";
import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import Titles from "./components/Titles";
import Weather from "./components/Weather";

const API_KEY = "6f0a2906f4c4981bab1557fd1e8b9c63";

function App() {
  const [city, setCity] = useState<string>("");
  const [temperature, setTemperature] = useState<string>("");

  const getWeather = async (e: any) => {
    console.log(typeof e);
    e.preventDefault();
    const selectedIndex = e.target.elements.city.selectedIndex;
    const cityName = e.target.elements.city[selectedIndex].innerHTML;
    const apiCall = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=1580578&appid=${API_KEY}&units=metric`
    );
    const data = await apiCall.json();
    const temp = data["main"]["temp"];
    if (cityName !== "") {
      setCity(cityName);
    }
    if (temp !== "") {
      setTemperature(temp);
    }
    console.log(data);
  };
  const filerCity = (e: any) => {
    const countryIndex = e.target.selectedIndex;
    let filteredCity = e.target.parentNode.elements.city;
    for (let i = 0; i < filteredCity.length; i++) {
      if (e.target[countryIndex].value === "all") {
        filteredCity[i].style.display = "block";
        continue;
      }
      if (filteredCity[i].dataset.country !== e.target[countryIndex].value) {
        filteredCity[i].style.display = "none";
      } else {
        filteredCity[i].style.display = "block";
      }
    }
  };
  return (
    <div className="App">
      <Titles />
      <Form getWeather={getWeather} filterCity={filerCity} />
      <Weather temperature={temperature} city={city} />
    </div>
  );
}

export default App;
