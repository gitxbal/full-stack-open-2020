import React, {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios'
import CountryCard from './components/CountryCard';
import CountryList from './components/CountryList';
import Filter from './components/Filter'

function App() {
  // Country Variables
  const [countriesData, setCountriesData] = useState([])
  const [filterName, setFilterName] = useState('')
  
  // Weather API Variables
  const [weatherData, setWeatherData] = useState([])
  const api_key = process.env.REACT_APP_API_KEY
  const [capitalCity, setCapitalCity] = useState('')
  
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
    const unEncodedCapitalCity = `${countriesData[indexOfSingle]?.capital}, ${filterSingle}`
    setCapitalCity(encodeURI(unEncodedCapitalCity))
  }
  , [])
  
  useEffect(() => {
    console.log('weather effect')
    if(capitalCity){
      const ApiUrl = `http://api.weatherstack.com/current?access_key=${api_key}&query=${capitalCity}&units=f`
        axios
        .get(ApiUrl)
        .then(response => {
          console.log('weather promise fulfilled')
          setWeatherData(response.data)
        })
    }
    
    }
    , [filterSingle])
 

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
        <CountryCard 
          filterSingle={filterSingle}
          countriesData={countriesData}
          indexOfSingle={indexOfSingle}
          capitalCity={capitalCity}
          setCapitalCity={setCapitalCity} />
    }
  
   </main>
  );
}

export default App;
