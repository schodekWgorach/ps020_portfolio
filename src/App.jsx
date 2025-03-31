import React, { useState } from "react";
import { useAnimatedText } from "./hooks/useAnimatedText";
import faceImage from "../src/assets/image/face.jpg";
import linkedinIcon from "./assets/icon/bxl-linkedin.svg";
import githubIcon from "./assets/icon/bxl-github.svg";
import gmailIcon from "./assets/icon/bxl-gmail.svg";
import './scss/main.scss';

/**
 * The main App component that renders the entire application.
 * It includes a navigation bar, home section, education section, technologies section,
 * IT project section, contact form, and footer.
 *
 * @component
 * @example
 * return (
 *   <App />
 * )
 *
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const words = ["Web Developer", "Frontend Developer", "React Developer", "JavaScript Enthusiast"];
  const { text, fade } = useAnimatedText(words, 3000); // Animacja co 3 sekundy

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <header className="navbar__container">
        <a href="#home" className="navbar__logo">
          Szymon <span>Schodnicki</span>
        </a>
        <button className="navbar__toggle" onClick={toggleMenu}>
          ☰
        </button>
        <div className={`navbar__container-list ${isMenuOpen ? "navbar__container-list--open" : ""}`}>
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
              <a className="home__button-github" href="https://github.com/schodekWgorach" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a className="home__button-linkedin" href="https://linkedin.com/schodekWgorach" target="_blank" rel="noopener noreferrer">Kontakt</a>
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

{/* Education rok 1995-2000 */}

      <div className="education__timeline-item">
        <div className="education__timeline-dot">

          <div className="education__timeline-date">1995-2000</div>

                <div className="education__timeline-content">
                  <h3>Jagiellonian University</h3>
                  <p>Pedagogical Therapy</p>
                </div>
           </div> 
      </div>
       
{/* Education rok 2000 */}

<div className="education__timeline-item">
        <div className="education__timeline-dot">

          <div className="education__timeline-date">2000</div>

                <div className="education__timeline-content, education__timeline-content-AWL">
                  <h3>Army of Land Forces - Reserve Officer Cadet School Military</h3>
                  <p>Engineering</p>
                </div>
           </div> 
      </div>
       


{/* Education rok 2002-2003 */}


<div className="education__timeline-item">
        <div className="education__timeline-dot">

          <div className="education__timeline-date">2002-2003</div>

                <div className="education__timeline-content">
                  <h3>University of Opole</h3>
                  <p>Computer Science </p>
                </div>
           </div> 
      </div>



{/* Education rok 2022 */}


<div className="education__timeline-item">
        <div className="education__timeline-dot">

          <div className="education__timeline-date">2022</div>

                <div className="education__timeline-content">
                  <h3>CodersLab</h3>
                  <p>Bootcamp - JavaScript Developer</p>
                </div>
           </div> 
      </div>
{/* Education rok 2025 */}


<div className="education__timeline-item">
        <div className="education__timeline-dot">

          <div className="education__timeline-date">2025</div>

                <div className="education__timeline-content">
                  <h3>CodersLab - Microsoft</h3>
                  <p> GitHub Copilot for Developers</p>
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
          <p>HTML and SCSS are powerful tools that allow me to create beautiful and functional websites. HTML is used to structure content, while SCSS is used to style it in a way that is flexible and easy to maintain. Thanks to my knowledge of these technologies, I can implement projects in line with the latest trends and standards. </p>
        </div>

        {/* JavaScript   */} 

        <div className="technologies__container-box">
          <h4>JavaScript</h4>
          <p>JavaScript is a programming language
that allows me to create interactive and dynamic websites.
It allows me to add animations, handle forms, and build
responsive web applications. My JavaScript skills allow me to create modern and engaging designs.</p>
        </div>

        {/* React   */} 

        <div className="technologies__container-box">
          <h4>React</h4>
          <p>React is a JavaScript library that allows me to
create interactive and dynamic user interfaces based on
components. With React, I can build scalable and efficient web applications
that provide users with a fluid and responsive experience.
My React skills allow me to create modern and engaging designs
that meet the highest quality standards. </p>
        </div>

        {/* Copilot   */} 

        <div className="technologies__container-box">
          <h4>Copilot</h4>
          <p>Copilot is an AI-powered companion that supports users in various tasks and projects, enhancing efficiency and creativity. Copilot can assist with answering questions, brainstorming ideas, writing code, and even generating images. With its ability to understand natural language and context, Copilot offers a seamless and intelligent experience for collaboration and productivity. My expertise with Copilot helps me approach challenges effectively and take an organized, informed approach to solving problems.</p>

        </div>

          {/* AI  */} 

          <div className="technologies__container-box">
          <h4>AI</h4>
          <p>Artificial Intelligence (AI) technologies encompass a wide range of systems designed to simulate human intelligence and solve complex problems. AI-powered tools can perform tasks such as natural language processing, data analysis, image recognition, and predictive modeling. These technologies enable smarter decision-making, automation, and enhanced user experiences. My familiarity with AI systems allows me to adopt innovative and efficient approaches to tackling challenges in various domains.</p>

        </div>

          {/* GIT   */} 

          <div className="technologies__container-box">
          <h4>GIT</h4>
          <p>Git is a version control system that allows me to effectively
manage code for projects and collaborate with other developers.
Git allows me to track code changes, revert them if necessary
and work on different features in parallel. My experience
with Git allows me to take a professional and organized approach to software
development.</p>

        </div>

      </div>
  </section>
  {/* itProject */}  

  <section className="itproject" id="itprojekt">

    <h2 className="heading">It Projekt</h2>

        <div className="itproject__container">


        {/* BEST CAR */} 
        
        <div className="itproject__container-box">
          <img src={require("./assets/image/cars.jpg")} alt="Best Car Site"   />
          <h4>Best Car Landpages</h4>
          <p>simple website without backend </p>
        </div>

        {/* CV asncestors */} 

        <div className="itproject__container-box">
          <img src={require("./assets/image/CVancestors.jpg")} alt="Best Car Site"  />
          <h4>CV asncestors</h4>
          <p>
          brief information about ancestors  </p>
        </div>

        {/* kafelki  */} 

        <div className="itproject__container-box">
          <img src={require("./assets/image/bc.jpg")} alt="Best Car Site"  />
          <h4>tile</h4>
          <p>xxxx  </p>
        </div>
       
        {/* Agile  */} 

        <div className="itproject__container-box">
          <img src={require("./assets/image/bc.jpg")} alt="Best Car Site"  />
          <h4>auto cliker</h4>
          <p>xxxx</p>
        </div>

      </div>
 


  </section>
  
{/* end of App below*/}
<section className="contact" id="contact">
  <h2 className="contact__heading">Contact<span>Me</span></h2>

  <form className="contact__form" action="">
    <div className="contact__input-group">
      <input type="text" name="name" placeholder="Full Name" required />
      <input type="email" name="email" placeholder="Email" required />
      <textarea name="message" placeholder="Message" required></textarea>
      <button className="contact__button" type="submit">Send</button>
    </div>
  </form>
</section>

<section className="footer">
        <div className="footer__container">
          <div className="footer__column">
            <h3>Social Media</h3>
            <ul className="footer__social-links">
              <li>
                <a href="https://www.linkedin.com/in/szymon-schodnicki-7798b6256/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/schodekWgorach" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="mailto:your.email@example.com">
                  Email
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h3>Quick Links</h3>
            <ul className="footer__quick-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#technologies">Technologies</a></li>
              <li><a href="#itprojekt">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer__column">
            <h3>Contact</h3>
            <p>Szymon Schodnicki</p>
            <p>Email: sschodnicki@gmail.com</p>
            <p></p>
          </div>
        </div>
        <div className="footer__copyright">
          <p>&copy; {new Date().getFullYear()} Szymon Schodnicki. All rights reserved.</p>
        </div>
      </section>
    </div> 
  );
}

export default App;