import React, {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios'

function App() {
  const [countriesData, setCountriesData] = useState([])
  const [filterName, setFilterName] = useState('')

  // fetch the data for all countries from the website
  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountriesData(response.data)
      })
  }
  , [])

  const handleFilterChange = (event) => {
    setFilterName(event.target.value)
  }

  let count = 0
 
  // limit the displayed countries to only show ones included in the input
  const countriesToShow = countriesData.filter(item => item.name.toLowerCase().includes(filterName.toLowerCase()))
  
  // what displays when more than one item found
  const filterList = countriesToShow.map(country => {
    count++ 
    return(<li key={count}>{country.name}</li>)
  })

  // filting until you find one item
  const filterSingle = (filterList.length === 1) ? countriesToShow[0]?.name : ''
  const isCountryNameMatch = item => item?.name === filterSingle
  
  // find the location of when you've found one
  const indexOfSingle = countriesData.findIndex(isCountryNameMatch)
  return (
   <main className="App">
    <section>
      <input 
        id="filter-input"
        type="text"
        value={filterName}
        onChange={handleFilterChange} /> 
    </section>
    
    {
        (!countriesToShow.length) ? 
        "No matches" :
        (countriesToShow.length > 10 ) ? 
        "Too many matches, specify another" :  
        (countriesToShow.length > 1 ) ? 
        <>
          <section>
            <ul>
              {filterList}
            </ul>
          </section>
        </>
        : 
        <>
          <h1>{filterSingle}</h1>
          <p>capital {countriesData[indexOfSingle]?.capital}</p>
          <p>population {countriesData[indexOfSingle]?.population}</p>

          <h2>languages</h2>
          <ul>
            {
            countriesData[indexOfSingle]?.languages
              .map(language => {
                count++
                return(<li key={count}>{language?.name}</li>)})
            }
          </ul>
          <img src={countriesData[indexOfSingle]?.flag} alt={`Flag of ${filterSingle}`} height="200px"/>

        </>
    }
  
   </main>
  );
}

export default App;
