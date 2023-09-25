import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Contact from "./pages/contact"; // no need for /index - because  it's named index.jsx VsCode knows
import Hero from "./pages/hero/";
import Skills from "./pages/skills";
import Work from "./pages/work";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Skills />
      <Work />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
