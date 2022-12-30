import { useState, useEffect, useRef } from "react"
import HousePanel from "./HousePanel"
import HouseInfoMenu from "./HouseInfoMenu"

const HouseContainer = () => {
    // const [menuOpen, setMenuOpen] = useState(false);
    const [gryffindorOpen, setGryffindorOpen] = useState(false)
    const [hufflepuffOpen, setHufflepuffOpen] = useState(false)
    const [ravenclawOpen, setRavenclawOpen] = useState(false)
    const [slytherinOpen, setSlytherinOpen] = useState(false)

    let menuRef = useRef(null)
    let gryffindorRef = useRef(null)
    let hufflepuffRef = useRef(null)
    let ravenclawRef = useRef(null)
    let slytherinRef = useRef(null)

    // let houseInfoId;

    // let gryffindorSelected = false
    // let hufflepuffSelected = false
    // let ravenclawSelected = false
    // let slytherinSelected = false

    // let houseSelected = ''

    useEffect(() => {
      document.addEventListener("mousedown", (e) => {
        if(!menuRef.current.contains(e.target))
        // setMenuOpen(false)
        setGryffindorOpen(false)
        setHufflepuffOpen(false)
        setRavenclawOpen(false)
        setSlytherinOpen(false)
        // gryffindorSelected = false
        // hufflepuffSelected = false
        // ravenclawSelected = false
        // slytherinSelected = false
      });        
    }, []);

    /* function openMenu() {
      // setHouseInfoId()
      setMenuOpen(true)
    } */

    function openGryffindor() {
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
    }

    let component
    function determineHouse() {
      if (gryffindorRef) {
        console.log('GRYFFINDOR')
        component = <HouseInfoMenu id='house-info-gryffindor' ref={menuRef} />
        } else if (hufflepuffRef) {
        component = <HouseInfoMenu id='house-info-hufflepuff' ref={menuRef} />
        console.log('HUFFLEPUFF')
        } 
      }

    /* function setHouseInfoId(e) {
      // Gryffindor
      if(gryffindorRef.current.contains(e.target)) {
        return 'gryffindor'
      }
      // Hufflepuff
      else if(hufflepuffRef.current.contains(e.target)) {
        return 'hufflepuff'
      }
      // Ravenclaw
      else if(ravenclawRef.current.contains(e.target)) {
        return 'ravenclaw'
      }
      // Slytherin
      else if(slytherinRef.current.contains(e.target)) {
        return 'slytherin'
      } 
      else {
        return null
      }
    } */

  return (
    <>
      <div className="house-panel-master">
          <div className="house-panel-container">
            <HousePanel 
              houseId='gryffindor-panel'
              src={require("./images/house-gryffindor.png")}
              ref={gryffindorRef}
              onClick={openGryffindor} />
            <HousePanel 
              houseId='hufflepuff-panel'
              src={require("./images/house-hufflepuff.png")}
              ref={hufflepuffRef}
              onClick={openHufflepuff} />
            <HousePanel 
              houseId='ravenclaw-panel'
              src={require("./images/house-ravenclaw.png")}
              ref={ravenclawRef}
              onClick={openRavenclaw}/>
            <HousePanel 
              houseId='slytherin-panel'
              src={require("./images/house-slytherin.png")}
              ref={slytherinRef}
              onClick={openSlytherin}/>
          </div>        
      </div>
        {/* Gryffindor */}
        {gryffindorOpen && <HouseInfoMenu id='house-info-gryffindor' ref={menuRef} />}
        {hufflepuffOpen && <HouseInfoMenu id='house-info-hufflepuff' ref={menuRef} />}
        {ravenclawOpen && <HouseInfoMenu id='house-info-ravenclaw' ref={menuRef} />}
        {slytherinOpen && <HouseInfoMenu id='house-info-slytherin' ref={menuRef} />}
        
        
    </>
  )
}

export default HouseContainer

/* 
POSSIBLE SOLUTION FOR HOUSE INFO MENU

On each house panel:
onClick{determineHouse}

Define this in the HouseContainer component:
function determineHouse() {
  switch (e) {
    case (gryffindorRef.current.contains(e.target)):
      component = <HouseInfoMenu id='house-info-gryffindor' />
      break
    case (hufflepuffRef.current.contains(e.target)):
      component = <HouseInfoMenu id='house-info-hufflepuff' />
      break
    case (ravenclawRef.current.contains(e.target)):
      component = <HouseInfoMenu id='house-info-ravenclaw' />
      break
    case (slytherinRef.current.contains(e.target)):
      component = <HouseInfoMenu id='house-info-slytherin' />
      break
  }
}

*/