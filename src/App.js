import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from '../src/components/Navbar.js' ;
import {Banner} from '../src/components/Banner.js';
import {Experience} from '../src/components/Experience.js';
import {Projects} from '../src/components/Projects.js';
import {Footer} from '../src/components/Footer.js';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/home" element={<Banner/>}/>
          <Route path="/experience" element={<Experience/>} />
          <Route path="/projects" element={<Projects/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
