import { forwardRef } from "react"

const HouseInfoMenu = forwardRef(({ id, houseName, houseCrest, founder, animal, headOfHouse, traits }, ref) => {

  return (
    <div className="house-info-master" ref={ref}>
        <div 
        className="house-info-container-flex" id={id}>
            <table className="house-info-table">
                <tbody>
                    <tr>
                        <td className="house-name">{houseName}</td>
                        <td className="house-crest">
                            <img src={houseCrest} alt="" />
                        </td>
                    </tr>                    
                    <tr className="odd-row">
                        <td>Founder</td>
                        <td>{founder}</td>
                    </tr>
                    <tr className="even-row">
                        <td>Animal</td>
                        <td>{animal}</td>
                    </tr>
                    <tr className="odd-row">
                        <td className="head-of-house">Head of House</td>
                        <td>{headOfHouse}</td>
                    </tr>
                    <tr className="even-row">
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