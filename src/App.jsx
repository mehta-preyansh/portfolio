import './App.css';
import {Routes, Route, useLocation} from 'react-router-dom'
import Index from './components/Index';
import Loader from './components/Loader';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation()
  return (
    <AnimatePresence mode='wait' >
    <Routes location={location} key={location.key}>
      <Route path='/' element={<Loader/>}/>
      <Route path='/index' element={<Index/>}/>
    </Routes>
    </AnimatePresence>
  );
}

export default App;
