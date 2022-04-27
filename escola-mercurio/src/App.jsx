import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './Components/Header';
import Footer from './Components/Footer';
import Contato from './Pages/Contato/contato';
import Segmentos from './Pages/Segmentos/segmentos';
import SobrePag from './Pages/Sobre/SobrePag';
import Home from './Pages/Home/home';

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/segmentos' element={<Segmentos />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/sobre' element={<SobrePag />} />
        </Routes>
      </Router>
      <Footer></Footer>
    </>
    
  );
}

export default App;
