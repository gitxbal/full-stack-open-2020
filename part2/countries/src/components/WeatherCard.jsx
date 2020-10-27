import React from 'react'

const WeatherCard = ({weatherData}) => (
    <>
        <h2>Weather in {weatherData[0].city_name}</h2>
        <p><strong>temperature: </strong>{`${Math.round(weatherData[0].temp)} Fahrenheit`}</p>
        <img src={`https://www.weatherbit.io/static/img/icons/${weatherData[0].weather.icon}.png`} alt={`The current weather in ${weatherData[0].city_name} is ${weatherData[0].weather.description}`} height="120px"/>
        <p><strong>wind: </strong>{`${Math.round(weatherData[0].wind_spd)} mph direction ${weatherData[0].wind_cdir}`}</p>
    </>
)

export default WeatherCard