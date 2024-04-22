import './App.css';
import { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import Index from './pages/Index';
import Loader from './pages/components/Loader';
import { AnimatePresence } from 'framer-motion';
import Navbar from './pages/components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Projects from './pages/Projects';

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
          <Route path='/' element={localStorage.getItem('hasAnimationPlayed')? <Navigate to='index'/> : <Loader />} />
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
