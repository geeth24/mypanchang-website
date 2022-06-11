import About from "./components/About/About";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/Pricing/Pricing";

function App() {
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

export default App;
