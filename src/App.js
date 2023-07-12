import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import Side from './components/Side';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';


function App() {
  return (
    <div className="main">

      <Router>
        <Navigation />
        <Side />
        <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
