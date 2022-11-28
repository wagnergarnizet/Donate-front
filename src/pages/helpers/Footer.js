import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from './../../images/logo-footer.png';
import Whatsapp from './../../images/whatsapp-icon.png';
import Check from './../../images/check.png';

export default function Footer(){
    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-3 mb-mob">
                        <img src={Logo} alt="Logo footer" className="img-fluid"></img>
                        <p className="mt-10">Donate Management - é uma plataforma onde as instituições poderão organizar o recebimento das doações, realizar sua gestão e promover campanhas para arrecadação de suprimentos.</p>
                    </div>
                    <div className="col-12 col-md-3 mb-mob">
                        <h3>Contato</h3>
                        <div className="row">
                            <div className="col-1">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C10.1441 2.00212 8.36489 2.7403 7.05259 4.05259C5.7403 5.36489 5.00212 7.14413 5 9C5 14.353 11.036 20.45 11.293 20.707L12 21.414L12.707 20.707C12.964 20.45 19 14.353 19 9C18.9979 7.14413 18.2597 5.36489 16.9474 4.05259C15.6351 2.7403 13.8559 2.00212 12 2ZM12 18.533C10.471 16.825 7 12.553 7 9C7 7.67392 7.52678 6.40215 8.46447 5.46447C9.40215 4.52678 10.6739 4 12 4C13.3261 4 14.5979 4.52678 15.5355 5.46447C16.4732 6.40215 17 7.67392 17 9C17 12.546 13.527 16.823 12 18.533Z" fill="#50FAA5"/><path d="M12 6C11.4067 6 10.8266 6.17595 10.3333 6.50559C9.83994 6.83524 9.45543 7.30377 9.22836 7.85195C9.0013 8.40013 8.94189 9.00333 9.05765 9.58527C9.1734 10.1672 9.45912 10.7018 9.87868 11.1213C10.2982 11.5409 10.8328 11.8266 11.4147 11.9424C11.9967 12.0581 12.5999 11.9987 13.1481 11.7716C13.6962 11.5446 14.1648 11.1601 14.4944 10.6667C14.8241 10.1734 15 9.59334 15 9C15 8.20435 14.6839 7.44129 14.1213 6.87868C13.5587 6.31607 12.7957 6 12 6ZM12 10C11.8022 10 11.6089 9.94135 11.4444 9.83147C11.28 9.72159 11.1518 9.56541 11.0761 9.38268C11.0004 9.19996 10.9806 8.99889 11.0192 8.80491C11.0578 8.61093 11.153 8.43275 11.2929 8.29289C11.4327 8.15304 11.6109 8.0578 11.8049 8.01921C11.9989 7.98063 12.2 8.00043 12.3827 8.07612C12.5654 8.15181 12.7216 8.27998 12.8315 8.44443C12.9414 8.60888 13 8.80222 13 9C13 9.26522 12.8946 9.51957 12.7071 9.70711C12.5196 9.89464 12.2652 10 12 10Z" fill="#50FAA5"/></svg>
                            </div>
                            <div className="col-11">
                                <p>Av. Rudge, 315 - Bom Retiro<br></br>São Paulo - SP, 01133-000</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 4V20H22V4H2ZM9.981 13.7L12 15.267L14.019 13.7L19.4 18H4.6L9.981 13.7ZM4 15.919V9.044L8.357 12.433L4 15.919ZM15.643 12.433L20 9.045V15.919L15.643 12.433ZM20 6V6.511L12 12.733L4 6.511V6H20Z" fill="#50FAA5"/></svg>
                            </div>
                            <div className="col-11">
                                <a href="mailto:equipe_debug@gmail.com" target="_blank" rel="noreferrer" className="text-decoration-none"><p>equipe_debug@gmail.com</p></a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.191 15.489L22.153 14.662L15.67 13.736L14.355 16.31C12.9666 15.5283 11.6974 14.5517 10.586 13.41C9.43159 12.3004 8.44792 11.0259 7.667 9.62801L10.467 8.22801L7.667 1.70801L6.907 1.81801C5.61986 1.99531 4.42738 2.59296 3.515 3.51801C0.342 6.68701 1.585 12.9 6.343 17.657C9.325 20.638 12.876 22.239 15.894 22.238C16.7376 22.2674 17.5784 22.1274 18.367 21.8263C19.1555 21.5252 19.8757 21.0691 20.485 20.485C21.1074 19.8208 21.5813 19.0319 21.8755 18.1705C22.1696 17.3092 22.2772 16.3951 22.191 15.489ZM19.071 19.071C16.771 21.371 11.59 20.071 7.757 16.243C3.924 12.415 2.629 7.22901 4.929 4.92901C5.35774 4.49451 5.88248 4.16672 6.461 3.97201L7.881 7.28501L6.774 7.83801C6.5342 7.95811 6.32087 8.12498 6.14655 8.3288C5.97224 8.53262 5.84048 8.76926 5.75904 9.02478C5.67759 9.28031 5.6481 9.54955 5.67231 9.81664C5.69652 10.0837 5.77394 10.3433 5.9 10.58C6.77535 12.1482 7.87607 13.5794 9.167 14.828C10.4159 16.1045 11.8414 17.1952 13.4 18.067C13.6402 18.1974 13.9041 18.2785 14.1761 18.3054C14.4482 18.3324 14.7228 18.3047 14.984 18.224C15.2394 18.1445 15.476 18.014 15.6796 17.8404C15.8831 17.6668 16.0492 17.4537 16.168 17.214L16.815 15.92L20.182 16.401C20.1436 17.3954 19.7493 18.3429 19.071 19.071Z" fill="#50FAA5"/></svg>
                            </div>
                            <div className="col-11">
                                <a href="tel:01132542200" className="text-decoration-none"><p>+55 (11) 3254-2200</p></a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1">
                                <img src={Whatsapp} alt="Whatsapp" className=""></img>
                            </div>
                            <div className="col-11">
                                <p>+55 (11) 99999-9999</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 mb-mob">
                        <h3>Últimas Atualizações</h3>
                        <div className="row">
                            <div className="col-3">
                                <img src={Check} alt="Check" className="img-fluid"></img>
                            </div>
                            <div className="col-9">
                                <p>Versão 1.1 contém alterações nos cadastros de itens.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <img src={Check} alt="Check" className="img-fluid"></img>
                            </div>
                            <div className="col-9">
                                <p>Versão 1.0 contém atualizações nos cadastro de campanhas.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 mb-mob">
                        <h3>Receba as notificações</h3>
                        <p>Receba as notificações acerca de novas campanhas e faça a dferença!</p>
                        <form method='POST'>
                            <div className="form-group">
                                <label htmlFor="email">Seu E-mail</label>
                                <input type="email" name="email" id="email" className="form-control" placeholder="Digite seu email" aria-describedby="error" required/>
                            </div>
                            <button type="submit" name="submit" id="submit" className="btn">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
}