const CharacterBio = ({ image, name, house, patronus }) => {
  return (
    <li className="characters-bio">
        <table className="characters-table">
            <tbody>
                <tr className="characters-table-row">
                    <td className="characters-table-cell characters-image">
                        <img src={image} />
                    </td>
                    <td className="characters-table-cell characters-name">
                        <span className="characters-name-heading">
                            Name:
                        </span>
                        <br />
                        {name}
                    </td>
                    <td className="characters-table-cell characters-house">
                        <span className="characters-house-heading">
                            House:    
                        </span>
                        <br />   
                        {house}
                    </td>
                    <td className="characters-table-cell characters-patronus">
                        <span className="characters-patronus-heading">
                            Patronus:    
                        </span>
                        <br />   
                        {patronus}
                    </td>
                </tr>
            </tbody>
        </table>
        {/* <div className="characters-image"><img src={c.image} /></div>
        <div className="characters-name">{c.name}</div>
        <div className="characters-house">{c.house}</div>
        <div className="characters-patronus">{c.patronus}</div> */}
    </li>
  )
}

export default CharacterBio