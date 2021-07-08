import React, { useState, useEffect } from 'react'
import ListContainer from './Components/List/ListContainer'

//this is to save a cookie with the preferred theme
const getStorageTheme = () => {
  let theme = 'light-theme'
  if(localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme')
  }
  return theme
}

function App() {
  const  [theme, setTheme] = useState(getStorageTheme());
  const toggleTheme = () => {
    if(theme === 'light-theme') {
      setTheme('dark-theme')
    } else {
      setTheme('light-theme')
    }
  }

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
  }, [theme]);

  return (
  <main>
    <nav>
      <div className="nav-center">
        <h1>TODO</h1>
        <button className="btn" onClick={toggleTheme}>
          {theme === 'light-theme' ? 
          <img src={require('./images/icon-moon.svg').default} alt="background"/> 
          : <img src={require('./images/icon-sun.svg').default} alt="background"/>}
        </button>      
      </div>
    </nav>
    <section className="list-container">
      <ListContainer />
      
    </section>

  </main>
  )
}

export default App
