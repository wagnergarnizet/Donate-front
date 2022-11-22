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

export default function Instituicoes(){

    const [instituicoes, setInstituicoes] = useState([]);

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch('/Instituicao', requestOptions)
            .then(response => response.json())
            .then(data => {
                setInstituicoes(data);
            });
    }, []);

    return (
        <section id="instituicao-pagina">
            <section id="banner">
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h1>Conheça as instituições!</h1>
                            <p>Conheça as instituições e ajude os projetos sociais que estão na nossa plataforma.</p>
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
                   

                    <div className='row' >
                        { instituicoes.map((instituicao) => {
                            return (<div className='col-md-4' key={instituicao.id}>
                                <div className='card-instituicoes'>
                                    <div className='img-largura'>
                                        <Link to={"/instituicao/" + instituicao.id} className='barra-link'>
                                            <img src={instituicao.logotipo} className="img-fluid" alt={'Logo ' + instituicao.name}/>
                                        </Link>
                                    </div>
                                    <div className='card-desc-instituicao'>
                                        <p>{instituicao.cidade}</p>
                                        <h5>{instituicao.nome}</h5>
                                        <p>{instituicao.descricao}</p>
                                    </div>
                                </div>
                            </div>)
                        }) }
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