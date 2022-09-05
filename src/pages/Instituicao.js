import * as React from 'react';
import { Link } from 'react-router-dom';
import LogoIgrAdventista from './../images/igreja-adventista.jpg';
import MapImg from './../images/map.png';
import { tab } from '@testing-library/user-event/dist/tab';

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

function changeTab(props){

    var id = props.target.getAttribute("data-href");

    var tabs = document.querySelectorAll("#instituicao-conteudo ul li");

    var contentTabs = document.querySelectorAll("#instituicao-conteudo .content-tab");

    tabs.forEach(function(tab){

        tab.classList.remove("active");

    });


    for(var i=0; i < contentTabs.length; i++){

        contentTabs[i].classList.add("disabled");

    }

    document.getElementById(id).classList.remove("disabled");

    props.target.classList.add("active");

}

export default function Instituicao(){
    return (
        <section id="instituicao-conteudo">
            <section id="banner">
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h1>Igreja Adventista do Sétimo Dia</h1>
                            <p>Conheça nossas campanhas e saiba como ajudar os projetos sociais que estão na nossa plataforma, a sua ajuda será muito bem vinda!</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="content-instuicao">
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <ul>
                                <li onClick={(changeTab)} className="tab active" data-href="sobre-nos"> Sobre nós </li>
                                <li onClick={(changeTab)} className="tab" data-href="localizacao"> Localização </li>
                                <li onClick={(changeTab)} className="tab" data-href="campanhas"> Campanhas </li>
                            </ul>

                            <div id="sobre-nos" className="content-tab">
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <Link to="/instituicao/adventista-do-setimo-dia" className='barra-link'>
                                            <img src={LogoIgrAdventista} className="img-fluid rounded" alt='Logo Igr Adventista'/>
                                        </Link>
                                    </div>
                                
                                    <div className='col-md-8'>
                                        <p>
                                            Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div id="localizacao" className="content-tab disabled">
                                <div className='row'>
                                    <div className='col-md-5'>
                                        <div className="title-tab">
                                            <p>Localização</p>
                                        </div>
                                        <div className="desc-location">
                                            <p>
                                                Rua: Lorem Input, 127 <br></br>
                                                Bairro Guaianases, São Paulo - SP <br></br>
                                                CEP: 000000-000 <br></br>
                                                <br></br>
                                                Telefone: (XX) XXXX-XXXX<br></br>
                                                WhatsApp: (XX) XXXXX-XXXX<br></br>
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-md-7'>
                                        <Link to="#" className='barra-link'>
                                            <img src={MapImg} className="img-fluid rounded" alt='Mapa Img'/>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div id="campanhas" className="content-tab disabled">
                                <p>
                                    Campanhas
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </section>
    );
}