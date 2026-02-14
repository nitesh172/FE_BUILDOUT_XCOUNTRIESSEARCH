import React from "react"

const CountryCard = ({ country }) => {
  return (
    <div className="countryCard">
      <img
        src={country.png}
        alt={country.common}
        style={{ width: "100px", height: "100px" }}
      />
      <h2>{country.common}</h2>
    </div>
  )
}

export default CountryCard
