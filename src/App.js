import Navbar from '../src/navbar/Navbar'
import Contact from './Components/Contact';
import { useRef } from 'react';
import Home from './Components/Home'
import About from '../src/Components/About'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './Login/Login';
function App() {
    const contactRef = useRef(null);

  const scrollto = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div>
        <Router>
          <Navbar scrollto={scrollto}/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </Router>
        <div ref={contactRef}>
          <Contact/>
        </div>

      </div>































    </>
  );
}

export default App;
