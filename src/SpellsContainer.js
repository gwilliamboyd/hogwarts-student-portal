import { useState, useEffect } from "react"
import axios from "axios"
import SpellsBook from "./SpellsBook"

const SpellsContainer = () => {
    const spellsUrl = 'https://hp-api.onrender.com/api/spells'
    const spellsPerPage = 4

    const [loading, setLoading] = useState(false)
    const [spells, setSpells] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        const getSpells = async () => {
            setLoading(true)
            const res = await axios.get(spellsUrl)
            setSpells(res.data)
            setLoading(false)
        }
        getSpells()
    }, [])

    // let lastIndex = page * spellsPerPage
    // const firstIndex = lastIndex - spellsPerPage
    // let currentSpells = []
    // let spellChunk = []
  /*   const result = spells.reduce((spellPage, item, index) => { 
        const chunkIndex = Math.floor(index/spellsPerPage)
    
        if(!spellPage[chunkIndex]) {
        spellPage[chunkIndex] = [] // start a new chunk
        }
    
        spellPage[chunkIndex].push(item)
    
        // console.log(spellPage)
        return spellPage

    }, []) */
    // console.log(result)
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

    function writeSpellPages() {
        spellBooks.forEach(sB => {

        })
    }
    // Runs paginate on load
    useEffect(() => {
        writeSpellPages()
    }, [])
    // let currentSpells = spells.slice(firstIndex, lastIndex)
    // console.log(currentSpells)
/*     function paginate() {
        for(let i = 0; i <= spells.length; i += spellsPerPage) {
            const spellChunk = spells.slice(i, i + spellsPerPage)
            console.log(spellChunk)
            return spellChunk
        }
    }
     */
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
    
    console.log(currentSpells) */

    return (
        <>
            <div className="spells-master">
                <div className="spells-container">
                    <h1 className="spells-header" /* onClick={writeSpellPages} */>
                        Spells Reference - 1992 Edition
                    </h1>
                    <SpellsBook spells={spellBooks} /* pageNumber={pageNumber} *//>
                </div>
            </div>
        </>
      )
}

export default SpellsContainer