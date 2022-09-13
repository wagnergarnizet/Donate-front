import * as React from 'react';
import { Link } from 'react-router-dom';
import LogoIgrAdventista from './../images/igreja-adventista.jpg';
import MapImg from './../images/map.png';
import LogoAdra from './../images/adra-logo.jpg';
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

    var tabs = document.querySelectorAll("#campanha-conteudo ul li");

    var contentTabs = document.querySelectorAll("#campanha-conteudo .content-tab");

    tabs.forEach(function(tab){

        tab.classList.remove("active");

    });


    for(var i=0; i < contentTabs.length; i++){

        contentTabs[i].classList.add("disabled");

    }

    document.getElementById(id).classList.remove("disabled");

    props.target.classList.add("active");

}

export default function Campanha(){
    return (
        <section id="campanha-conteudo">
            <section id="banner">
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h1>Agência Adventista de Desenvolvimento e Recursos Assistenciais </h1>
                            <p>Conheça nossas campanhas e saiba como ajudar os projetos sociais que estão na nossa plataforma, a sua ajuda será muito bem vinda!</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="content-campanha">
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <ul>
                                <li onClick={(changeTab)} className="tab active" data-href="objetivo"> Objetivo </li>
                                <li onClick={(changeTab)} className="tab" data-href="instituicao_responsavel"> Instituição </li>
                                <li onClick={(changeTab)} className="tab" data-href="doacoes"> Doações </li>
                            </ul>

                            <div id="objetivo" className="content-tab">
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <Link to="/campanha/ADRA" className='barra-link'>
                                            <img src={LogoAdra} className="img-fluid rounded" alt='Logo ADRA'/>
                                        </Link>
                                    </div>
                                
                                    <div className='col-md-8'>
                                        <p>
                                            Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div id="instituicao_responsavel" className="content-tab disabled">
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <div className="title-tab">
                                            <p>Igreja Adventista do Sétimo Dia</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-md-4'>
                                        <Link to="/instituicao/igreja-adventista-setimo-dia" className='barra-link'>
                                            <img src={LogoIgrAdventista} className="img-fluid rounded" alt='Logo ADRA'/>
                                        </Link>
                                    </div>
                                
                                    <div className='col-md-8'>
                                        <p>
                                            Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
                                        </p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className='col-md-4'>
                                        <Link to="/instituicao/adventista-do-setimo-dia" className='btn-carregar-mais'>Conhecer Instituição</Link>
                                    </div>
                                </div>

                            </div>

                            <div id="doacoes" className="content-tab disabled">
                                <div className="row">
                                    <div className='col-md-4'>
                                        <Link to="/campanhas" className='btn-carregar-mais'>Carregar Mais</Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </section>
    );
}