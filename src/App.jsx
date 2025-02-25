import './App.css'

// Component imports
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      {/* Wave Background */}
      <div className="wave-container">
        <div className="wave wave-1 animate-wave"></div>
        <div className="wave wave-2 animate-wave-slow"></div>
        <div className="wave wave-3 animate-wave-slower"></div>
      </div>
      
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
