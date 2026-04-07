import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.tsx'
import About from './sections/About.tsx'
import Projects from './sections/Projects.tsx'
import Blog from './sections/Blog.tsx'
import ScrollToTop from "./components/ScrollToTop";
import './main.css'


function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
