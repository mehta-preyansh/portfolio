import './App.css';
import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'
import Index from './components/Index';
import Loader from './components/Loader';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  useEffect(() => {
    const hasAnimationPlayed = localStorage.getItem('hasAnimationPlayed');
    if (!hasAnimationPlayed) {
      localStorage.setItem('hasAnimationPlayed', true);
    }
  }, []);

  const location = useLocation()

  return (
    <>
      <Navbar hasAnimationPlayed={localStorage.getItem('hasAnimationPlayed')} />
      <AnimatePresence mode='wait' >
        <Routes location={location} key={location.key}>
          <Route path='/' element={<Loader />} />
          <Route path='index' element={<Index />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='skills' element={<Skills />} />
          <Route path='projects' element={<Projects />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
