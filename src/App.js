import Navbar from '../src/navbar/Navbar'
import Home from './Components/Home'
import About from '../src/Components/About'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
function App() {
  return (
<>
<div>
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
</div>































</>
  );
}

export default App;
