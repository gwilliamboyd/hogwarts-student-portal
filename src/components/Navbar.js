import { useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHatWizard, faWandSparkles, faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom' 
import { motion } from 'framer-motion'

const Navbar = ({ navClass, mobileMenu, setMobileMenu, ref }) => {
    function mobileMenuBackground() {
        if(navClass === 'header-home') {
            return '#162D6A'
        } else if(navClass === 'header-characters') {
            return '#6A1616'
        } else if(navClass === 'header-house') {
            return '#2A623D'
        } else if(navClass === 'header-spells') {
            return '#C29908'
        }
    }

    // Closes mobile menu when clicked away from
    let mobileMenuRef = useRef(null)  
    useEffect(() => {
      document.addEventListener('mousedown', (e) => {
        if(mobileMenuRef.current == null) {
            return
        }
        if(!mobileMenuRef.current.contains(e.target)) {
            setMobileMenu(false)
            // handleClick()
        }
      })
    }, [setMobileMenu])

    const handleClick = () => {
        if(mobileMenu) {
            setMobileMenu(false)
            // console.log('click handled')
        } else {
            setMobileMenu(true)
        }
    }
    
    

  return (
    <header className={navClass}>
        <motion.nav 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{duration: 1}} 
        className="nav-master">
            <div className="nav-logo">
                <Link to='/' className='nav-route' onClick={() => setMobileMenu(false)}>
                    <img 
                    src={require("../images/hogwarts-logo.png")} 
                    alt="Hogwarts Crest" />
                    Hogwarts Student Portal
                </Link>
            </div>
            <div className="mobile-menu">
                <FontAwesomeIcon icon={faBars} className='mobile-menu-icon' onClick={handleClick} />                
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
        </motion.nav>
        {mobileMenu && 
        <motion.div
        initial={{ height: 0, width: 0 }}
        animate={{ height: "fit-content", width: "70%" }}
        transition={{duration: 0.4}}
        className={["mobile-menu-list"]}
        style={{backgroundColor: mobileMenuBackground()}} 
        ref={mobileMenuRef}>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{delay: 0.5, duration: 1.1}}>
                    <Link to='/characterscontainer' className='nav-route' onClick={handleClick}>
                        <div className="nav-icon"><FontAwesomeIcon icon={faUser} /></div>
                        <div className="nav-name">Characters</div>
                    </Link>
                    <Link to='/housecontainer' className='nav-route' onClick={handleClick}>
                        <div className="nav-icon"><FontAwesomeIcon icon={faHatWizard} /></div>
                        <div className="nav-name">Houses</div>
                    </Link>
                    <Link to='/spellscontainer' className='nav-route' onClick={handleClick}>
                        <div className="nav-icon"><FontAwesomeIcon icon={faWandSparkles} /></div>
                        <div className="nav-name">Spells</div>
                    </Link>
            </motion.div>
        </motion.div>}
    </header>
  )
}

export default Navbar