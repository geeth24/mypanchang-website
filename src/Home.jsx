import React from "react";
import About from "./components/About/About";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/Pricing/Pricing";
import { logEvent } from "firebase/analytics";
import { analytics } from "./Firebase";
function Home() {
  const onReady = async () => {
    await logEvent(analytics, "home_page_view");
    console.log("Home page view logged");
  };

  onReady();

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Pricing />
      <Footer />
    </>
  );
}

export default Home;
