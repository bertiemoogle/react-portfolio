import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';

function App() {
  return (

// Navigation menu utilising Router.

    <Router>
      <div>
        <NavTabs />
        <Routes basename="react-portfolio">
          <Route path="/react-portfolio" element={<Home />} />
          <Route path="/react-portfolio/About" element={<About />} />
          <Route path="/react-portfolio/Projects" element={<Projects />} />
          <Route path="/react-portfolio/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;