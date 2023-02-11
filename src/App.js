import './App.css'
import axios from 'axios'
import Navbar from './components/Navbar'
import Home from './components/home/Home'
import CharactersContainer from './components/characters/CharactersContainer'
import HouseContainer from './components/houses/HouseContainer'
import SpellsContainer from './components/spells/SpellsContainer'
import { useState, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

function App() {
	// Change theme colors based on page
	const [homeActive, setHomeActive] = useState(false)
	const [charactersActive, setCharactersActive] = useState(false)
	const [houseActive, setHouseActive] = useState(false)
	const [spellsActive, setSpellsActive] = useState(false)
	const [mobileMenu, setMobileMenu] = useState(false)

	const location = useLocation()

	// Location listener for color change
	useEffect(() => {
		if (location.pathname === '/hogwarts-student-portal') {
			setHomeActive(true)
			setCharactersActive(false)
			setHouseActive(false)
			setSpellsActive(false)
		} else if (location.pathname === '/characterscontainer') {
			setHomeActive(false)
			setCharactersActive(true)
			setHouseActive(false)
			setSpellsActive(false)
		} else if (location.pathname === '/housecontainer') {
			setHomeActive(false)
			setCharactersActive(false)
			setHouseActive(true)
			setSpellsActive(false)
		} else if (location.pathname === '/spellscontainer') {
			setHomeActive(false)
			setCharactersActive(false)
			setHouseActive(false)
			setSpellsActive(true)
		}
	})

	return (
		<>
			<Navbar
				navClass={
					homeActive
						? 'header-home'
						: charactersActive
						? 'header-characters'
						: houseActive
						? 'header-house'
						: spellsActive
						? 'header-spells'
						: null
				}
				mobileMenu={mobileMenu}
				setMobileMenu={setMobileMenu}
			/>
			<div className='container'>
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/characterscontainer'
						element={<CharactersContainer />}
					/>
					<Route
						path='/housecontainer'
						element={<HouseContainer />}
					/>
					<Route
						path='/spellscontainer'
						element={<SpellsContainer />}
					/>
				</Routes>
			</div>
		</>
	)
}

export default App
