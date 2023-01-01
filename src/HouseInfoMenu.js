import { forwardRef } from "react"

const HouseInfoMenu = forwardRef(({ id, houseName, houseCrest, founder, animal, headOfHouse, traits }, ref) => {

  return (
    <div className="house-info-master" ref={ref}>
        <div 
        className="house-info-container-flex" id={id}>
            <table className="house-info-table">
                <tbody>
                    <tr>
                        <th>{houseName}</th>
                        <td>
                            <img src={houseCrest} alt="" />
                        </td>
                    </tr>
                    <tr>
                        <td>Founder</td>
                        <td>{founder}</td>
                    </tr>
                    <tr>
                        <td>Animal</td>
                        <td>{animal}</td>
                    </tr>
                    <tr>
                        <td>Head of House</td>
                        <td>{headOfHouse}</td>
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