import Skills from "./components/Skills.jsx"
import Footer from "./components/Footer.jsx"
import Projects from "./components/Projects.jsx";
import Bot from "./components/Bot.jsx";
import MouseFollower from "./components/MouseFollower.jsx";
import { useState } from "react";
import Img from './components/Img.jsx'
import Bubbles from './components/Bubbles.jsx'
import Hero from "./components/Hero.jsx";
function App() {

  const [isVisible, setIsVisible] = useState(false)


  return (
    <>
      <Hero />
      <main>

        <Skills />
        <Projects />
      </main>
      <Footer isVisible={isVisible} />
      <Bot setIsVisible={setIsVisible} />
      <MouseFollower />
      <Img />
    </>
  )
}

export default App;