import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VideoBackground from "./components/VideoBackground";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Frontend from "./components/Frontend";
import Backend from "./components/Backend";
import Contact from "./components/Contact";
import Offer from "./components/Offer";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <VideoBackground />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/backend" element={<Backend />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/offer" element={<Offer />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
