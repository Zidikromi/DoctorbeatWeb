import './App.css'
import { HeroSection } from './components/heresection'
import BandHistory from './components/historysection'
import BandMembers from './components/membersection'
import { Navbar } from './components/navbar'
import RecapFoto from './components/recapfoto'
import SocialMediaSection from './components/socialmediasection'

function App() {

  return (
    <>
      <Navbar />
      <HeroSection />

      {/* Target untuk href="#history" */}
      <section id="history">
        <BandHistory />
      </section>

      {/* Target untuk href="#members" */}
      <section id="members">
        <BandMembers />
      </section>

      {/* Target untuk href="#recap" */}
      <section id="recap">
        <RecapFoto />
      </section>

      {/* Target untuk href="#social" */}
      <section id="social">
        <SocialMediaSection />
      </section>
    </>
  )
}

export default App