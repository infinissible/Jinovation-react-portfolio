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
            <Route path="/Jinovation-react-portfolio/" element={<About />} />
            <Route
              path="/Jinovation-react-portfolio/#/project"
              element={<Project />}
            />
            <Route
              path="/Jinovation-react-portfolio/#/contact"
              element={<ContactForm />}
            />
            <Route
              path="/Jinovation-react-portfolio/#/resume"
              element={<Resume />}
            />
          </Routes>
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
