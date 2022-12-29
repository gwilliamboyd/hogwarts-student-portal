const HousePanel = ({ houseId, src }) => {
  return (
    <div className="house-panel" id={houseId}>
        <img src={src} />
    </div>
  )
}

export default HousePanel