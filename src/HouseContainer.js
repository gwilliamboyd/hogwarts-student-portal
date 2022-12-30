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

    let houseInfoId;

    // let gryffindorSelected = false
    // let hufflepuffSelected = false
    // let ravenclawSelected = false
    // let slytherinSelected = false

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

    function openMenu(e) {
      // Gryffindor
      if(gryffindorRef.current.contains(e.target)) {
        // gryffindorSelected = true
        houseInfoId = 'house-info-gryffindor'
        console.log('gryffindorSelected')
      }
      // Hufflepuff
      else if(hufflepuffRef.current.contains(e.target)) {
        // hufflepuffSelected = true
        houseInfoId = 'house-info-hufflepuff'
        console.log('hufflepuffSelected')
      }
      // Ravenclaw
      else if(ravenclawRef.current.contains(e.target)) {
        // ravenclawSelected = true
        houseInfoId = 'house-info-ravenclaw'
        console.log('ravenclawSelected')
      }
      // Slytherin
      else if(slytherinRef.current.contains(e.target)) {
        // slytherinSelected = true
        houseInfoId = 'house-info-slytherin'
        console.log('slytherinSelected')
      } else {
        console.log('NOTHING')
      }

      setMenuOpen(true)
      console.log(houseInfoId)
      return houseInfoId
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
        {menuOpen && <HouseInfoMenu id={houseInfoId} ref={menuRef}/>}
        {/* {(hufflepuffSelected && menuOpen) && <HouseInfoMenu id='house-info-hufflepuff' ref={menuRef}/>}
        {(ravenclawSelected && menuOpen) && <HouseInfoMenu id='house-info-ravenclaw' ref={menuRef}/>}
        {(slytherinSelected && menuOpen) && <HouseInfoMenu id='house-info-slytherin' ref={menuRef}/>} */}
    </>
  )
}

export default HouseContainer