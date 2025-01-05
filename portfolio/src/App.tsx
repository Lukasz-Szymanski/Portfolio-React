import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VideoBackground from "./components/VideoBackground";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/about";
import Frontend from "./components/Frontend";
import Backend from "./components/Backend";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <VideoBackground />
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/backend" element={<Backend />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
