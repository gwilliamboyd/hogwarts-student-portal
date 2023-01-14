import { useState, useMemo, useEffect, useRef } from "react"
import axios from "axios"
import CharacterBio from "./CharacterBio"
// import useScroll from "./hooks/useScroll"

const CharactersContainer = () => {
  // Default state
  const [loading, setLoading] = useState(false)
  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1)
  // Vars
  let charactersPerPage
  const characterUrl = 'https://hp-api.onrender.com/api/characters'

  // Set character body ref
  let charactersBodyRef = useRef(null)

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
  
  function capitalize(str) {
    // return str.charAt(0).toUpperCase() + str.slice(1)
    if(str === '') {
      return 'Unknown'
    }
    return (
      str.toLowerCase()
      .split(' ')
      .map(s => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ')
    )    
  }

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
  function paginate(){
    setPage(page + 1)
  }
  const handleScroll = (e) => {
    const element = e.target
    // console.log(element.offsetHeight)
    // console.log(charactersBody)
    // console.log(charactersBodyRef.innerHeight)
    if(element.scrollTop + element.clientHeight >= element.scrollHeight) {
      console.log('bottom of page')
      paginate()
    }
  }
  // RETURN
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
        {/* Character bios */}
        <div className="characters-body" ref={charactersBodyRef} onScroll={handleScroll}>
          <ul>
            { 
              currentCharacters.map((c) => {
                return (
                  <CharacterBio
                  // pageNumber={pageNumber} 
                  image={c.image} 
                  name={c.name} 
                  house={capitalize(c.house)} 
                  patronus={capitalize(c.patronus)} />
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