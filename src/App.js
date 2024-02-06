import { Route, Routes } from 'react-router-dom';
import './App.css';
import CadastroProdutos from './pages/CadastroProdutos';

function App() {
  return (
    
    <Routes>
      <Route path='/' element ={
        <CadastroProdutos/>
      }>

      </Route>
    </Routes>

  );
}

export default App;
