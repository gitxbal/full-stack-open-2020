import React from 'react'

const WeatherCard = ({weatherData}) => (
    <>
        <h2>Weather in {weatherData.location?.name}</h2>
        <p><strong>temperature: </strong>{`${weatherData.current?.temperature} Fahrenheit`}</p>
        <img src={weatherData.current?.weather_icons} alt={`The current weather in ${weatherData.location?.name} is ${weatherData.current?.weather_descriptions}`} height="75px"/>
        <p><strong>wind: </strong>{`${weatherData.current?.wind_speed} mph direction ${weatherData.current?.wind_dir}`}</p>
    </>
)

export default WeatherCard