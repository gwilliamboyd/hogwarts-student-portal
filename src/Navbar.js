import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHatWizard, faWandSparkles } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <header className="header">
        <nav className="nav-master">
            <div className="nav-logo">
                <img 
                src={require("./images/hogwarts-logo.png")} 
                alt="Hogwarts Crest" />
                Hogwarts Student Portal
            </div>
            <div className="nav-links"> 
                <div className="nav-item">
                    <div className="nav-icon"><FontAwesomeIcon icon={faUser} /></div>
                    <div className="nav-name">Characters</div>
                </div>
                <div className="nav-item">
                    <div className="nav-icon"><FontAwesomeIcon icon={faHatWizard} /></div>
                    <div className="nav-name">Houses</div>
                </div>
                <div className="nav-item">
                    <div className="nav-icon"><FontAwesomeIcon icon={faWandSparkles} /></div>
                    <div className="nav-name">Spells</div>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar