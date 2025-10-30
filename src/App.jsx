import React from 'react'
import Header from './components/Header'
import Hero from './Hero'
import Services from './Services'
import About from './About'
import Team from './Team'
import Contact from './Contact'
import Footer from './Footer'
import Photos from './Photos'
import ClientsVideos from './ClientsVideos'
import BottomNav from './components/BottomNav' // 👈 Import here

export default function App() {
  return (
    <div className="min-h-screen bg-[url('/bg-pattern.png')] bg-cover bg-center text-slate-100 relative">
      <Header />
      <main className="container-fluid mx-auto px-4 pb-20"> 
        {/* 👆 Added bottom padding so content doesn't hide behind nav */}
        <Hero />
        <Photos />
        <ClientsVideos />
        <Services />
        <About />
        {/* <Team /> */}
        <Contact />
      </main>
      <Footer />

      {/* 👇 Mobile bottom menu bar */}
      {/* <BottomNav /> */}
    </div>
  )
}