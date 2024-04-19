import React from 'react'; 
import ReactWeather, { useOpenWeather } from "react-open-weather"; 

const WeatherInformation = () => { 

  const { data, isLoading, errorMessage } = useOpenWeather({ 
    key: '48da41bddd751bb4fef876d57e3eced4', //Put your API Key between the quotes 
    lat: '48.137154', 
    lon: '11.576124', 
    lang: 'en', 
    unit: 'metric', // values are (metric, standard, imperial) 
  }); 

  return ( 
    <div className="WeatherInformation" id="WeatherInformation"> 
      <h3>Weather Information</h3> 
        <ReactWeather 
            isLoading={isLoading} 
            errorMessage={errorMessage} 
            data={data} 
            lang="en" 
            locationLabel="Munich" 
            unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }} 
        /> 
    </div> 
  ); 

} 

export default WeatherInformation;