const CharactersContainer = () => {
  return (
    <>
      <div className="characters-master">
        <div className="characters-heading">
          <div className="characters-title">
            Type any character's name or info here
          </div>
          <div className="characters-promise">
            <i>(But first, you must solemnly swear you are <b>not</b> up to no good...)</i>
          </div>
          <input type="text" className="characters-search-input" placeholder="Make sure you're not using invisible ink!" />
        </div>
      </div>
    </>
  )
}

export default CharactersContainer