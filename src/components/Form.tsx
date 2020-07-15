import React from "react";

interface formProps {
  getWeather: (e: any) => void;
  filterCity: (e: any) => void;
}

export default function Form({ getWeather, filterCity }: formProps) {
  return (
    <form onSubmit={getWeather}>
      <select name="country" id="country" onChange={filterCity}>
        <option value="all">All</option>
        <option value="VN">Viet Nam</option>
        <option value="US">USA</option>
        <option value="GB">England</option>
      </select>
      <select name="city" id="city">
        <option value="1581130" data-country="VN">
          Ha Noi
        </option>
        <option value="1566083" data-country="VN">
          Ho Chi Minh
        </option>
        <option value="1581298" data-country="VN">
          Hai Phong
        </option>
        <option value="5128581" data-country="US">
          New York
        </option>
        <option value="5218069" data-country="US">
          Washington
        </option>
        <option value="5344994" data-country="US">
          Los Angeles
        </option>
        <option value="2643743" data-country="GB">
          London
        </option>
        <option value="2643123" data-country="GB">
          Manchester
        </option>
        <option value="2644210" data-country="GB">
          Liverpool
        </option>
      </select>
      <button>Get weather</button>
    </form>
  );
}
