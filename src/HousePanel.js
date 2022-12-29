const HousePanel = () => {
  return (
    <div className="house-panel-master">
        <div className="house-panel-container">
            <div className="house-panel" id="gryffindor-panel">
                <img src={require("./images/house-gryffindor.png")} />
            </div>
            <div className="house-panel" id="hufflepuff-panel">
                <img src={require("./images/house-hufflepuff.png")} />
            </div>
            <div className="house-panel" id="ravenclaw-panel">
                <img src={require("./images/house-ravenclaw.png")} />
            </div>
            <div className="house-panel" id="slytherin-panel">
                <img src={require("./images/house-slytherin.png")} />
            </div>
        </div>
    </div>
  )
}

export default HousePanel