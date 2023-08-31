import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact"; // no need for /index - because  it's named index.jsx VsCode knows

function App() {
  return (
    <div>
      <Header />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
