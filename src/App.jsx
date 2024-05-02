import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import About from "./components/pages/home/about/About.jsx";
import Projects from "./components/pages/home/projects/Projects";
import Contact from "./components/pages/home/contact/Contact";
import ErrorPage from "./components/pages/home/about/errorPage/ErrorPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
