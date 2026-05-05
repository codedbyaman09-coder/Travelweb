import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<div className="pt-32 text-center">About Page</div>} />
            <Route path="/promise" element={<div className="pt-32 text-center">Our Promise Page</div>} />
            <Route path="/destinations" element={<div className="pt-32 text-center">Destinations Page</div>} />
            <Route path="/experiences" element={<div className="pt-32 text-center">Experiences Page</div>} />
            <Route path="/magazine" element={<div className="pt-32 text-center">Magazine Page</div>} />
            <Route path="/press" element={<div className="pt-32 text-center">Press Page</div>} />
            <Route path="/contact" element={<div className="pt-32 text-center">Contact Page</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
