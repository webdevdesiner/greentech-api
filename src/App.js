import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Sobre from './pages/Sobre';
import FaleConosco from './pages/FaleConosco';
import Venda from './pages/Venda';
import Cadastro from './pages/Cadastro';


function App() {
  return (
    
    <Routes>
      <Route path='/' element ={
        <Home/>
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

    </Routes>

  );
}

export default App;
