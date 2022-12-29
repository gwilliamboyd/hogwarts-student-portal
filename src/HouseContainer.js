import { useState } from "react"
import HousePanel from "./HousePanel"
import HouseInfoMenu from "./HouseInfoMenu"

const HouseContainer = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    function toggleMenu() {
        setMenuOpen(!menuOpen)
        console.log(menuOpen)
    }

  return (
    <>
        <div className="house-panel-master" onClick={toggleMenu}>
            <div className="house-panel-container">
                <HousePanel 
                houseId='gryffindor-panel'
                src={require("./images/house-gryffindor.png")}/>
                <HousePanel 
                houseId='hufflepuff-panel'
                src={require("./images/house-hufflepuff.png")}/>
                <HousePanel 
                houseId='ravenclaw-panel'
                src={require("./images/house-ravenclaw.png")}/>
                <HousePanel 
                houseId='slytherin-panel'
                src={require("./images/house-slytherin.png")}
                onClick={toggleMenu}/>
            </div>        
        </div>
        {menuOpen && <HouseInfoMenu />}
    </>
  )
}

export default HouseContainer