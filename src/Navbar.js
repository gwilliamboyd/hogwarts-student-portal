import { useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHatWizard, faWandSparkles, faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom' 

const Navbar = ({ navClass, mobileMenu, setMobileMenu, ref }) => {

    function toggleMobileMenu() {
        setMobileMenu(!mobileMenu)
    }

    // Closes mobile menu when clicked away from
    let mobileMenuRef = useRef(null)  
    useEffect(() => {
      document.addEventListener('mousedown', (e) => {
        if(!mobileMenuRef.current.contains(e.target)) {
            console.log('click')
          setMobileMenu(false)
        }
      })
    }, [])
    

  return (
    <header className={navClass}>
        <nav className="nav-master">
            <div className="nav-logo">
                <Link to='/' className='nav-route'>
                    <img 
                    src={require("./images/hogwarts-logo.png")} 
                    alt="Hogwarts Crest" />
                    Hogwarts Student Portal
                </Link>
            </div>
            <div className="mobile-menu">
                <FontAwesomeIcon icon={faBars} className='mobile-menu-icon' onClick={toggleMobileMenu} />                
            </div>
            
            <div className="nav-links"> 
                <div className="nav-item">
                    <Link to='/characterscontainer' className='nav-route'>
                        <div className="nav-icon"><FontAwesomeIcon icon={faUser} /></div>
                        <div className="nav-name">Characters</div>
                    </Link>
                </div>
                <div className="nav-item">
                    <Link to='/housecontainer' className='nav-route'>
                        <div className="nav-icon"><FontAwesomeIcon icon={faHatWizard} /></div>
                        <div className="nav-name">Houses</div>
                    </Link>
                </div>
                <div className="nav-item">
                    <Link to='/spellscontainer' className='nav-route'>
                        <div className="nav-icon"><FontAwesomeIcon icon={faWandSparkles} /></div>
                        <div className="nav-name">Spells</div>
                    </Link>
                </div>                
            </div>
        </nav>
        {mobileMenu && <div className="mobile-menu-list" ref={mobileMenuRef}>
                    <Link to='/characterscontainer' className='nav-route'>
                        <div className="nav-icon"><FontAwesomeIcon icon={faUser} /></div>
                        <div className="nav-name">Characters</div>
                    </Link>
                    <Link to='/housecontainer' className='nav-route'>
                        <div className="nav-icon"><FontAwesomeIcon icon={faHatWizard} /></div>
                        <div className="nav-name">Houses</div>
                    </Link>
                    <Link to='/spellscontainer' className='nav-route'>
                        <div className="nav-icon"><FontAwesomeIcon icon={faWandSparkles} /></div>
                        <div className="nav-name">Spells</div>
                    </Link>
                </div>}
    </header>
  )
}

export default Navbar