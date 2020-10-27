import React, {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios'
import CountryCard from './components/CountryCard';
import CountryList from './components/CountryList';
import Filter from './components/Filter'
import WeatherCard from './components/WeatherCard'

function App() {
  // Country Variables
  const [countriesData, setCountriesData] = useState([])
  const [filterName, setFilterName] = useState('')
  
  // Weather API Variables
  const [weatherData, setWeatherData] = useState([])
  const ApiUrl = 'https://api.weatherbit.io/v2.0/current'
  const api_key = process.env.REACT_APP_WEATHERBIT_API_KEY
  const [encodedCapitalCity, setEncodedCapitalCity] = useState('')
  const [countryCode, setCountryCode] = useState('')
  
  let count = 0
  
  // limit the displayed countries to only show ones included in the input
  const countriesToShow = countriesData.filter(item => item.name.toLowerCase().includes(filterName.toLowerCase()))
  
  // what displays when more than one item found
  const filterList = countriesToShow.map(country => {
    count++ 
    return(<li key={count} style={{marginBottom: "0.25rem"}}><label>{country.name}<button style={{marginLeft: "0.5rem"}} onClick={() => setFilterName(country.name)}>Show</button></label></li>)
  })
  
  // filtering until you find one item
  const filterSingle = (filterList.length === 1) ? countriesToShow[0]?.name : ''
  const isCountryNameMatch = item => item?.name === filterSingle
  
  // find the location of when you've found one
  const indexOfSingle = countriesData.findIndex(isCountryNameMatch)
  
  // fetch the data for all countries from the website
  useEffect(() => {
    console.log('country effect')
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      console.log('country promise fulfilled')
      setCountriesData(response.data)
    })

    const alpha2Code = `${countriesData[indexOfSingle]?.alpha2Code}`
    setCountryCode(alpha2Code)
    const capitalData = countriesData[indexOfSingle]?.capital.split(',')
    let unencodedCapitalCity
    (typeof(capitalData)==='object')?
     (unencodedCapitalCity =  `${capitalData[0] || "unknown"}`):
     (unencodedCapitalCity =  `${capitalData || "unknown"}`)
      
    setEncodedCapitalCity(encodeURI(unencodedCapitalCity))
  }
  , [filterSingle])
  
  
  useEffect(() => {
    console.log('weather effect')
    const params = {
      key: api_key,
      city: encodedCapitalCity,
      country: countryCode,
      units: 'I'
    }
    if(encodedCapitalCity){
        axios
        .get(ApiUrl, {params})
        .then(response => {
          console.log('weather promise fulfilled')
          setWeatherData(response.data?.data)
        })
    }
  }
  , [encodedCapitalCity])
 
  const handleFilterChange = (event) => {
    setFilterName(event.target.value)
  }

  return (
   <main className="App">
    <Filter
      filterName={filterName}
      handleFilterChange={handleFilterChange} />

    {   
        // Multiple ternaries to map through country data
        // Starts with an empty search field
        (!filterName.length) ?
        <p>Enter a country name above</p> :
        // Check if nothing in the input
        (!countriesToShow.length) ? 
        <p>No matches <button style={{marginLeft: "0.5rem"}} onClick={() => setFilterName('')}>Reset</button></p> :
        // Check if over 10 results
        (countriesToShow.length > 10 ) ? 
        <p>Too many matches, specify another</p> : 
        // Check if less than ten but still more than one 
        (countriesToShow.length > 1 ) ? 
        <CountryList filterList={filterList}/>
        : 
        // Only one match
        <>
          <CountryCard 
            filterSingle={filterSingle}
            countriesData={countriesData}
            indexOfSingle={indexOfSingle}
            weatherData={weatherData} />

          {/* Weather Card Ternary 
            - capital location canot be unknown */}
          {(weatherData) ? 
            <WeatherCard weatherData={weatherData} />
            :
            <h2>Weather data unavailable</h2>}
        </>
    }
  
   </main>
  );
}

export default App;
