import React, {useState, useEffect} from 'react'
import axios from 'axios'

const CountryCard = ({filterSingle, countriesData, indexOfSingle, capitalCity, setCapitalCity }) => {
    let count = 0

    return(
        <>
          <h1>{filterSingle}</h1>
          <p>capital {countriesData[indexOfSingle]?.capital}</p>
          <p>population {countriesData[indexOfSingle]?.population.toLocaleString()}</p>

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
    )
}

export default CountryCard