import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Contato from './Pages/Contato/contato';
import Segmentos from './Pages/Segmentos/segmentos';

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path='/segmentos' element={<Segmentos />} />
          <Route path='/contato' element={<Contato />} />
        </Routes>
      </Router>
      <Footer></Footer>
    </>
    
  );
}

export default App;
