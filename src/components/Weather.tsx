import React from "react";

interface WeatherProps {
  temperature: string;
  city: string;
}

export default function Weather({ temperature, city }: WeatherProps) {
  return (
    <>
      <div>City: {city}</div>
      <div>Temperature: {temperature}</div>
    </>
  );
}
