import Navbar from '../src/navbar/Navbar'
import { useRef } from 'react';
import Home from './Components/Home'
import About from '../src/Components/About'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './Login/Login';
function App() {
  const contactref = useRef(null);
  const scrollto = () => {
    contactref.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <div>
        <Router>
          <Navbar scrollto={scrollto}/>
          <Routes>
            <Route path="/" element={<Home contactref={contactref}/>} />
            <Route path="/about" element={<About />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </Router>

      </div>































    </>
  );
}

export default App;
