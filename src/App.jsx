import './App.css'

// componentes
import Nav from './components/Nav'
import About from './components/About'
import Header from './components/Header'
import Portfolio from './components/Portfolio'
import Tech from './components/Tech'
import Services from './components/Services'
import HappyClient from './components/HappyClient'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Tech />
      <About />
      <Services />
      <Portfolio />
      <HappyClient />
      <Contact />
      <Footer />
    </div>


  )
}
