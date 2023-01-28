import { Routes, Route } from "react-router-dom";
import Blog from "./Components/Blog";
import About from "./Components/About";
import Featured from "./Components/Featured";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import Gallery from "./Components/Gallery";
import NotFound from "./Components/NotFound";

const App = () => {
  useSmoothScroll();
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog needFullHeight={true} />} />
        <Route path="*" element={<NotFound needFullHeight={true} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
