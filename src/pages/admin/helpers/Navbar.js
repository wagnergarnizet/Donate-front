import * as React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../../images/admin/logo-without-letters.png';
import avatar from './../../../images/admin/avatar.png';

function closeMenu(){
    var menu = document.querySelector("header ul.navbarLinks");
    menu.style.left = "-100%";
}

function activeMenu(){
    var menu = document.querySelector("header ul.navbarLinks");
    console.log(menu.style.left);
    if(menu.style.left === "0px"){
        menu.style.left = "-100%";
    }else{
        menu.style.left = "0";
    }
}

export default function Navbar(){
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <img src={logo} alt="Logo" className='img-fluid'/>
                        <button onClick={(activeMenu)} className='btn-burger-menu'>
                            <svg width="28" height="18" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 18V15.75H27.5V18H0.5ZM0.5 10.125V7.875H27.5V10.125H0.5ZM0.5 2.25V0H27.5V2.25H0.5Z" fill="#444444"/></svg>
                        </button>
                        <ul className='navbarLinks'>
                            <li>
                                <Link to='/admin/campanhas' onClick={(closeMenu)}>
                                    Campanhas
                                </Link>
                            </li>
                            <li>
                                <Link to='/admin/estoque' onClick={(closeMenu)}>
                                    Estoque
                                </Link>
                            </li>
                            <li>
                                <Link to='/admin/produtos' onClick={(closeMenu)}>
                                    Produtos
                                </Link>
                            </li>
                            <li>
                                <Link to='/admin/usuarios' onClick={(closeMenu)}>
                                    Usuários
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='col-1'></div>
                    <div className='col-4'>
                        <form action="" method='POST'>
                            <input id="pesquisa" name="pesquisa" type="text" className="form-control" required placeholder="Pesquisar"/>
                            <button className="search" type='submit'>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.0257 12.8473L17.5948 16.4157L16.4157 17.5948L12.8473 14.0257C11.5196 15.09 9.86817 15.6689 8.1665 15.6665C4.0265 15.6665 0.666504 12.3065 0.666504 8.1665C0.666504 4.0265 4.0265 0.666504 8.1665 0.666504C12.3065 0.666504 15.6665 4.0265 15.6665 8.1665C15.6689 9.86817 15.09 11.5196 14.0257 12.8473ZM12.354 12.229C13.4116 11.1414 14.0022 9.68353 13.9998 8.1665C13.9998 4.94317 11.389 2.33317 8.1665 2.33317C4.94317 2.33317 2.33317 4.94317 2.33317 8.1665C2.33317 11.389 4.94317 13.9998 8.1665 13.9998C9.68353 14.0022 11.1414 13.4116 12.229 12.354L12.354 12.229Z" fill="#444444"/></svg>
                            </button>
                        </form>
                    </div>
                    <div className='col-5 flex-display'>
                        {/* <button id='btn-notification' className='btn-icon'>
                            <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.16667 13.9998H13.8333V8.19234C13.8333 4.9565 11.2217 2.33317 8 2.33317C4.77833 2.33317 2.16667 4.9565 2.16667 8.19234V13.9998ZM8 0.666504C12.1417 0.666504 15.5 4.03567 15.5 8.19234V15.6665H0.5V8.19234C0.5 4.03567 3.85833 0.666504 8 0.666504ZM5.91667 16.4998H10.0833C10.0833 17.0524 9.86384 17.5823 9.47314 17.973C9.08244 18.3637 8.55253 18.5832 8 18.5832C7.44747 18.5832 6.91756 18.3637 6.52686 17.973C6.13616 17.5823 5.91667 17.0524 5.91667 16.4998Z" fill="#444444"/></svg>
                        </button> */}
                        <Link to='/admin/first-access' id='btn-new-user' className='btn-icon'>
                            <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.66683 11.8768V13.6185C7.9126 13.3518 7.10539 13.27 6.313 13.38C5.52061 13.4899 4.76616 13.7884 4.11302 14.2503C3.45988 14.7123 2.92712 15.3242 2.55946 16.0347C2.19181 16.7452 2.00001 17.5335 2.00016 18.3335L0.333496 18.3327C0.333238 17.3151 0.56593 16.3109 1.01375 15.3972C1.46156 14.4834 2.11261 13.6843 2.91701 13.061C3.72141 12.4378 4.65781 12.0069 5.65446 11.8015C6.6511 11.5961 7.68155 11.6216 8.66683 11.876V11.8768ZM7.00016 10.8335C4.23766 10.8335 2.00016 8.596 2.00016 5.8335C2.00016 3.071 4.23766 0.833496 7.00016 0.833496C9.76266 0.833496 12.0002 3.071 12.0002 5.8335C12.0002 8.596 9.76266 10.8335 7.00016 10.8335ZM7.00016 9.16683C8.84183 9.16683 10.3335 7.67516 10.3335 5.8335C10.3335 3.99183 8.84183 2.50016 7.00016 2.50016C5.1585 2.50016 3.66683 3.99183 3.66683 5.8335C3.66683 7.67516 5.1585 9.16683 7.00016 9.16683ZM12.0002 14.1668V11.6668H13.6668V14.1668H16.1668V15.8335H13.6668V18.3335H12.0002V15.8335H9.50016V14.1668H12.0002Z" fill="#444444"/></svg>
                        </Link>
                        <span id='menu-bar'></span>
                        <div className='info-user'>
                            <p className='name-user'>Carlos Eduardo</p>
                            <p className='email-user'>carlos@freitas.eti.br</p>
                        </div>
                        <img src={avatar} alt="user avatar"/>
                    </div>
                </div>
            </div>
        </header>
    );
}