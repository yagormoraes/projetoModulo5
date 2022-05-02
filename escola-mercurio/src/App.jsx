import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Contato from './Pages/Contato/contato.jsx';
import Segmentos from './Pages/Segmentos/segmentos.jsx';
import SobrePag from './Pages/Sobre/SobrePag.jsx';
import Home from './Pages/Home/home.jsx';
import Professor from './Pages/Professor/professor.jsx';
import Cadastro from './Pages/cadastro/Cadastro.jsx';
import Visualizar from './Pages/VisualizarAlunos/VisualizarAluno';

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
          <Route path='/professor' element={<Professor />} />
          <Route path='/cadastro' element={< Cadastro/>} />
          <Route path='/visualizar/:idMatricula' element={<Visualizar/>}/>
        </Routes>
      </Router>
      <Footer></Footer>
    </>
    
  );
}

export default App;
