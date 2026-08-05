
import './App.css'
import { HeroSection } from './components/heresection'
import BandMembers from './components/membersection'
import { Navbar } from './components/navbar'
import RecapFoto from './components/recapfoto'

function App() {

  return (
    <>
     <Navbar />
     <HeroSection />
    <BandMembers />
    <RecapFoto />
    </>
  )
}

export default App
