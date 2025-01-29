import React from 'react'; // Import React w przypadku starszych wersji


function App() {
  return (



    <div className="App">
      
        <header className="navbar__container">
          <a href="#home" className="navbar__logo">Szymon
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
      
    </div>

    
  );
}

export default App;