import React from 'react'
import Header from './components/Header'
import NoticeBar from './components/NoticeBar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Process from './components/Process'
import OurDogs from './components/OurDogs'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <NoticeBar />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <OurDogs />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
