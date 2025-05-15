import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Resources from './components/Resources';
import React, { useState, useEffect } from 'react';
import CourseMat from './components/materials/CourseMat';
import ReferenceMat from './components/materials/ReferenceMat';
import PrevPap from './components/materials/PrevPap';
import Tech from './components/Tech';
import Fest from './components/Fest';
import Hackathons from './components/Hackathons';

function App() {
  const [darkmode, setDarkmode] = useState(() => {
    return localStorage.getItem("darkmode") === "true";
  });

  useEffect(() => {
    localStorage.setItem("darkmode", darkmode);
  }, [darkmode]);

  return (
    <>
      <BrowserRouter>
        <Navbar darkmode={darkmode} setDarkmode={setDarkmode} />
        <div className={darkmode ? 'bg-dark text-light' : 'bg-light text-dark'}>
          <Routes>
            <Route path='/' element={<Home darkmode={darkmode}/>} />
            <Route path='/resources' element={<Resources darkmode={darkmode} />} />
            <Route path='/coursemat' element={<CourseMat darkmode={darkmode} />} />
            <Route path='/referencemat' element={<ReferenceMat darkmode={darkmode} />} />
            <Route path='/prevpap' element={<PrevPap darkmode={darkmode} />} />
            <Route path='/tech' element={<Tech darkmode={darkmode} />} />
            <Route path='/fest' element={<Fest darkmode={darkmode} />} />
            <Route path='/hackathons' element={<Hackathons darkmode={darkmode} />} />
            
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
