import { forwardRef } from "react"

const HouseInfoMenu = forwardRef(({ houseInfoId }, ref) => {

  return (
    <div className="house-info-master" ref={ref}>
        <div 
        className="house-info-container-flex" id={houseInfoId}>
            <table className="house-info-table">
                <tbody>
                    <tr>
                        <td>Slytherin</td>
                        <td><img src={require("./images/house-slytherin.png")} alt="" /></td>
                    </tr>
                    <tr>
                        <td>Founder</td>
                        <td>Salazar Slytherin</td>
                    </tr>
                    <tr>
                        <td>Animal</td>
                        <td>Serpent</td>
                    </tr>
                    <tr>
                        <td>Head of House</td>
                        <td>Severus Snape</td>
                    </tr>
                    <tr>
                        <td>Traits</td>
                        <td>
                            <ul className="house-trait-list">
                                <li>Resourcefulness</li>
                                <li>Determination</li>
                                <li>Pride</li>
                                <li>Cunning</li>
                                <li>Ambition</li>
                                <li>Self-preservation</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
})

export default HouseInfoMenu