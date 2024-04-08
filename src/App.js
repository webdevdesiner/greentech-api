import { Route, Routes } from 'react-router-dom';
import './App.css';
import CadastroProdutos from './pages/CadastroProdutos';
import PerfilUsuario from './pages/PerfilUsuario';
import Cadastro from './pages/Cadastro';
import Chat from './pages/Chat'
import MeusAnuncios from './pages/MeusAnuncios';
import Home from './pages/Home';
import Venda from './pages/Venda';
import Contato from './pages/Contato';

function App() {
  return (
    
    <Routes>
      <Route path='/' element ={
          <Home/>
        }>
      </Route>
      <Route path='/Contato' element ={
          <Contato/>
        }>
      </Route>
      <Route path='/Venda' element ={
          <Venda/>
        }>
      </Route>
      <Route path='/MeusAnuncios' element ={
          <MeusAnuncios/>
        }>
      <Route path='cadprod' element ={
        <CadastroProdutos/>
      }>

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
