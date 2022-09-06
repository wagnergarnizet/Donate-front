import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import './scss/admin/App.scss';
import Navbar from './pages/admin/helpers/Navbar';
import Footer from './pages/admin/helpers/Footer';

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Routes>
            <Route path="/" element={ <Dashboard/> }></Route>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

function Dashboard(){
    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    );
}

export default App;