import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cadastro from './pages/Cadastro';

function App() {
  return (
    
    <Routes>
      <Route path='/' element ={
        <Cadastro/>
      }>

      </Route>
    </Routes>

  );
}

export default App;
