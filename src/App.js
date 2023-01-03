import './App.css';
import axios from 'axios';
import Navbar from './Navbar';
import Home from './Home';
import CharactersContainer from './CharactersContainer';
import HouseContainer from './HouseContainer';
import SpellsContainer from './SpellsContainer';
import { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom'

function App() {
  // Change theme colors based on page
  const [homeActive, setHomeActive] = useState(false);
  const [charactersActive, setCharactersActive] = useState(false);
  const [houseActive, setHouseActive] = useState(false);
  const [spellsActive, setSpellsActive] = useState(false);

  const location = useLocation()

  // Location listener for color change
  useEffect(() => {
    if(location.pathname === '/') {
      // console.log('PATH: /')
      setHomeActive(true)
      setCharactersActive(false)
      setHouseActive(false)
      setSpellsActive(false)
    } 
    else if(location.pathname === '/characterscontainer') {
      console.log('PATH: characters')
      setHomeActive(false)
      setCharactersActive(true)
      setHouseActive(false)
      setSpellsActive(false)
    }
    else if(location.pathname === '/housecontainer') {
      console.log('PATH: house')
      setHomeActive(false)
      setCharactersActive(false)
      setHouseActive(true)
      setSpellsActive(false)
    }
    else if(location.pathname === '/spellscontainer') {
      console.log('PATH: spells')
      setHomeActive(false)
      setCharactersActive(false)
      setHouseActive(false)
      setSpellsActive(true)
    }
  })
  
  // Fetch character data from API
  // URL's
  const characterUrl = 'https://hp-api.onrender.com/api/characters'

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    axios.get(characterUrl)
    .then(res => {
      setCharacters(res.data)
    })
  }, [])
  console.log(characters)

  let bioInfo = {
    name: characters.name,
    house: characters.house,
    patronus: characters.patronus
  }

  return (
    <>
      <Navbar navClass={homeActive ? 'header-home' :
                        charactersActive ? 'header-characters' :
                        houseActive ? 'header-house' :
                        spellsActive? 'header-spells' : null}/>
      <div className="container">

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/characterscontainer' element={<CharactersContainer characters={characters} />} />
          <Route path='/housecontainer' element={<HouseContainer />} />
          <Route path='/spellscontainer' element={<SpellsContainer />} />
        </Routes>

      </div>
    </>
  );
}

export default App;
