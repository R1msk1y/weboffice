import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ScrollToTop from "./utils/scrollToTop";

import "./styles/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import My_manifest from "./pages/My_manifest";
import Store_page from "./pages/Store_page";
import Landing_page from "./pages/Landing_page";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<About />} />
          <Route path="/myManifest" element={<My_manifest />} />
          <Route path="/storePage" element={<Store_page />} />
          <Route path="/landingPage" element={<Landing_page />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
