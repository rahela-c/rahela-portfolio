import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact"; // no need for /index - because  it's named index.jsx VsCode knows
import Hero from "./components/hero/";
import Skills from "./components/skills";
import Work from "./components/work";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
