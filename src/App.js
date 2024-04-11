import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import Login from './pages/Login';
import Sobre from './pages/Sobre';
import FaleConosco from './pages/FaleConosco';
import Listagem from './pages/Listagem';
import Cadprodutos from './pages/Cadprodutos';
import Contato from './pages/Contato';
import Venda from './pages/Venda';


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

<Route path='cad' element ={
        <Cadastro/>
      }></Route>

    </Routes>
    

  );
}

export default App;
