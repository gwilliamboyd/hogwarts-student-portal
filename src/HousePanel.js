const HousePanel = ({ houseId, src, openMenu }) => {
  return (
    <div 
    className="house-panel" 
    id={houseId}    
    onClick={openMenu}>
        <img src={src} />
    </div>
  )
}

export default HousePanel