import { forwardRef } from "react"

const HouseInfoMenu = forwardRef(({ id, houseName, houseCrest, founder, animal, headOfHouse, traits }, ref) => {

  return (
    <div className="house-info-master" ref={ref}>
        <div 
        className="house-info-container-flex" id={id}>
            <div className="house-info-table">
                <div className="house-row house-name-row">
                    <div className="house-name">{houseName}</div>
                    <div className="house-crest">
                        <img src={houseCrest} alt="" />
                    </div>
                </div>                    
                <div className="house-row">
                    <div className="founder info-heading">Founder</div>
                    <div className="info-body">{founder}</div>
                </div>
                <div className="house-row">
                    <div className="animal info-heading">Animal</div>
                    <div className="info-body">{animal}</div>
                </div>
                <div className="house-row">
                    <div className="head-of-house info-heading">Head of House</div>
                    <div className="info-body">{headOfHouse}</div>
                </div>
                <div className="house-row">
                    <div className="traits info-heading">Traits</div>
                    <div className="info-body house-trait-list">
                        <ul>
                            {traits.map(trait => {
                                return <li>{trait}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
})

export default HouseInfoMenu