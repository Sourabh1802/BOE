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
import { Figma } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-[url('/bg-pattern.png')] bg-cover bg-center text-slate-100 relative">
      {/* 🟦 Header Section */}
      <Header />
    

      {/* 🟢 Main Content */}
      <main className="container-fluid mx-auto px-4 pb-24"> 
        {/* Added bottom padding so content doesn’t hide behind BottomNav */}
        <Hero />
        <Events/>
        {/* <Photos /> */}
        <ClientsVideos />
        <Services />
        {/* <About /> */}
        {/* <Team /> */}
        <Contact />
      </main>

      {/* 🟣 Footer */}
      <Footer />

      {/* 🟡 Mobile Bottom Navigation */}
      {/* <div className="block md:hidden fixed bottom-0 left-0 w-full z-50">
        <BottomNav />
      </div> */}
    </div>
  );
}

