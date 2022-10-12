import React from 'react'

import worldData from 'countries-state-city-dropdown'

const StateSelector = () => {
    const countriesList = worldData.getAllCountries();
    const statesList = worldData.getAllStates();
    const citiesList = worldData.getAllCitys();
  return (
    <div>StateSelector</div>
  )
}

export default StateSelector