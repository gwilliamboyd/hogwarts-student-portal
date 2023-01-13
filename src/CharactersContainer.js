import { useState, useMemo, useEffect } from "react"
import axios from "axios"
import CharacterBio from "./CharacterBio"

const CharactersContainer = () => {
  // Default state
  const [loading, setLoading] = useState(false)
  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1)
  // Vars
  let charactersPerPage
  const characterUrl = 'https://hp-api.onrender.com/api/characters'

  // Fetch character data from API
  useEffect(() => {
    const getCharacters = async () => {
      setLoading(true)
      const res = await axios.get(characterUrl)
      setCharacters(res.data)
      setLoading(false)
    }
    getCharacters()
  }, [])

  const [query, setQuery] = useState('')

  // Handles search
  const filteredCharacters = useMemo(() => {
    return characters.filter(c => (
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.house.toLowerCase().includes(query.toLowerCase()) ||
        c.patronus.toLowerCase().includes(query.toLowerCase())
    ))
  }, [characters, query])

  // Sets first and last index of currently loaded character list
  let lastIndex = page * setCharactersPerPage(charactersPerPage)
  const firstIndex = lastIndex - charactersPerPage
  let currentCharacters = filteredCharacters.slice(firstIndex, lastIndex)

  // Sets 20 characters per page initially
  useEffect(() => {
    setCharactersPerPage(charactersPerPage)
  }, [])

  // Adds 20 more characters each pagination
  function setCharactersPerPage(charactersPerPage) {
    if(charactersPerPage === undefined) {
      charactersPerPage = 20
    } else {
    charactersPerPage += 20    
    }
    return charactersPerPage
  }

  // Loads next 20 characters
  function paginate(charactersPerPage){
    setPage(page + 1)
    charactersPerPage += 20
    console.log(charactersPerPage.value)
    return charactersPerPage
  }
  // RETURN
  return (
    <>
      <div className="characters-master">
        {/* Character Heading/Search Bar */}
        <div className="characters-heading">
          <div className="characters-title" onClick={paginate}>
            Type any character's name or info here
          </div>
          <div className="characters-promise">
            <i>(But first, you must solemnly swear you are <b>not</b> up to no good...)</i>
          </div>
          <input
          value={query} 
          onChange={e => setQuery(e.target.value)}
          type="text" 
          className="characters-search-input" 
          placeholder="Make sure you're not using invisible ink!" />
        </div>       
        {/* Character bios */}
        <div className="characters-body">
          <ul>
            { 
              currentCharacters.map((c) => {
                return (
                  <CharacterBio
                  // pageNumber={pageNumber} 
                  image={c.image} 
                  name={c.name} 
                  house={c.house} 
                  patronus={c.patronus} />
                )
              })
            }              
          </ul>
        </div>
      </div>
    </>
  )
}

export default CharactersContainer