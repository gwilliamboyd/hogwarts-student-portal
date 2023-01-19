import { useEffect, useState } from "react"
import SpellsEntry from "./SpellsEntry"

// Creates first 2 pages
function writeSpellPages(spellBooks, page) {
    let currentSpells = [spellBooks[page], spellBooks[page + 1]]
    return currentSpells
} 

const SpellsBook = ({ page, setPage, spellBooks }) => {

    const [currentSpells, setCurrentSpells] = useState(writeSpellPages(spellBooks, page))

    // Runs paginate on load

    useEffect(() => {
        setCurrentSpells(writeSpellPages(spellBooks, page))
    }, [spellBooks, page])


    // Flips to next 2 pages
    function nextPage() {
        // Catch error at end of spells
        // setCurrentSpells(writeSpellPages(spellBooks, (page + 2)))
        setPage(page + 2)
        // writeSpellPages(spellBooks, page)
    }

    // Right arrow key functionality
    // Insert into useEffect:
    window.addEventListener('keydown', (e) => {
        if(e.keyCode === 39) {
            nextPage()
        }
    })

  return (
    <>
        <div className="spells-book">
            <div className="spells-page-one">
                <ul>
                {currentSpells?.[0]?.map((s) => {
                        return (
                            <SpellsEntry 
                            id={s.id}
                            name={s.name}
                            desc={s.description}/>
                        )
                    })}
                </ul>
            </div>
            <div className="spells-page-two">
                <ul>
                    {currentSpells?.[1]?.map((s) => {
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