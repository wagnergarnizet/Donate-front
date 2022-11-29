import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from './../../images/logo.png';

function openMenu() {
    if(window.outerWidth < 768){
        var btnMenu = document.querySelector('header button.btn-menu');
        var menu = document.querySelector('header ul');
        var overlay = document.querySelector('header .overlay');
        btnMenu.classList.toggle('active');
        menu.classList.toggle('active');
        overlay.classList.toggle('active');
    }
}

export default function Navbar(){
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-6 col-md-4">
                        <img src={logo} alt="Logo" className='img-fluid'/>
                    </div>
                    <div className="col-6 col-md-8 col-xl-7 offset-xl-1">
                        <button className='btn-menu' onClick={openMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <ul>
                            <li>
                                <NavLink onClick={openMenu} to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
                            </li>
                            <li>
                                <Link onClick={openMenu} to={{pathname: "/", hash: "#sobreNos", state: {fromDashboard: true}}}>Sobre Nós</Link>
                            </li>
                            <li>
                                <NavLink onClick={openMenu} to="/instituicoes" className={({ isActive }) => (isActive ? "active" : "")}>Instituições</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={openMenu} to="/campanhas" className={({ isActive }) => (isActive ? "active" : "")}>Campanhas</NavLink>
                            </li>
                            <li>
                                <Link onClick={openMenu} to="#contato">Contato</Link>
                            </li>
                            <li>
                                <Link onClick={openMenu} to="/admin/login">Login</Link>
                            </li>
                            <li>
                                <Link onClick={openMenu} to="/admin/first-access" className='btn btn-green'>Cadastre-se</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='overlay' onClick={openMenu}></div>
        </header>
    );
}