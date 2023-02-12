import { useState, useEffect, useLayoutEffect } from 'react'
import axios from 'axios'
import SpellsBook from './SpellsBook'
import SpellsBookMobile from './SpellsBookMobile'
import RenderedSpells from './RenderedSpells'

const SpellsContainer = () => {
	const [mobileActive, setMobileActive] = useState(false)
	const [desktopActive, setDesktopActive] = useState(true)
	const [screenMode, setScreenMode] = useState(window.innerWidth)

	let screenWidth = window.innerWidth

	/*     function getScreenWidth() {
        setMobileActive(window.innerWidth < 600 ? true : false)
        setDesktopActive(window.innerWidth > 600 ? true : false)
        console.log('resize')
        if(mobileActive) {
            console.log('mobile activated')
        } else if(desktopActive){
            console.log('desktop activated')
        }
    } */
	useEffect(() => {
		const mobileComponent = window.matchMedia('(max-width: 600px)')
		setMobileActive(mobileComponent.matches)

		function updateMobileActive(e) {}
		// window.addEventListener('resize', getScreenWidth())
		console.log('window resize')
	}, [])

	const spellsPerPage = 4

	// State initialization
	const [loading, setLoading] = useState(false)
	const [spells, setSpells] = useState([])
	const [page, setPage] = useState(0)

	// Gets spells from API
	useEffect(() => {
		const getSpells = async () => {
			setLoading(true)
			const res = await axios.get('https://hp-api.onrender.com/api/spells')
			setSpells(res.data)
			setLoading(false)
		}
		getSpells()
	}, [])

	// Split up spells array into chunks of 4
	function paginate() {
		const result = spells.reduce((spellPage, item, index) => {
			const chunkIndex = Math.floor(index / spellsPerPage)
			if (!spellPage[chunkIndex]) {
				spellPage[chunkIndex] = [] // start a new chunk
			}
			spellPage[chunkIndex].push(item)
			return spellPage
		}, [])
		return result
	}

	const spellBooks = paginate()

	const mobileContent = (
		<SpellsBookMobile
			page={page}
			setPage={setPage}
			spells={spells}
		/>
	)
	const desktopContent = (
		<SpellsBook
			page={page}
			setPage={setPage}
			spellBooks={spellBooks}
		/>
	)

	/*function RenderedSpells() {
         if(mobileActive = true) {
        return (
            <SpellsBookMobile page={page} 
                setPage={setPage} 
                spells={spells}/>
        )
        } else if(mobileActive = false) {
            return (
                <SpellsBook page={page} 
                    setPage={setPage} 
                    spellBooks={spellBooks} />
            )
        } 
    }*/

	return (
		<>
			<div className='spells-master'>
				<div className='spells-container'>
					<h1 className='spells-header'>Spells Reference - 1992 Edition</h1>
					<p className='spells-instruction'>
						<i>
							Use arrow keys to turn to page (preferrably to page three hundred
							and ninety four...)
						</i>
					</p>
					<RenderedSpells
						mobileContent={mobileContent}
						desktopContent={desktopContent}
					/>
				</div>
			</div>
		</>
	)
}

export default SpellsContainer
