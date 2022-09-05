import * as React from 'react';
import { Link } from 'react-router-dom';
import LogoIgrAdventista from './../images/igreja-adventista.jpg';
import LogoSocCatolica from './../images/igreja-catolica.jpg';
import LogoAnjResgate from './../images/anjos-resgate.jpg';

function focusInput(e){
    var label = document.querySelector('label[for=' + e.target.id + ']');
    label.style.top  = "-26px";
    label.style.left = "0px";
}

function blurInput(e){
    var label = document.querySelector('label[for=' + e.target.id + ']');
    if(e.target.value == ""){
        label.style.top = "10px";
        label.style.left = "15px";
    }
}

export default function Instituicoes(){
    return (
        <section id="instituicao-pagina">
            <section id="banner">
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h1>Conheça as instituições!</h1>
                            <p>Conheça as insituições e ajude os projetos sociais que estão na nossa plataforma.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="visu-instituicoes">
                <div className='container'>
                    <div className='row'>
                        <form method="POST">
                            <div className="input-group">
                                <div className='col-md-10'>
                                    <label htmlFor="pesquisar">Pesquisar</label>
                                    <input type="text" name="pesquisar" id="pesquisar" className="form-control" aria-describedby="errorPesquisar" onFocus={focusInput} onBlur={blurInput} required/>
                                    <small id="errorPesquisar" className="text-muted">Pesquisa inválida</small>
                                </div>
                                <div className='col-md-2'>
                                    <button className='btn-pesquisar' type='submit'>Pesquisar</button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='card-instituicoes'>
                                <div className='img-largura'>
                                    <Link to="/instituicao/adventista-do-setimo-dia" className='barra-link'>
                                        <img src={LogoIgrAdventista} className="img-fluid" alt='Logo Igr Adventista'/>
                                    </Link>
                                </div>
                                <div className='card-desc-instituicao'>
                                    <p>São Paulo</p>
                                    <h5>Igreja Adventista do Sétimo Dia</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipis cing elit. Integer gravida vitae ultrices urna et porttitor malesuada. Hendrerit diam netus.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='card-instituicoes'>
                                <div className='img-largura'>
                                    <Link to="/instituicao/igreja-catolica-diocese-jundiai" className='barra-link'>
                                        <img src={LogoSocCatolica} className="img-fluid" alt='Logo Soc Catolica'/>
                                    </Link>
                                </div>
                                <div className='card-desc-instituicao'>
                                    <p>Jundiaí, São Paulo</p>
                                    <h5>Igreja Católica - Diocese de Jundiaí</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipis cing elit. Integer gravida vitae ultrices urna et porttitor malesuada. Hendrerit diam netus.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='card-instituicoes'>
                                <div className='img-largura'>
                                    <Link to="/instituicao/anjos-do-resgate" className='barra-link'>
                                        <img src={LogoAnjResgate} className="img-fluid" alt='Logo Anj Resgate'/>
                                    </Link>
                                </div>
                                <div className='card-desc-instituicao'>
                                    <p>Itu, São Paulo</p>
                                    <h5>Anjos do Resgate</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipis cing elit. Integer gravida vitae ultrices urna et porttitor malesuada. Hendrerit diam netus.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='card-instituicoes'>
                                <div className='img-largura'>
                                    <Link to="/instituicao/adventista-do-setimo-dia" className='barra-link'>
                                        <img src={LogoIgrAdventista} className="img-fluid" alt='Logo Igr Adventista'/>
                                    </Link>
                                </div>
                                <div className='card-desc-instituicao'>
                                    <p>São Paulo</p>
                                    <h5>Igreja Adventista do Sétimo Dia</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipis cing elit. Integer gravida vitae ultrices urna et porttitor malesuada. Hendrerit diam netus.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='card-instituicoes'>
                                <div className='img-largura'>
                                    <Link to="/instituicao/igreja-catolica-diocese-jundiai" className='barra-link'>
                                        <img src={LogoSocCatolica} className="img-fluid" alt='Logo Soc Catolica'/>
                                    </Link>
                                </div>
                                <div className='card-desc-instituicao'>
                                    <p>Jundiaí, São Paulo</p>
                                    <h5>Igreja Católica - Diocese de Jundiaí</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipis cing elit. Integer gravida vitae ultrices urna et porttitor malesuada. Hendrerit diam netus.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='card-instituicoes'>
                                <div className='img-largura'>
                                    <Link to="/instituicao/anjos-do-resgate" className='barra-link'>
                                        <img src={LogoAnjResgate} className="img-fluid" alt='Logo Anj Resgate'/>
                                    </Link>
                                </div>
                                <div className='card-desc-instituicao'>
                                    <p>Itu, São Paulo</p>
                                    <h5>Anjos do Resgate</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipis cing elit. Integer gravida vitae ultrices urna et porttitor malesuada. Hendrerit diam netus.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='card-instituicoes'>
                                <div className='img-largura'>
                                    <Link to="/instituicao/adventista-do-setimo-dia" className='barra-link'>
                                        <img src={LogoIgrAdventista} className="img-fluid" alt='Logo Igr Adventista'/>
                                    </Link>
                                </div>
                                <div className='card-desc-instituicao'>
                                    <p>São Paulo</p>
                                    <h5>Igreja Adventista do Sétimo Dia</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipis cing elit. Integer gravida vitae ultrices urna et porttitor malesuada. Hendrerit diam netus.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='card-instituicoes'>
                                <div className='img-largura'>
                                    <Link to="/instituicao/igreja-catolica-diocese-jundiai" className='barra-link'>
                                        <img src={LogoSocCatolica} className="img-fluid" alt='Logo Soc Catolica'/>
                                    </Link>
                                </div>
                                <div className='card-desc-instituicao'>
                                    <p>Jundiaí, São Paulo</p>
                                    <h5>Igreja Católica - Diocese de Jundiaí</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipis cing elit. Integer gravida vitae ultrices urna et porttitor malesuada. Hendrerit diam netus.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='card-instituicoes'>
                                <div className='img-largura'>
                                    <Link to="/instituicao/anjos-do-resgate" className='barra-link'>
                                        <img src={LogoAnjResgate} className="img-fluid" alt='Logo Anj Resgate'/>
                                    </Link>
                                </div>
                                <div className='card-desc-instituicao'>
                                    <p>Itu, São Paulo</p>
                                    <h5>Anjos do Resgate</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipis cing elit. Integer gravida vitae ultrices urna et porttitor malesuada. Hendrerit diam netus.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-2 offset-md-5'>
                            <Link to="/instituicoes" className='btn-carregar-mais'>Carregar Mais</Link>
                        </div>
                    </div>

                </div>
            </section>
        </section>
    );
}