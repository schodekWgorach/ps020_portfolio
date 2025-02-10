import React from "react";
import { useAnimatedText } from "./hooks/useAnimatedText";
import faceImage from "../src/assets/image/face.jpg";
import linkedinIcon from "./assets/icon/bxl-linkedin.svg";
import githubIcon from "./assets/icon/bxl-github.svg";
import gmailIcon from "./assets/icon/bxl-gmail.svg";

function App() {
  const words = ["Web Developer", "Frontend Developer", "React Developer", "JavaScript Enthusiast"];
  const { text, fade } = useAnimatedText(words, 3000); // Animacja co 3 sekundy

  return (
    <div className="App">
      <header className="navbar__container">
        <a href="#home" className="navbar__logo">
          Szymon <span>Schodnicki</span>
        </a>
        <div className="navbar__container-list">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#education">Education</a></li>  
            <li><a href="#technologies">Technologies</a></li>  
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </header>

      {/* Sekcja Home */}
      <section className="home" id="home">
        <div className="home__container">
          <div className="home__content">
            <h1 className="home__content-h1">
              Hi, it's <span>Szymon</span>
            </h1>
            <h3 className="home__content-animation">
              I'm a <span className={`fade-text ${fade ? "visible" : "hidden"}`}>{text}</span>
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>

            {/* Ikony społecznościowe */}
            <div className="home__content-socjalicon">
              <a href="https://www.linkedin.com/in/szymon-schodnicki-7798b6256/" className="home__content-social">
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
              <a href="https://github.com/schodekWgorach" className="home__content-social">
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a href="mailto:your.email@example.com" className="home__content-social">
                <img src={gmailIcon} alt="Gmail" />
              </a>
            </div>

            {/* Przycisk */}
            <div className="home__button">
              <button className="home__button-github">GitHub</button>
              <button className="home__button-linkedin">Kontakt</button>
            </div>
          </div>

          {/* Obraz profilowy */}
          <div className="home__image">
            <img src={faceImage} alt="Profilowe" />
          </div>
        </div>
      </section>

{/* Education */}


      <section className="education"  id="education">
        <h2 className="heading">Education</h2>
        

        <div className="education__timelien-items">

{/* Education rok 2000 */}

      <div className="education__timelien-item">
        <div className="education__timeline-dot">
          <div className="education__timeline-date">9999
          </div>
           <div className="education__timeline-content">
            <h3>High School</h3>
            <p>Lorem ipsum dolor sit amet, 
              consectetur adipisicing elit. Fuga tempora corporis
               fugit! Obcaecati, facere nesciunt. Delectus corporis nobis 
               nam aliquam perferendis veritatis deserunt rerum, aspernatur 
               omnis adipisci reiciendis vitae voluptate!</p>
           </div>
           </div> 
        </div>
      </div>
       
{/* Education rok 2000 */}
<div></div>

      </section>
    </div>
  );
}

export default App;
