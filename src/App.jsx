import './App.css'
import Navbar from './components/Navbar'
import Contacts from './components/Contacts'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Home from './components/Home'

function App() {
  return (
    <main>
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Contacts />
    </main>
  )
}

export default App
