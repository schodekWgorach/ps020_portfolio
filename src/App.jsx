import React from 'react'; // Import React w przypadku starszych wersji
import faceImage from "../src/assets/image/face.jpg"; // import faceImage


function App() {
  return (

    <div className="App">
      
        <header className="navbar__container">
          <a href="#home" className="navbar__logo"> Szymon
            <span> Schodnicki</span>
          </a>

          <div className="navbar__container-list">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#education">llln</a></li>  
              <li><a href="#technologies">Technologies</a></li>  
              <li><a href="#contact">Contact</a></li>
            </ul>

         
          </div>
        </header>
      
      {/* home */}
      <section className="home" id='home'>
        <div className="home__content">
        <h1 className="home__content-h1">Hi, it's<span></span></h1>
        <h3 className="home__content-animation">i'm a</h3>
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Maiores doloremque eaque aspernatur incidunt saepe 
           temporibus ex reprehenderit similique est ipsa repudiandae,
            eligendi mollitia? Atque neque sunt magni commodi quaerat odio?</p>
        </div>
        <div className="content__socialicon">
          <a href="https://www.linkedin.com/in/szymon-schodnicki-7798b6256/" id="likedin">1</a>
          <a href="mail" id="gmail">2</a>
          <a href="https://github.com/schodekWgorach?tab=overview&from=2025-01-01&to=2025-01-29" id="github">3</a>

          <div className="home__button">
            <a href="#github" className="button">github</a>
            <a href="#contakt" className="button">Kontakt</a>
          </div>
 


          <div className="home__image">
          <img src={faceImage} alt="zdięcie profilowe" />
          </div>
        
          
        </div>
        

      </section>
      {/* home */}
<div className="blur-element">hfdhfsdkajh</div>
<div className='blur-text'></div>






      {/*  App ends here */}
      </div>
    
  );
}

export default App;