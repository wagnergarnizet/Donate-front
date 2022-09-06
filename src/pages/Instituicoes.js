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
                        <div className='col-md-6'>
                            <h1>Faça você mesmo a diferença!</h1>
                            <p>Conheça nossas campanhas e saiba como ajudar os projetos sociais que estão na nossa plataforma, a sua ajuda será muito bem vinda!</p>
                            <div className='row buttons'>
                                <div className='col-md-4'>
                                    <a href='#comoAjudar' className='btn btn-como-ajudar'>Como ajudar?</a>
                                </div>
                                <div className='col-md-8'>
                                    <a href='#sobreNos' className='btn-conheca'>
                                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 2C10.5222 2 8.58879 2.58649 6.9443 3.6853C5.29981 4.78412 4.01808 6.3459 3.26121 8.17317C2.50433 10.0004 2.3063 12.0111 2.69215 13.9509C3.078 15.8907 4.03041 17.6725 5.42893 19.0711C6.82746 20.4696 8.60929 21.422 10.5491 21.8079C12.4889 22.1937 14.4996 21.9957 16.3268 21.2388C18.1541 20.4819 19.7159 19.2002 20.8147 17.5557C21.9135 15.9112 22.5 13.9778 22.5 12C22.4971 9.34873 21.4426 6.80688 19.5679 4.93215C17.6931 3.05742 15.1513 2.00291 12.5 2ZM12.5 20C10.9178 20 9.37103 19.5308 8.05544 18.6518C6.73985 17.7727 5.71447 16.5233 5.10896 15.0615C4.50346 13.5997 4.34504 11.9911 4.65372 10.4393C4.9624 8.88743 5.72433 7.46197 6.84315 6.34315C7.96197 5.22433 9.38743 4.4624 10.9393 4.15372C12.4911 3.84504 14.0997 4.00346 15.5615 4.60896C17.0233 5.21447 18.2727 6.23984 19.1518 7.55544C20.0308 8.87103 20.5 10.4177 20.5 12C20.4976 14.121 19.654 16.1544 18.1542 17.6542C16.6544 19.154 14.621 19.9976 12.5 20Z" fill="white"/><path d="M9.5 6.44601V17.554L18.387 12L9.5 6.44601ZM11.5 10.054L14.613 12L11.5 13.946V10.054Z" fill="white"/></svg>
                                        &nbsp;Conheça nossa plataforma 
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <img src={BannerMobile} srcSet={`${BannerMobile} 768w, ${BannerDesktop}`} alt="Banner" className='img-fluid'/>
                        </div>
                    </div>
                </div>
            </section>
            <section id='sobreNos'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h2>Sobre nós</h2>
                            <p>Somos a Debug, uma startup especializada em desenvolvimento de aplicações WEB e Mobile. O nosso objetivo é oferecer aplicações em alta performance e disponibilidade, possibilitando aos nossos clientes qualidade, agilidade e confiabilidade na entrega dos projetos. A excelência dos serviços prestados pela Debug está apoiada em profissionais especializados, processos estabelecidos e uma larga flexibilidade em projetos.</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='card green'>
                                <span className='icon'>
                                    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32.318 20.9193L26 0.790039L19.682 20.9193H0L16.068 32.0156L9.958 51.1133L26 39.3125L42.068 51.1133L35.958 32.0156L52 20.9193H32.318Z" fill="white"/></svg>
                                </span>
                                <h3>Missão</h3>
                                <p>Criar uma plataforma simples com o objetivo de organizar o recolhimento e estoque das doações recebidas pelas instituições beneficentes.</p>
                            </div>
                                <div className='col-md-2'>
                                    <button className='btn-pesquisar' type='submit'>Pesquisar</button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='card'>
                                <span className='icon'>
                                    <svg width="42" height="48" viewBox="0 0 42 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.2 6.09375L22.4 0.628784H0V47.081H5.6V27.9536H19.6L22.4 33.4186H42V6.09375H25.2ZM36.4 27.9536H25.2L22.4 22.4887H5.6V6.09375H19.6L22.4 11.5587H36.4V27.9536Z" fill="#3DBD8A"/></svg>
                                </span>
                                <h3>Visão</h3>
                                <p>Temos a vontade de crescer a plataforma para alcançar todas as instituições de caridade do Brasil e afora e, com isso, aproximar o relacionamento entre doador e beneficiários.</p>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='card'>
                                <span className='icon'>
                                    <img src={IconHeart} alt="Icon Heart" className="img-fluid"/>
                                </span>
                                <h3>Valores</h3>
                                <p>Integridade, confiabilidade e transparência.</p>
                            </div>
                                <div className='card-desc-instituicao'>
                                    <p>Jundiaí, São Paulo</p>
                                    <h5>Igreja Católica - Diocese de Jundiaí</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipis cing elit. Integer gravida vitae ultrices urna et porttitor malesuada. Hendrerit diam netus.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="campanhas">
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-10'>
                            <h2>Veja as Campanhas</h2>
                        </div>
                        <div className='col-md-2'>
                            <Link to="/campanhas" className='btn-campanhas'>Ver todas</Link>
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