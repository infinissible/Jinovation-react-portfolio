import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
