

function App() {
  return (
    <div className="App">
      <div class="container">
      <header class="header">
        <a href="#home" class='logo'>Szymon
          <span>Schodnicki</span></a> 

          <nav href='#home' className="navbar">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#education">Edukation</a></li>
              <li><a href="#technologis">Technologis</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul> 

            <div className="search-bar">
              <input type="text" placeholder="Search..." />
              <button>Search</button>
            </div>

      
          </nav>
           
      </header>
      </div>
    </div>
  );
}

export default App;
