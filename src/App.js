import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "./assets/App.css";
import Home from './pages/Home';
import Nav from './components/Nav';
import About from  './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';




function App() {


return (
<div className='Main'>
<Router>
<Nav />
<Routes>
<Route path='/' element={<Home />} />
<Route path='/about' element={<About />} />
<Route path='/resume' element={<Resume />} />
<Route path='/portfolio' element={<Portfolio />} />
</Routes>
</Router>
</div>


);
}


export default App;
