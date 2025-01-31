import React from 'react'; // Import React w przypadku starszych wersji
import faceImage from "../src/assets/image/face.jpg"; // import faceImage
import linkedinIcon from "./assets/icon/bxl-linkedin.svg";
import githubIcon from "./assets/icon/bxl-github.svg";
import gmailIcon from "./assets/icon/bxl-gmail.svg"; 


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

        <div className="home__container">

          <div className="home__content">

                <h1 className="home__content-h1">Hi, it's<span> Szymon</span></h1>
                <h3 className="home__content-animation">I'm a</h3>
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores doloremque eaque aspernatur incidunt saepe 
                  temporibus ex reprehenderit similique est ipsa repudiandae,
                  eligendi mollitia? Atque neque sunt magni commodi quaerat odio?</p>
        

                  <div className="content__socialicon">
      <a href="https://www.linkedin.com/in/szymon-schodnicki-7798b6256/" id="linkedin">
        <img src={linkedinIcon} alt="LinkedIn" />
      </a>
     
      <a href="https://github.com/schodekWgorach" id="github">
        <img src={githubIcon} alt="GitHub" />
      </a>
      <a href="mailto:your.email@example.com" id="gmail">
        <img src={gmailIcon} alt="Gmail" />
      </a>

      <div className="home__button">
        <a href="#github" className="button">GitHub</a>
        <a href="#contact" className="button">Kontakt</a>
      </div>
      
         
            </div>
            </div>
          <div className="home__image">
          <img src={faceImage} alt="zdięcie profilowe" />
          
          
        </div>
        
          
      </div>
        

      </section>
      {/* education */}




      {/*  App ends here */}
      </div>
    
  );
}

export default App;