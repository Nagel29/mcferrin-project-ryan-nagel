import "./Search.css"
import { useState, useEffect } from "react"

const Search = ({ getBeers }: { getBeers: any }) => {
  const [search, setSearch] = useState<string>("")

  const handleChange = (event: any) => {
    setSearch(event.target.value)
  }

  useEffect(() => {
    getBeers(search)
  }, [search])

  return (
    <div className="input-group input-group-md bg-light">
      <span className="input-group-text" id="input-search">
        Search by Name:
      </span>
      <input
        type="text"
        className="form-control"
        onChange={(event) => handleChange(event)}
        value={search}
      />
    </div>
  )
}

export default Search
