import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Header';
import Notes from './components/Notes';

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Navbar/>
    <Routes>
      <Route path='/' element={<Notes/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path="*" element={<Notes/>} /> 
    </Routes>
      <Footer/>
    </div>
  );
}

export default App;
