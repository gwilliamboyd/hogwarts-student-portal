import { useEffect, useState } from 'react'
import SpellsEntry from './SpellsEntry'
import useKeypress from 'react-use-keypress'
import { useSwipeable } from 'react-swipeable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faChevronLeft,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

// Creates first 2 pages
function writeSpellPages(spellBooks, page) {
	let currentSpells = [spellBooks[page], spellBooks[page + 1]]
	return currentSpells
}

const SpellsBook = ({ page, setPage, spellBooks }) => {
	// State initialization
	const [currentSpells, setCurrentSpells] = useState(
		writeSpellPages(spellBooks, page)
	)

	// Runs paginate on load
	useEffect(() => {
		setCurrentSpells(writeSpellPages(spellBooks, page))
	}, [spellBooks, page])

	// Flips to next 2 pages
	function previousPage() {
		// setCurrentSpells(writeSpellPages(spellBooks, (page + 2)))
		if (page < 2) {
			return null
		} else {
			setPage(page - 2)
		}
		console.log('prev page')
		// writeSpellPages(spellBooks, page)
	}
	// Flips to next 2 pages
	function nextPage() {
		// setCurrentSpells(writeSpellPages(spellBooks, (page + 2)))
		if (page > 16) {
			return null
		}
		setPage(page + 2)
		// writeSpellPages(spellBooks, page)
		console.log('next page')
	}

	useKeypress(['ArrowLeft', 'ArrowRight'], e => {
		if (e.key === 'ArrowLeft') {
			previousPage()
		} else {
			nextPage()
		}
	})

	const leftPageSwipe = useSwipeable({
		preventScrollOnSwipe: true,
		onSwipedLeft: () => nextPage(),
		onSwipedRight: () => previousPage(),
	})
	const rightPageSwipe = useSwipeable({
		preventScrollOnSwipe: true,
		onSwipedLeft: () => nextPage(),
		onSwipedRight: () => previousPage(),
	})

	return (
		<>
			<div className='spells-book-container'>
				<span
					className='spells-book-left-arrow'
					onClick={previousPage}>
					<FontAwesomeIcon icon={faChevronLeft} />
				</span>
				<div className='spells-book'>
					<div
						className='spells-page-one'
						{...leftPageSwipe}>
						<ul>
							{currentSpells?.[0]?.map(s => {
								return (
									<SpellsEntry
										id={s.id}
										name={s.name}
										desc={s.description}
									/>
								)
							})}
						</ul>
					</div>
					<div
						className='spells-page-two'
						{...rightPageSwipe}>
						<ul>
							{currentSpells?.[1]?.map(s => {
								return (
									<SpellsEntry
										id={s.id}
										name={s.name}
										desc={s.description}
									/>
								)
							})}
						</ul>
					</div>
				</div>
				<span
					className='spells-book-right-arrow'
					onClick={nextPage}>
					<FontAwesomeIcon icon={faChevronRight} />
				</span>
			</div>
		</>
	)
}

export default SpellsBook
