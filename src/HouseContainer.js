import { useState, useEffect, useRef } from "react"
import HousePanel from "./HousePanel"
import HouseInfoMenu from "./HouseInfoMenu"

const HouseContainer = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    let menuRef = useRef(null)

    useEffect(() => {
      document.addEventListener("mousedown", (e) => {
        if(!menuRef.current.contains(e.target))
        setMenuOpen(false)
      });        
    }, []);

    function openMenu() {
      setMenuOpen(true)
    }   

  return (
    <>
        <div className="house-panel-master">
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
                onClick={openMenu}/>
            </div>        
        </div>
        {menuOpen && <HouseInfoMenu ref={menuRef}/>}
    </>
  )
}

export default HouseContainer