import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/about";
import Footer from "./components/Footer";
import Header from "./components/Header";
import VideoBackground from "./components/VideoBackground";

function App() {
  return (
    <Router>
      <VideoBackground />
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
