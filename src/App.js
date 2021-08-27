import { Donaciones } from "./components/Donaciones";
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
    </>
  );
}

export default App;
