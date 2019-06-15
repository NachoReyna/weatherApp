import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import {
  SUN,  
} from './../constant/weather';


const WeatherData = () => (
  <div>
    <WeatherTemperature 
          temperature = {30}
          weatherState = {SUN} >
    </WeatherTemperature>
    <WeatherExtraInfo 
          humidity={80} 
          wind={"10 m/s"}>
    </WeatherExtraInfo>
  </div>
);

export default WeatherData;