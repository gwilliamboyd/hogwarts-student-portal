import { forwardRef } from "react"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const HouseInfoMenu = forwardRef(({ id, houseName, houseCrest, founder, animal, headOfHouse, traits }, ref, closeMenus) => {

  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{duration: 0.3}}
    className="house-info-master" ref={ref}>
        <div 
        className="house-info-container-flex" id={id}>            
            <div className="x-icon">
                <FontAwesomeIcon icon={faXmark} onClick={closeMenus} />
            </div>
            <div className="house-info-table">
                <div className="house-row house-name-row">
                    <div className="house-name">{houseName}</div>
                    <div className="house-crest">
                        <img src={houseCrest} alt="" />
                    </div>
                </div>                    
                <div className="founder-row house-row">
                    <div className="founder info-heading">Founder</div>
                    <div className="info-body">{founder}</div>
                </div>
                <div className="animal-row house-row">
                    <div className="animal info-heading">Animal</div>
                    <div className="info-body">{animal}</div>
                </div>
                <div className="head-of-house-row house-row">
                    <div className="head-of-house info-heading">Head of House</div>
                    <div className="info-body">{headOfHouse}</div>
                </div>
                <div className="traits-row house-row">
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
    </motion.div>
  )
})

export default HouseInfoMenu