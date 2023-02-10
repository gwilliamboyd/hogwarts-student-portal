import { useState, useEffect, useRef } from "react"
import HousePanel from "./HousePanel"
import HouseInfoMenu from "./HouseInfoMenu"

const HouseContainer = () => {
    // const [menuOpen, setMenuOpen] = useState(false);
    const [gryffindorOpen, setGryffindorOpen] = useState(false)
    const [hufflepuffOpen, setHufflepuffOpen] = useState(false)
    const [ravenclawOpen, setRavenclawOpen] = useState(false)
    const [slytherinOpen, setSlytherinOpen] = useState(false)

    // REFS
    let menuRef = useRef(null)
    let gryffindorRef = useRef(null)
    let hufflepuffRef = useRef(null)
    let ravenclawRef = useRef(null)
    let slytherinRef = useRef(null)

    // Close menus when click outside
    function closeMenus() {
          document.addEventListener("mousedown", (e) => {
            if(menuRef.current == null) {
              return
            }
            if(!menuRef.current.contains(e.target)) {
            // setGryffindorOpen(false)
            // setHufflepuffOpen(false)
            // setRavenclawOpen(false)
            // setSlytherinOpen(false)
            setMenusClosed()
            console.log('x icon clicked')
          } /* else if(menuRef.current.contains(e.target)) {
            return
          } */
        }
      )    
    }
    function setMenusClosed() {
      console.log('the x icon was clicked')
      setGryffindorOpen(false)
      setHufflepuffOpen(false)
      setRavenclawOpen(false)
      setSlytherinOpen(false)
    }

    useEffect(() => {
      /* document.addEventListener("mousedown", (e) => {
        if(!menuRef.current.contains(e.target))
        setGryffindorOpen(false)
        setHufflepuffOpen(false)
        setRavenclawOpen(false)
        setSlytherinOpen(false)
      });       */ 
      closeMenus() 
    }, []);

    // OPEN HOUSE MENUS - **probably redundant, can set state in onClick prop
/*     function openGryffindor() {
      setGryffindorOpen(true)
    }
    function openHufflepuff() {
      setHufflepuffOpen(true)
    }
    function openRavenclaw() {
      setRavenclawOpen(true)
    }
    function openSlytherin() {
      setSlytherinOpen(true)
    } */

  return (
    <>
      <div className="house-panel-master">
          <div className="house-panel-container">
            {/* Gryffindor Panel */}
            <HousePanel 
              houseId='gryffindor-panel'
              src={require("./images/house-gryffindor.png")}
              ref={gryffindorRef}
              onClick={() => setGryffindorOpen(true)} />
            {/* Hufflepuff Panel */}
            <HousePanel 
              houseId='hufflepuff-panel'
              src={require("./images/house-hufflepuff.png")}
              ref={hufflepuffRef}
              onClick={() => setHufflepuffOpen(true)} />
            {/* Ravenclaw Panel */}
            <HousePanel 
              houseId='ravenclaw-panel'
              src={require("./images/house-ravenclaw.png")}
              ref={ravenclawRef}
              onClick={() => setRavenclawOpen(true)}/>
            {/* Slytherin Panel */}
            <HousePanel 
              houseId='slytherin-panel'
              src={require("./images/house-slytherin.png")}
              ref={slytherinRef}
              onClick={() => setSlytherinOpen(true)}/>
          </div>        
      </div>
      {/* HOUSE INFO MENUS */}

        {/* Gryffindor Info Menu */}
        {gryffindorOpen && <HouseInfoMenu 
        id='house-info-gryffindor' 
        houseName='Gryffindor' 
        houseCrest={require("./images/house-gryffindor.png")}
        founder='Godric Gryffindor' 
        animal='Lion'
        headOfHouse = 'Minerva McGonagall'
        traits={['Courage',
                  'Bravery',
                  'Determination',
                  'Darking',
                  'Nerve',
                  'Chivalry']} 
        ref={menuRef}
        closeMenus={setMenusClosed} />}

        {/* Hufflepuff Info Menu */}
        {hufflepuffOpen && <HouseInfoMenu 
        id='house-info-hufflepuff' 
        houseName='Hufflepuff' 
        houseCrest={require("./images/house-hufflepuff.png")} 
        founder='Helga Hufflepuff' 
        animal='Badger'
        headOfHouse = 'Pomona Sprout'
        traits={['Hard-working',
                  'Patience',
                  'Fairness',
                  'Just',
                  'Loyalty',
                  'Modesty']} 
        ref={menuRef}
        closeMenus={setMenusClosed} />}
        
        {/* Ravenclaw Info Menu */}
        {ravenclawOpen && <HouseInfoMenu 
        id='house-info-ravenclaw' 
        houseName='Ravenclaw' 
        houseCrest={require("./images/house-ravenclaw.png")} 
        founder='Rowena Ravenclaw' 
        animal='Eagle'
        headOfHouse = 'Filius Flitwick'
        traits={['Wit',
                  'Learning',
                  'Wisdom',
                  'Acceptance',
                  'Intelligence',
                  'Creativity']} 
        ref={menuRef}
        closeMenus={setMenusClosed} />}
        
        {/* Slytherin Info Menu */}
        {slytherinOpen && <HouseInfoMenu 
        id='house-info-slytherin' 
        houseName='Slytherin' 
        houseCrest={require("./images/house-slytherin.png")} 
        founder='Salazar Slytherin' 
        animal='Snake'
        headOfHouse = 'Horace Slughorn'
        traits={['Resourcefulness',
                  'Determination',
                  'Pride',
                  'Cunning',
                  'Ambition',
                  'Self-preservation']} 
        ref={menuRef}
        closeMenus={setMenusClosed} />} 
    </>
  )
}

export default HouseContainer