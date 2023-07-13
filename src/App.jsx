import './App.css';
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
  const location = useLocation()
  return (
    <>
      <Navbar />
      <AnimatePresence mode='wait' >
        <Routes location={location} key={location.key}>
          <Route path='/portfolio' element={<Loader />} />
          <Route path='/portfolio/index' element={<Index />} />
          <Route path='/portfolio/about' element={<About />} />
          <Route path='/portfolio/contact' element={<Contact />} />
          <Route path='/portfolio/skills' element={<Skills />} />
          <Route path='/portfolio/projects' element={<Projects />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
