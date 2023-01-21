import { useEffect, useState } from "react"
import SpellsEntry from "./SpellsEntry"
import useKeypress from "react-use-keypress"

// Creates first 2 pages
function writeSpellPages(spells, page) {
    let currentSpells = [spells[page], spells[page + 1]]
    return currentSpells
} 

const SpellsBook = ({ page, setPage, spells }) => {

    // State initialization
    const [currentSpells, setCurrentSpells] = useState(writeSpellPages(spells, page))

    // Runs paginate on load
    useEffect(() => {
        setCurrentSpells(writeSpellPages(spells, page))
    }, [spells, page])

    // Flips to next 2 pages
    function previousPage() {
        // setCurrentSpells(writeSpellPages(spells, (page + 2)))
        if(page < 0) {
            return
        }
        setPage(page - 2)
        // writeSpellPages(spells, page)
    }
    // Flips to next 2 pages
    function nextPage() {
        // setCurrentSpells(writeSpellPages(spells, (page + 2)))
        if(page > 18) {
            return
        }
        setPage(page + 2)
        // writeSpellPages(spells, page)
    }

    useKeypress(['ArrowLeft', 'ArrowRight'], (e) => {
        if(e.key === 'ArrowLeft') {
            previousPage()
        } else {
            nextPage()
        }
    })

    // Both of these funcitons freeze the page when pressed too quickly
    // Insert into useEffect:
/*     window.addEventListener('keydown', (e) => {
        if(e.keyCode === 37) {
            previousPage()
        }
    })
    window.addEventListener('keydown', (e) => {
        if(e.keyCode === 39) {
            nextPage()
        }
    }) */

  return (
    <>
        <div className="spells-book">
            <div className="spells-page-one">
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