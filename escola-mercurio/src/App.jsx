import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Contato from './Pages/Contato/contato';
import Segmentos from './Pages/Segmentos/segmentos';

function App() {
  return (
    <>
      <Header></Header>
      <h1>Testando Dev</h1>
      <Segmentos/>
      <Contato></Contato>
      <Footer></Footer>
    </>
    
  );
}

export default App;
