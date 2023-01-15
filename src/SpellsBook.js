import SpellsEntry from "./SpellsEntry"

const SpellsBook = ({ spells }) => {
    // console.log(spells[0][0].id)
    // const spellsPageOne = spells.slice(0, 4)
    // console.log(spellsPageOne[0])  
  return (
    <>
        <div className="spells-book">
            <div className="spells-page-one">
                <ul>
                    {spells.forEach(s => {
                        // console.log(s)
                    })}
                </ul>
            </div>
            <div className="spells-page-two">
                <ul>
                    {spells.map((s) => {
                        return (
                            <SpellsEntry 
                            id={s.id}
                            name={s.name}
                            desc={s.description}/>
                        )
                    })}
                </ul>
            </div>
        </div>
    </>
  )
}

export default SpellsBook