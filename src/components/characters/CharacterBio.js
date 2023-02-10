const CharacterBio = ({ image, name, house, patronus, charId }) => {    

  return (
    <li className="characters-bio" key={charId}>
        <div className="characters-table">
            <div>
                <div className="characters-table-row">
                    <div className="characters-table-cell characters-image">
                        <img src={image} />
                    </div>
                    <div className="characters-text">
                        <div className="characters-table-cell characters-name">
                            <span className="characters-name-heading">
                                Name:
                            </span>
                            {name}
                        </div>
                        <div className="characters-table-cell characters-house">
                            <span className="characters-house-heading">
                                House:    
                            </span>  
                            {house}
                        </div>
                        <div className="characters-table-cell characters-patronus">
                            <span className="characters-patronus-heading">
                                Patronus:    
                            </span>  
                            {patronus}
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>        
    </li>
  )
}

export default CharacterBio