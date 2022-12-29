const Navbar = () => {
  return (
    <header className="header">
        <nav className="nav-master">
            <div className="nav-logo">
                Hogwarts Student Portal
            </div>
            <div className="nav-links">
                <div className="nav-item">
                    <div className="nav-icon">C</div>
                    <div className="nav-name">Characters</div>
                </div>
                <div className="nav-item">
                    <div className="nav-icon">H</div>
                    <div className="nav-name">Houses</div>
                </div>
                <div className="nav-item">
                    <div className="nav-icon">S</div>
                    <div className="nav-name">Spells</div>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar