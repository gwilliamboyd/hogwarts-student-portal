import { useState, useEffect } from "react"
import axios from "axios"
import SpellsBook from "./SpellsBook"

const SpellsContainer = () => {
    // Variables
    const spellsUrl = 'https://hp-api.onrender.com/api/spells'
    const spellsPerPage = 4
    // State initialization
    const [loading, setLoading] = useState(false)
    const [spells, setSpells] = useState([])
    const [page, setPage] = useState(0)
    const [currentSpells, setCurrentSpells] = useState([])
    // Gets spells from API
    useEffect(() => {
        const getSpells = async () => {
            setLoading(true)
            const res = await axios.get(spellsUrl)
            setSpells(res.data)
            setLoading(false)
        }
        getSpells()
    }, [])
    console.log(spells)
    // Split up spells array into chunks of 4
    function paginate() {
        const result = spells.reduce((spellPage, item, index) => { 
            const chunkIndex = Math.floor(index/spellsPerPage)        
            if(!spellPage[chunkIndex]) {
            spellPage[chunkIndex] = [] // start a new chunk
            }        
            spellPage[chunkIndex].push(item)
            return spellPage
    
        }, [])
        return result
    }

    const spellBooks = paginate()

/*     const currentSpells = writeSpellPages()
    // Creates first 2 pages
    function writeSpellPages(currentSpells) {
        currentSpells = [spellBooks[page], spellBooks[page + 1]]
        // console.log(currentSpells)
        return currentSpells
    }
    // console.log(currentSpells)
    // Runs paginate on load
    useEffect(() => {
        writeSpellPages(currentSpells)
    }, [])

    // Flips to next 2 pages
    function nextPage() {
        setPage(page + 2)
        writeSpellPages()
    } */

/*     function pageSpells(totalPages) {
        spells.forEach()
    }

    let totalPages = []
    

    function paginate() {
        for(let i = 1; i <= Math.ceil(spells.length / spellsPerPage); i++) {
            totalPages.push(i)
        }        
        console.log(totalPages)
        return totalPages
    }
    // Create proper number of pages on load
    
    console.log(currentSpells) 
*/

    return (
        <>
            <div className="spells-master">
                <div className="spells-container">
                    <h1 className="spells-header"/*  onClick={nextPage} */>
                        Spells Reference - 1992 Edition
                    </h1>
                    <SpellsBook page={page} 
                    setPage={setPage} 
                    spells={spellBooks}
                    currentSpells={currentSpells}
                    setCurrentSpells={setCurrentSpells} />
                </div>
            </div>
        </>
      )
}

export default SpellsContainer