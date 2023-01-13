import { useState, useMemo, useEffect } from "react"
import CharacterBio from "./CharacterBio"

const CharactersContainer = ({ characters }) => {
  //  Sets 20 characters per page
  const charactersPerPage = 20
  let firstIndex
  let lastIndex
  let currentCharacters
  // State definitions
  const [query, setQuery]  = useState('')
  // const [currentCharacters, setCurrentCharacters] = useState([])

  // Handles search
  const filteredCharacters = useMemo(() => {
    return characters.filter(c => (
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.house.toLowerCase().includes(query.toLowerCase()) ||
        c.patronus.toLowerCase().includes(query.toLowerCase())
    ))
  }, [characters, query])
  // console.log(currentCharacters)

  useEffect(() => {
    currentCharacters = filteredCharacters.slice(0, 20)
    return currentCharacters

  }, [filteredCharacters])


  function getFirstIndex(length) {    
    if(currentCharacters.length === 0) {
      firstIndex = 0
    } else {
        firstIndex = length
    }
    return firstIndex
  }
  function getLastIndex(firstIndex) {    
    lastIndex = firstIndex + charactersPerPage
    return lastIndex
  }

  function buildCharacters(length) {
    length = currentCharacters.length
    console.log(length)
    // setFirstIndex(firstIndex + length)
    getFirstIndex(length)
    // setLastIndex(firstIndex + charactersPerPage)
    getLastIndex(firstIndex)
    console.log(firstIndex, lastIndex)
    let newCharacters = filteredCharacters.slice(firstIndex, lastIndex)
    console.log(newCharacters)
    currentCharacters = currentCharacters.concat(newCharacters)
    console.log(currentCharacters)
    return currentCharacters    
  }

  return (
    <>
      <div className="characters-master">
        {/* Character Heading/Search Bar */}
        <div className="characters-heading">
          <div className="characters-title" onClick={buildCharacters}>
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