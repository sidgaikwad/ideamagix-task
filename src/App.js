import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Teams from './pages/Teams';
import Hospitals from './pages/Hospitals';
import Destinations from './pages/Destinations';
import Treatment from './pages/Treatment';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Teams" element={<Teams />} />
          <Route path="/Treatment" element={<Treatment />} />
          <Route path="/Hospitals" element={<Hospitals />} />
          <Route path="/Destinations" element={<Destinations />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
