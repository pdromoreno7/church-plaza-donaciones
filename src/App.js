import { Donaciones } from "./components/Donaciones";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import Navbar from "./components/Navbar";
import { ProyectSection } from "./components/ProyectSection";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProyectSection />
      <Donaciones />
      <Footer />
    </>
  );
}

export default App;
