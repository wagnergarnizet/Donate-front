import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import './scss/admin/App.scss';
import Navbar from './pages/admin/helpers/Navbar';
import Campanhas from './pages/admin/Campanhas';
import Usuarios from './pages/admin/Usuarios';
import Produtos from './pages/admin/Produtos';
import Estoque from './pages/admin/Estoque';

function App() {
  return (
    <div className="Admin">
        <Navbar></Navbar>
        <Routes>
          <Route path="/campanhas" element={ <Campanhas/> }></Route>
          <Route path="/usuarios" element={ <Usuarios/> }></Route>
          <Route path="/produtos" element={ <Produtos/> }></Route>
          <Route path="/estoque" element={ <Estoque/> }></Route>
        </Routes>
    </div>
  );
}

export default App;