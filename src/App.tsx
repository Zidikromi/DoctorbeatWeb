
import './App.css'
import { HeroSection } from './components/heresection'
import BandMembers from './components/membersection'
import { Navbar } from './components/navbar'
import RecapFoto from './components/recapfoto'
import SocialMediaSection from './components/socialmediasection'

function App() {

  return (
    <>
     <Navbar />
     <HeroSection />
    <BandMembers />
    <RecapFoto />
    <SocialMediaSection/>
    </>
  )
}

export default App
