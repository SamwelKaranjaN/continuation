import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './about';
import { Services } from './pages/services';
import { Contact } from './component/contact';
import { Topnav } from './component/topnav';

function App() {
  return (
    <div className="App">
      <Router>
        <Topnav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
