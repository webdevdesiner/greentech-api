import { Route, Routes } from 'react-router-dom';
import './App.css';
import CadastroProdutos from './pages/CadastroProdutos';
import PerfilUsuario from './pages/PerfilUsuario';
import Cadastro from './pages/Cadastro';
import Chat from './pages/Chat'
import MeusAnuncios from './pages/MeusAnuncios';
import Home from './pages/Home';
import Login from './pages/Login';
import Sobre from './pages/Sobre';
import FaleConosco from './pages/FaleConosco';
import Venda from './pages/Venda';
import Cadastro from './pages/Cadastro';
import Listagem from './pages/Listagem';
import Cadprodutos from './pages/Cadprodutos';


import CadastroProdutos from './pages/CadastroProdutos';
import PerfilUsuario from './pages/PerfilUsuario';
import Cadastro from './pages/Cadastro';
import Chat from './pages/Chat'

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
        }></Route>
      <Route path='cadprod' element ={
        <CadastroProdutos/>
      }>

      </Route>

      <Route path='/login' element ={
        <Login/>
      }>

      </Route>

      <Route path='/sobre' element ={
        <Sobre/>
      }>

      </Route>

      <Route path='/faleconosco' element ={
        <FaleConosco/>
      }>

      </Route>

      <Route path='/venda' element ={
        <Venda/>
      }>

      </Route>

      <Route path='/cadastro' element ={
        <Cadastro/>
      }>

      </Route>

      <Route path='/listagem' element ={
        <Listagem/>
      }>

      </Route>

      <Route path='/cadprodutos' element ={
        <Cadprodutos/>
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
