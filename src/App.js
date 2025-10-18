import Navbar from '../src/navbar/Navbar'
import Home from './Components/Home'
import About from '../src/Components/About'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './Login/Login';
function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </Router>
            
      </div>































    </>
  );
}

export default App;
