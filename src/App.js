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
      setHomeActive(true)
      setCharactersActive(false)
      setHouseActive(false)
      setSpellsActive(false)
    } 
    else if(location.pathname === '/characterscontainer') {
      setHomeActive(false)
      setCharactersActive(true)
      setHouseActive(false)
      setSpellsActive(false)
    }
    else if(location.pathname === '/housecontainer') {
      setHomeActive(false)
      setCharactersActive(false)
      setHouseActive(true)
      setSpellsActive(false)
    }
    else if(location.pathname === '/spellscontainer') {
      setHomeActive(false)
      setCharactersActive(false)
      setHouseActive(false)
      setSpellsActive(true)
    }
  })
  
  return (
    <>
      <Navbar navClass={homeActive ? 'header-home' :
                        charactersActive ? 'header-characters' :
                        houseActive ? 'header-house' :
                        spellsActive? 'header-spells' : null}/>
      <div className="container">

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/characterscontainer' element={
          <CharactersContainer />
          } />
          <Route path='/housecontainer' element={<HouseContainer />} />
          <Route path='/spellscontainer' element={<SpellsContainer />} />
        </Routes>

      </div>
    </>
  );
}

export default App;
