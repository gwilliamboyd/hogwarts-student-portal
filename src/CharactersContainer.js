import { useState, useMemo } from "react"
import CharacterBio from "./CharacterBio"
import Pagination from "./Pagination"

const CharactersContainer = ({ characters }) => {
  const [query, setQuery]  = useState('')
  const [firstIndex, setFirstIndex] = useState(0)
  const [lastIndex, setLastIndex] = useState(19)
  // const [currentPage, setCurrentPage] = useState(1)
  // const [hasMore, setHasMore] = useState(false)
  //  Sets 20 characters per page
  
  // Handles search
  const filteredCharacters = useMemo(() => {
    return characters.filter(c => (
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.house.toLowerCase().includes(query.toLowerCase()) ||
        c.patronus.toLowerCase().includes(query.toLowerCase())
    ))
  }, [characters, query])

  const charactersPerPage = 20
  // let firstIndex
  // let lastIndex
  let currentCharacters

  let getFirstIndex = (charactersPerPage) => {
    if(filteredCharacters.length === 0) {
      firstIndex = 0
    }
  }
  // Set places where each page breaks
  let lastCharacterIndex = currentPage * (charactersPerPage - 1)
  // let firstCharacterIndex = lastCharacterIndex - (charactersPerPage - 1)
  let firstCharacterIndex = filteredCharacters.filter((element, index) => {
    return index % 20 === 0
})
/*   const currentCharacters = [...filteredCharacters, filteredCharacters.slice(firstCharacterIndex, (lastCharacterIndex + 1))]
  let pageNumber = firstCharacterIndex + 1 */

  

  // Set which character is last of given page
  /* for(let i = 1;i <= filteredCharacters.length; i+=20) {
    filteredCharacters[i].pageNumber+=1
  } */
  // Add page number props to each object
  filteredCharacters.forEach(c => {
    c.pageNumber = pageNumber
  })
  console.log(filteredCharacters)
  /* function paginateCharacters() {
    filteredCharacters['pagenumber'] = charactersPerPage - lastCharacterIndex
      console.log(filteredCharacters.pagenumber)
    }
      */


/*   const pageNumber = []

  for(let i = 1; i <= Math.ceil(filteredCharacters / charactersPerPage); i++) {
    pageNumber.push(i)
  }
  console.log(pageNumber)
 */
  // const paginate = (pageNumbers) => setCurrentPage(pageNumbers)

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
        <div className="characters-body">
          <ul>
            { 
              currentCharacters.map((c) => {
                return (
                  <CharacterBio
                  // pageNumber={pageNumber}
                  key={c.id} 
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