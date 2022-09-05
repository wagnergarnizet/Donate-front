import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Instituicoes from './pages/Instituicoes';
import Campanhas from './pages/Campanhas';
import Instituicao from './pages/Instituicao';
export default function Rotas(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/instituicoes" element={<Instituicoes/>}></Route>
            <Route path="/campanhas" element={<Campanhas/>}></Route>
            <Route path="/instituicao/:instituicao" element={<Instituicao/>}></Route>
        </Routes>
    );
}