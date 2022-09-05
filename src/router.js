import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Instituicoes from './pages/Instituicoes';
export default function Rotas(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/instituicoes" element={<Instituicoes/>}></Route>
            <Route path="/instituicoes/:instituicao" element={<Instituicoes/>}></Route>
        </Routes>
    );
}