import React, { useState } from 'react'
import { Home } from './Home'
import { About } from './About'
import { Projects } from './Projects'
import "./App.css"

function App() {
  const [route, setRoute] = useState("/")

  function renderComponent() {
    switch(route) {
      case "/":
        return <Home />
      case "/about":
        return <About />
      default: 
        return <Projects />
    }
  }

  function onLinkClick(e) {
    e.preventDefault()
    const id = e.target.id
    if (id === "home") {
      setRoute("/")
    } else if (id === "about") {
      setRoute("/about")
    } else {
      setRoute("/projects")
    }
  }

  // 3 different components
  // home component will have the string in state of "/"
  // the about component will have the string in state of "/about"
  // the projects component will have the string in state of "/projects"

  return (
    <div>
      <nav>
        <a onClick={onLinkClick} id="home" href="/">Home</a>
        <a onClick={onLinkClick} id="about" href="/">About</a>
        <a onClick={onLinkClick} id="projects" href="/">Projects</a>
      </nav>
      {renderComponent()}
    </div>
  )

}

export default App;
