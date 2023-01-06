import { useState, useMemo } from "react"
import CharacterBio from "./CharacterBio"

const CharactersContainer = ({ characters }) => {
 const [query, setQuery]  = useState('')
 console.log(characters)
//  const [searched, setSearched] = useState(false)

 const filteredCharacters = useMemo(() => {
  return characters.filter(c => (
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.house.toLowerCase().includes(query.toLowerCase()) ||
      c.patronus.toLowerCase().includes(query.toLowerCase())
  ))
 }, [characters, query])
 console.log(filteredCharacters)
 
  return (
    <>
      <div className="characters-master">
        {/* Character Heading/Search Bar */}
        <div className="characters-heading">
          <div className="characters-title">
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
        <div className="characters-body">
          <ul>
            { 
              filteredCharacters.map((c) => {
                return (
                  <CharacterBio
                  key={c.url} 
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