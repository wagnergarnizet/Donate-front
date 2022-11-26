import * as React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

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
    const [campanhas, setCampanhas] = useState([]);

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch('/Campanha', requestOptions)
            .then(response => response.json())
            .then(data => {
                setCampanhas(data);
            });
    }, []);

    console.log("Test",campanhas);

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
                        { campanhas.map((campanha) => {
                            return (<div className='col-md-4' key={campanha.id}>
                                <div className='card-campanhas'>
                                    <div className='img-largura'>
                                        <Link to="/campanha/vicentinos" className='barra-link'>
                                            <img src={campanha.logotipo} className="img-fluid" alt='Logo Igr Adventista'/>
                                        </Link>
                                    </div>
                                    <div className='card-desc-campanhas'>
                                        <p>Jundiaí, São Paulo</p>
                                        <h5>{campanha.nome}</h5>
                                        <p>
                                            <Link to="/instituicoes">Igreja Católica - Diocese de Jundiaí</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>)
                        }) }
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