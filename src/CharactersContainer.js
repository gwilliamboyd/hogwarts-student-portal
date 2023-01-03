import CharacterBio from "./CharacterBio"

const CharactersContainer = ({ characters }) => {
  const character = () => {
    let characterNames = characters.map(c => c.name)
    let houseNames = characters.map(c => c.house)
    let patronusNames = characters.map(c => c.patronus)
  }
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
          <input type="text" 
          className="characters-search-input" 
          placeholder="Make sure you're not using invisible ink!" />
        </div>
        <div className="characters-body">
          <ul>
            { characters.map((c) => {
              return (
                <CharacterBio image={c.image} name={c.name} house={c.house} patronus={c.patronus} />
              // <li className="characters-bio">
              //     <div className="character-image"><img src={c.image} /></div>
              //     <div className="character-name">{c.name}</div>
              //     <div className="character-house">{c.house}</div>
              //     <div className="character-patronus">{c.patronus}</div>
              //   </li>
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