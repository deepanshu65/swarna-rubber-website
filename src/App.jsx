import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import SingleBlog from "./pages/SingleBlog";
import Test from "./pages/test";


function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/blogs/:id" element={<SingleBlog />} />
        <Route path="/test" element={<Test />} />

        
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
export default App;