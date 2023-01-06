import PageContainer from './PageContainer'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
        <div className="home-master">
            <div className="home-container">
                
                <PageContainer
                to={'/characterscontainer'} 
                imageSrc={require('./images/characters-homepage.png')}
                title='Character Search'
                paragraph={<>
                Bio info on over <b>400</b> characters from the wizarding world!<br />
                <i>(no spells needed!)</i>
                </>}/>

                <PageContainer
                to={'/housecontainer'}  
                imageSrc={require('./images/houses-homepage.png')}
                title='House Info'
                paragraph={<>Find out which characters you'll be rooming with this year!<br />
                <i>(Please not Slytherin...)</i>
                </>}/>

                <PageContainer
                to={'/spellscontainer'}  
                imageSrc={require('./images/spells-homepage.png')}
                title='Spell Index'
                paragraph={<>
                    Comprehensive spell reference for all subjects!<br />
                    <i>(Just don’t let Professor McGonagall catch you using this during class...)</i>
                </>}/>
                                
            </div>
        </div>
    </>
  )
}

export default Home