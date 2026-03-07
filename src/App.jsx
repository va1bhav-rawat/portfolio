import Navigation from './components/Navigation'
import ScrollDots from './components/ScrollDots'
import Petals from './components/Petals'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Credentials from './components/Credentials'
import { Contact, Footer } from './components/Contact'

function App() {
  return (
    <>
      <Petals />
      <Navigation />
      <ScrollDots />

      <Hero />
      <About />
      <Skills />
      <Experience />
      <Credentials />
      <Contact />

      <Footer />
    </>
  )
}

export default App
