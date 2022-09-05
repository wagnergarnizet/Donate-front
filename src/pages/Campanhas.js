import * as React from 'react';
import { Link } from 'react-router-dom';
import Vicentinos from './../images/vicentinos.jpg';
import ResgateCriancas from './../images/resgate-criancas.jpg';
import LerAcolher from './../images/ler-acolher.jpg';

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

export default function Campanhas(){
    return (
        <section id="campanhas-pagina">
            <section id="banner">
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h1>Conheça as campanhas!</h1>
                            <p>Conheça nossas campanhas e saiba como ajudar os projetos sociais que estão na nossa plataforma, a sua ajuda será muito bem vinda!</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="visu-campanhas">
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
                            <div className='card-campanhas'>
                                <div className='img-largura'>
                                    <Link to="/campanhas/vicentinos" className='barra-link'>
                                        <img src={Vicentinos} className="img-fluid" alt='Logo Igr Adventista'/>
                                    </Link>
                                </div>
                                <div className='card-desc-campanhas'>
                                    <p>Jundiaí, São Paulo</p>
                                    <h5>Vicentinos</h5>
                                    <p>
                                        <Link to="/instituicoes">Igreja Católica - Diocese de Jundiaí</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='card-campanhas'>
                                <div className='img-largura'>
                                    <Link to="/campanhas/resgate-criancas" className='barra-link'>
                                        <img src={ResgateCriancas} className="img-fluid" alt='Logo Soc Catolica'/>
                                    </Link>
                                </div>
                                <div className='card-desc-campanhas'>
                                    <p>Itu, São Paulo</p>
                                    <h5>Resgate de crianças</h5>
                                    <p>
                                        <Link to="/instituicoes">Anjos do Resgate</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='card-campanhas'>
                                <div className='img-largura'>
                                    <Link to="/campanhas/ler-e-acolher" className='barra-link'>
                                        <img src={LerAcolher} className="img-fluid" alt='Logo Anj Resgate'/>
                                    </Link>
                                </div>
                                <div className='card-desc-campanhas'>
                                    <p>São Paulo</p>
                                    <h5>Ler e acolher</h5>
                                    <p>
                                        <Link to="/instituicoes">Pilares</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='card-campanhas'>
                                <div className='img-largura'>
                                    <Link to="/campanhas/vicentinos" className='barra-link'>
                                        <img src={Vicentinos} className="img-fluid" alt='Logo Igr Adventista'/>
                                    </Link>
                                </div>
                                <div className='card-desc-campanhas'>
                                    <p>Jundiaí, São Paulo</p>
                                    <h5>Vicentinos</h5>
                                    <p>
                                        <Link to="/instituicoes">Igreja Católica - Diocese de Jundiaí</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='card-campanhas'>
                                <div className='img-largura'>
                                    <Link to="/campanhas/resgate-criancas" className='barra-link'>
                                        <img src={ResgateCriancas} className="img-fluid" alt='Logo Soc Catolica'/>
                                    </Link>
                                </div>
                                <div className='card-desc-campanhas'>
                                    <p>Itu, São Paulo</p>
                                    <h5>Resgate de crianças</h5>
                                    <p>
                                        <Link to="/instituicoes">Anjos do Resgate</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='card-campanhas'>
                                <div className='img-largura'>
                                    <Link to="/campanhas/ler-e-acolher" className='barra-link'>
                                        <img src={LerAcolher} className="img-fluid" alt='Logo Anj Resgate'/>
                                    </Link>
                                </div>
                                <div className='card-desc-campanhas'>
                                    <p>São Paulo</p>
                                    <h5>Ler e acolher</h5>
                                    <p>
                                        <Link to="/instituicoes">Pilares</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='card-campanhas'>
                                <div className='img-largura'>
                                    <Link to="/campanhas/vicentinos" className='barra-link'>
                                        <img src={Vicentinos} className="img-fluid" alt='Logo Igr Adventista'/>
                                    </Link>
                                </div>
                                <div className='card-desc-campanhas'>
                                    <p>Jundiaí, São Paulo</p>
                                    <h5>Vicentinos</h5>
                                    <p>
                                        <Link to="/instituicoes">Igreja Católica - Diocese de Jundiaí</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='card-campanhas'>
                                <div className='img-largura'>
                                    <Link to="/campanhas/resgate-criancas" className='barra-link'>
                                        <img src={ResgateCriancas} className="img-fluid" alt='Logo Soc Catolica'/>
                                    </Link>
                                </div>
                                <div className='card-desc-campanhas'>
                                    <p>Itu, São Paulo</p>
                                    <h5>Resgate de crianças</h5>
                                    <p>
                                        <Link to="/instituicoes">Anjos do Resgate</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='card-campanhas'>
                                <div className='img-largura'>
                                    <Link to="/campanhas/ler-e-acolher" className='barra-link'>
                                        <img src={LerAcolher} className="img-fluid" alt='Logo Anj Resgate'/>
                                    </Link>
                                </div>
                                <div className='card-desc-campanhas'>
                                    <p>São Paulo</p>
                                    <h5>Ler e acolher</h5>
                                    <p>
                                        <Link to="/instituicoes">Pilares</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-2 offset-md-5'>
                            <Link to="/campanhas" className='btn-carregar-mais'>Carregar Mais</Link>
                        </div>
                    </div>

                </div>
            </section>
        </section>
    );
}