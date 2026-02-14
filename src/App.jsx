import { useEffect, useState } from "react"
import "./App.css"
import CountryCard from "./components/country-card"

function App() {
  const [countries, setCountries] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredCountries, setFilteredCountries] = useState([])

  const fetchCountries = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_SERVER_API)
      const data = await response.json()
      setCountries(data)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  useEffect(() => {
    fetchCountries()
  }, [])

  useEffect(() => {
    const filtered = searchTerm
      ? countries.filter((country) =>
          country.name.toLowerCase().includes(searchTerm.toLowerCase()),
        )
      : countries

    setFilteredCountries(filtered)
  }, [countries, searchTerm])

  return (
    <div style={{ width: "100%" }}>
      <nav className="nav">
        <input
          type="text"
          className="input"
          value={searchTerm}
          placeholder="Search for countries..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </nav>
      <div className="countries-list">
        {filteredCountries.map((country, index) => (
          <CountryCard key={country.abbr + index} country={country} />
        ))}
      </div>
    </div>
  )
}

export default App
