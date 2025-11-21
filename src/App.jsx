import React from "react";
import Header from "./components/Header";
import Hero from "./Hero";
import Services from "./Services";
import About from "./About";
import Team from "./Team";
import Contact from "./Contact";
import Footer from "./Footer";
import Photos from "./Photos";
import ClientsVideos from "./ClientsVideos";
import BottomNav from "./components/BottomNav";
import CardNav from "./components/CardNav";
import Events from "./Events";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      
      {/* 🔹 Fixed Header */}
      <Header />

      {/* 🔹 Main Content */}
      <main className="mx-auto px-0 sm:px-4 pb-24">
        <Hero />
        {/* <Events /> */}

        <ClientsVideos />
        <Services />

        {/* Optional sections */}
        {/* <Photos /> */}
        {/* <About /> */}
        {/* <Team /> */}

        <Contact />
      </main>

      {/* 🔹 Footer */}
      <Footer />

      {/* 🔹 Bottom Nav (if needed) */}
      {/* <div className="block md:hidden fixed bottom-0 left-0 w-full z-50">
        <BottomNav />
      </div> */}
    </div>
  );
}