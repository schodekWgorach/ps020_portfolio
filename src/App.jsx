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
            <li><a href="#itprojekt">It projekt</a></li>  
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
        

    <div className="education__timeline-items">

{/* Education rok 2001 */}

      <div className="education__timeline-item">
        <div className="education__timeline-dot">

          <div className="education__timeline-date">2001</div>

                <div className="education__timeline-content">
                  <h3>High School</h3>
                  <p>Lorem ipsum dolor sit amet, 
                    consectetur adipisicing </p>
                </div>
           </div> 
      </div>
       


{/* Education rok 2010 */}


<div className="education__timeline-item">
        <div className="education__timeline-dot">

          <div className="education__timeline-date">2010</div>

                <div className="education__timeline-content">
                  <h3>High School</h3>
                  <p>Lorem ipsum dolor sit amet, 
                  consectetur adipisicing </p>
                </div>
           </div> 
      </div>



{/* Education rok 2012 */}


<div className="education__timeline-item">
        <div className="education__timeline-dot">

          <div className="education__timeline-date">2012</div>

                <div className="education__timeline-content">
                  <h3>High School</h3>
                  <p>Lorem ipsum dolor sit amet, 
                  consectetur adipisicing </p>
                </div>
           </div> 
      </div>
{/* Education rok 2022 */}


<div className="education__timeline-item">
        <div className="education__timeline-dot">

          <div className="education__timeline-date">2022</div>

                <div className="education__timeline-content">
                  <h3>High School</h3>
                  <p>Lorem ipsum dolor sit amet, 
                  consectetur adipisicing </p>
                </div>
           </div> 
      </div>

{/* end of education*/}
          </div>
       </section>

 {/* Technologies */}      
  <section className="technologies" id="technologies">
    <h2 className="heading">Technologies</h2>

      <div className="technologies__container">


        {/* HTML SCSS */} 
        <div className="technologies__container-box">
          <h4>HTML SCSS</h4>
          <p>HTML i SCSS to potężne narzędzia, 
            które pozwalają mi tworzyć piękne i funkcjonalne strony internetowe.
             HTML służy do strukturyzowania treści, a SCSS do stylowania jej w sposób 
             elastyczny i łatwy w utrzymaniu. Dzięki znajomości tych technologii
             mogę realizować projekty zgodnie z najnowszymi trendami i standardami.  </p>
        </div>

        {/* JavaScript   */} 

        <div className="technologies__container-box">
          <h4>JavaScript</h4>
          <p>JavaScript to język programowania,
             który umożliwia mi tworzenie interaktywnych i dynamicznych stron internetowych.
              Dzięki niemu mogę dodawać animacje, obsługiwać formularze i budować 
              responsywne aplikacje webowe. Moje umiejętności
             JavaScript pozwalają mi tworzyć nowoczesne i angażujące projekty. </p>
        </div>

        {/* React   */} 

        <div className="technologies__container-box">
          <h4>React</h4>
          <p>React to biblioteka JavaScript, która pozwala mi
             tworzyć interaktywne i dynamiczne interfejsy użytkownika oparte na
              komponentach. Dzięki React mogę budować skalowalne i wydajne aplikacje 
              internetowe, które zapewniają użytkownikom płynne i responsywne doświadczenie.
               Moje umiejętności React pozwalają mi tworzyć nowoczesne i angażujące projekty,
             spełniające najwyższe standardy jakości. </p>
        </div>

        {/* GIT   */} 

        <div className="technologies__container-box">
          <h4>GIT</h4>
          <p>Git to system kontroli wersji, który umożliwia mi efektywne 
            zarządzanie kodem projektów i współpracę z innymi programistami.
             Dzięki Git mogę śledzić zmiany w kodzie, cofać je w razie potrzeby 
             i pracować nad różnymi funkcjonalnościami równolegle. Moje doświadczenie 
             z Git pozwala mi na profesjonalne i zorganizowane podejście do tworzenia 
             oprogramowania.</p>

        </div>

      </div>
  </section>
  {/* itProject */}  

  <section className="itproject">

    <h2 className="heading">It Projekt</h2>

        <div className="technologies__container">


        {/* HTML SCSS */} 
        <div className="technologies__container-box">
          <h4>Best Car landpages</h4>
          <p>xxxx  </p>
        </div>

        {/* JavaScript   */} 

        <div className="technologies__container-box">
          <h4>JavaScript</h4>
          <p>JavaScript to język programowania,
             który umożliwia mi tworzenie interaktywnych i dynamicznych stron internetowych.
              Dzięki niemu mogę dodawać animacje, obsługiwać formularze i budować 
              responsywne aplikacje webowe. Moje umiejętności
             JavaScript pozwalają mi tworzyć nowoczesne i angażujące projekty. </p>
        </div>

        {/* React   */} 

        <div className="technologies__container-box">
          <h4>React</h4>
          <p>React to biblioteka JavaScript, która pozwala mi
             tworzyć interaktywne i dynamiczne interfejsy użytkownika oparte na
              komponentach. Dzięki React mogę budować skalowalne i wydajne aplikacje 
              internetowe, które zapewniają użytkownikom płynne i responsywne doświadczenie.
               Moje umiejętności React pozwalają mi tworzyć nowoczesne i angażujące projekty,
             spełniające najwyższe standardy jakości. </p>
        </div>

        {/* GIT   */} 

        <div className="technologies__container-box">
          <h4>GIT</h4>
          <p>Git to system kontroli wersji, który umożliwia mi efektywne 
            zarządzanie kodem projektów i współpracę z innymi programistami.
             Dzięki Git mogę śledzić zmiany w kodzie, cofać je w razie potrzeby 
             i pracować nad różnymi funkcjonalnościami równolegle. Moje doświadczenie 
             z Git pozwala mi na profesjonalne i zorganizowane podejście do tworzenia 
             oprogramowania.</p>

        </div>

      </div>
 


  </section>
  
{/* end of App below*/}
    </div> 
  );
}

export default App;
