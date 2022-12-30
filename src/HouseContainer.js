import { useState, useEffect, useRef } from "react"
import HousePanel from "./HousePanel"
import HouseInfoMenu from "./HouseInfoMenu"

const HouseContainer = () => {
    const [menuOpen, setMenuOpen] = useState(false);

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
        setMenuOpen(false)
        // gryffindorSelected = false
        // hufflepuffSelected = false
        // ravenclawSelected = false
        // slytherinSelected = false
      });        
    }, []);

    function openMenu() {
      setHouseInfoId()
      setMenuOpen(true)
    }

    function setHouseInfoId(e) {
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
    }

  return (
    <>
      <div className="house-panel-master">
          <div className="house-panel-container">
            <HousePanel 
              houseId='gryffindor-panel'
              src={require("./images/house-gryffindor.png")}
              ref={gryffindorRef}
              onClick={openMenu}/>
            <HousePanel 
              houseId='hufflepuff-panel'
              src={require("./images/house-hufflepuff.png")}
              ref={hufflepuffRef}
              onClick={openMenu}/>
            <HousePanel 
              houseId='ravenclaw-panel'
              src={require("./images/house-ravenclaw.png")}
              ref={ravenclawRef}
              onClick={openMenu}/>
            <HousePanel 
              houseId='slytherin-panel'
              src={require("./images/house-slytherin.png")}
              ref={slytherinRef}
              onClick={openMenu}/>
          </div>        
      </div>
        {/* Gryffindor */}
        {menuOpen && <HouseInfoMenu 
        id={
          setHouseInfoId() === 'gryffindor' ? 'house-info-gryffindor':
          setHouseInfoId() === 'hufflepuff' ? 'house-info-hufflepuff':
          setHouseInfoId() === 'ravenclaw' ? 'house-info-ravenclaw':
          setHouseInfoId() === 'slytherin' ? 'house-info-slytherin':
          null
        } 
        ref={menuRef} />}
        
        
    </>
  )
}

export default HouseContainer