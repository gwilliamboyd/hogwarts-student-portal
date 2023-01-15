import { useState, useEffect } from "react"
import SpellsEntry from "./SpellsEntry"

const SpellsBook = ({ page, setPage, spells }) => {
    const currentSpells = writeSpellPages()
    
    console.log(spells)
    console.log(currentSpells)
    // Creates first 2 pages
    function writeSpellPages(currentSpells) {
        currentSpells = [spells[page], spells[page + 1]]
        return currentSpells
    }    
    // Runs paginate on load
    useEffect(() => {
        console.log('page loaded')
        writeSpellPages(currentSpells)
    }, [])
    // Flips to next 2 pages
    function nextPage() {
        setPage(page + 2)
        writeSpellPages()
    }

    // // Right arrow key functionality
    window.addEventListener('keydown', (e) => {
        if(e.keyCode === 39) {
            // console.log('right')
            nextPage()
        }
    })
     
  return (
    <>
        <div className="spells-book">
            <div className="spells-page-one">
                <ul>
                {currentSpells[0].map((s) => {
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
                    {currentSpells[1].map((s) => {
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