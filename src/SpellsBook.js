import { useEffect, useState } from "react"
import SpellsEntry from "./SpellsEntry"
import useKeypress from "react-use-keypress"
import { useSwipeable } from "react-swipeable"

// Creates first 2 pages
function writeSpellPages(spellBooks, page) {
    let currentSpells = [spellBooks[page], spellBooks[page + 1]]
    return currentSpells
} 

const SpellsBook = ({ page, setPage, spellBooks }) => {

    // State initialization
    const [currentSpells, setCurrentSpells] = useState(writeSpellPages(spellBooks, page))

    // Runs paginate on load
    useEffect(() => {
        setCurrentSpells(writeSpellPages(spellBooks, page))
    }, [spellBooks, page])

    // Flips to next 2 pages
    function previousPage() {
        // setCurrentSpells(writeSpellPages(spellBooks, (page + 2)))
        if(page < 0) {
            return
        }
        setPage(page - 2)
        // writeSpellPages(spellBooks, page)
    }
    // Flips to next 2 pages
    function nextPage() {
        // setCurrentSpells(writeSpellPages(spellBooks, (page + 2)))
        if(page > 18) {
            return
        }
        setPage(page + 2)
        // writeSpellPages(spellBooks, page)
    }

    useKeypress(['ArrowLeft', 'ArrowRight'], (e) => {
        if(e.key === 'ArrowLeft') {
            previousPage()
        } else {
            nextPage()
        }
    })

    const previousPageSwipe = useSwipeable({
        preventScrollOnSwipe: true,
        onSwipedRight: () => previousPage()
    })
    const nextPageSwipe = useSwipeable({
        preventScrollOnSwipe: true,
        onSwipedLeft: () => nextPage()
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
            <div className="spells-page-one" {...previousPageSwipe} {...nextPageSwipe} >
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
            <div className="spells-page-two" {...previousPageSwipe} {...nextPageSwipe} >
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