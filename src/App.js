import { Route, Routes } from 'react-router-dom';
import './App.css';
import CadastroProdutos from './pages/CadastroProdutos';
import PerfilUsuario from './pages/PerfilUsuario';
import Cadastro from './pages/Cadastro';
import Chat from './pages/Chat'

function App() {
  return (
    
    <Routes>
      <Route path='cadprod' element ={
        <CadastroProdutos/>
      }>

      </Route>

      <Route path='perfusu' element ={
        <PerfilUsuario/>
      }></Route>

<Route path='cad' element ={
        <Cadastro/>
      }></Route>

<Route path='chat' element ={
        <Chat/>
      }></Route>
    </Routes>
    

  );
}

export default App;
