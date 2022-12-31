import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import CharactersContainer from './CharactersContainer';
import HouseContainer from './HouseContainer';
import SpellsContainer from './SpellsContainer';
import { Route, Routes } from 'react-router-dom'

function App() {
  console.log(window.location.pathname)
  return (
    <>
      <Navbar />
      <div className="container">

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/characterscontainer' element={<CharactersContainer />} />
          <Route path='/housecontainer' element={<HouseContainer />} />
          <Route path='/spellscontainer' element={<SpellsContainer />} />
        </Routes>

      </div>
    </>
  );
}

export default App;
