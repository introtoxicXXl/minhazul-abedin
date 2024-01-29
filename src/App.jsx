import './App.css'
import Hero from './components/Hero/Hero'
import Sidebar from './components/Sidebar/Sidebar'

function App() {

  return (
    <div>
      <section>
      <Sidebar/>
      <Hero/>
      </section>
      <section>Parallax</section>
      <section>Service</section>
      <section>Parallax</section>
      <section>Portfolio</section>
      <section>Portfolio</section>
      <section>Portfolio</section>
      <section>Contact</section>
    </div>
  )
}

export default App
