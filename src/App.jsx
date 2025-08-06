  import './App.css';
  import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
  import Header from './Components/Header';
  import ProductHighlights from './Components/Home/ProductHighlights';
  import Footer from './Components/Footer';
  import Home from './Pages/PaginaInicial.jsx';
  import Sobre from './Pages/SobreNos.jsx';
  import Catalogo from './Pages/Catalogo';
  import Comunidade from './Pages/Comunidade';
  import Contato from './Pages/Contato';
import PaginaInicial from './Pages/PaginaInicial.jsx';

  function App() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre/>} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/comunidade" element={<Comunidade />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }

  export default App;
  
/*function App() {
  return (
    <div style={{ padding: '2rem', backgroundColor: 'lightgreen' }}>
      Teste Entorno
    </div>
  );
}

export default App;
*/