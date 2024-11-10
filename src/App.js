import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About } from './pages/about';
import { Contact } from './component/contact';
import { Footer } from './component/footer/footer';
import { Home } from './pages/Home';
import { Services } from './pages/services';
import { Topnav } from './component/topnav';
import { Authenticated } from './pages/login_register/authenticate';

import './App.css';

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
          <Route path="/login" element={<Authenticated formtype="login" />} />
          <Route path="/register" element={<Authenticated formtype="register" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
