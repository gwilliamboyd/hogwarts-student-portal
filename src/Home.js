const Home = () => {
  return (
    <>
        <div className="home-master">
            <div className="home-container">
                <div className="page-container" 
                    id="characters-page-container">
                    <img src={require('./images/harry-homepage.webp')} />
                    <div className="page-container-text">
                        <div className="page-container-text-flex">
                            <p className="page-container-title">
                                Character Search
                            </p>  
                            <p className="page-container-paragraph">
                                Bio info on over <b>400</b> characters from the wizarding world!<br></br> <i>(no spells needed!)</i>
                            </p>
                        </div>  
                    </div>  
                </div>
                <div className="page-container" 
                id="houses-page-container">
                    <img src={require('./images/harry-homepage.webp')} />
                </div>
                <div className="page-container" 
                id="spells-page-container">
                    <img src={require('./images/harry-homepage.webp')} />
                </div>
            </div>
        </div>
    </>
  )
}

export default Home