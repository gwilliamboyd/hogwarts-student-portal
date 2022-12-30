const HousePanel = ({ houseId, src, onClick }) => {
  return (
    <div 
    className="house-panel" 
    id={houseId}    
    onClick={onClick}>
        <img src={src} />
    </div>
  )
}

export default HousePanel