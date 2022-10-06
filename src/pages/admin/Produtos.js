import * as React from 'react';
import imgArroz from './../../images/admin/arroz.png';

function openProduct(){
    document.querySelector(".new").classList.add("active");
    document.querySelector(".overlay").classList.add("active");
}

function deleteProduct(){
    if(window.confirm("Deseja mesmo apagar esse produto?")){
        window.alert("Produto excluído!");
    }
}

function checkIfBoxesOpen(props){
    var actives = document.querySelectorAll(".active");
    for(var i = 0; i < actives.length; i++){
        actives[i].classList.remove("active");
    }
}

export default function Produtos(){
    return (
        <section className='content' id="produtos">
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='bg-white'>
                            <div className='row'>
                                <div className='col-md-12 title-page'>
                                    <h1>Gerenciar Produtos</h1>
                                    <button className='btn-new' onClick={(openProduct)}>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.325 15H10.825V10.85H15V9.35H10.825V5H9.325V9.35H5V10.85H9.325V15ZM10 20C8.58333 20 7.26667 19.7458 6.05 19.2375C4.83333 18.7292 3.775 18.025 2.875 17.125C1.975 16.225 1.27083 15.1667 0.7625 13.95C0.254167 12.7333 0 11.4167 0 10C0 8.6 0.254167 7.29167 0.7625 6.075C1.27083 4.85833 1.975 3.8 2.875 2.9C3.775 2 4.83333 1.29167 6.05 0.775C7.26667 0.258333 8.58333 0 10 0C11.4 0 12.7083 0.258333 13.925 0.775C15.1417 1.29167 16.2 2 17.1 2.9C18 3.8 18.7083 4.85833 19.225 6.075C19.7417 7.29167 20 8.6 20 10C20 11.4167 19.7417 12.7333 19.225 13.95C18.7083 15.1667 18 16.225 17.1 17.125C16.2 18.025 15.1417 18.7292 13.925 19.2375C12.7083 19.7458 11.4 20 10 20ZM10 18.5C12.3333 18.5 14.3333 17.6667 16 16C17.6667 14.3333 18.5 12.3333 18.5 10C18.5 7.66667 17.6667 5.66667 16 4C14.3333 2.33333 12.3333 1.5 10 1.5C7.66667 1.5 5.66667 2.33333 4 4C2.33333 5.66667 1.5 7.66667 1.5 10C1.5 12.3333 2.33333 14.3333 4 16C5.66667 17.6667 7.66667 18.5 10 18.5Z" fill="white"/></svg>
                                        ADICIONAR Produto
                                    </button>
                                </div>
                            </div>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Nome do produto</th>
                                        <th>Tipo de medida</th>
                                        <th>Categoria</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td scope="row">
                                            <img src={imgArroz} alt="Arroz" className='img-fluid'/>
                                        </td>
                                        <td>Arroz</td>
                                        <td>kg</td>
                                        <td>Alimento não percível</td>
                                        <td>
                                            <button className='btnEdit' onClick={(openProduct)}>
                                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 15.2496V18.9996H3.75L14.81 7.93957L11.06 4.18957L0 15.2496ZM17.71 5.03957C18.1 4.64957 18.1 4.01957 17.71 3.62957L15.37 1.28957C14.98 0.89957 14.35 0.89957 13.96 1.28957L12.13 3.11957L15.88 6.86957L17.71 5.03957Z" fill="#444444"/></svg>
                                            </button>
                                            <button className='btnDelete' onClick={(deleteProduct)}>
                                                <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 6V16H3V6H11ZM9.5 0H4.5L3.5 1H0V3H14V1H10.5L9.5 0ZM13 4H1V16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4Z" fill="#201F20" fill-opacity="0.8"/></svg>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="row">
                                            <img src={imgArroz} alt="Arroz" className='img-fluid'/>
                                        </td>
                                        <td>Arroz</td>
                                        <td>kg</td>
                                        <td>Alimento não percível</td>
                                        <td>
                                            <button className='btnEdit' onClick={(openProduct)}>
                                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 15.2496V18.9996H3.75L14.81 7.93957L11.06 4.18957L0 15.2496ZM17.71 5.03957C18.1 4.64957 18.1 4.01957 17.71 3.62957L15.37 1.28957C14.98 0.89957 14.35 0.89957 13.96 1.28957L12.13 3.11957L15.88 6.86957L17.71 5.03957Z" fill="#444444"/></svg>
                                            </button>
                                            <button className='btnDelete' onClick={(deleteProduct)}>
                                                <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 6V16H3V6H11ZM9.5 0H4.5L3.5 1H0V3H14V1H10.5L9.5 0ZM13 4H1V16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4Z" fill="#201F20" fill-opacity="0.8"/></svg>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="row">
                                            <img src={imgArroz} alt="Arroz" className='img-fluid'/>
                                        </td>
                                        <td>Arroz</td>
                                        <td>kg</td>
                                        <td>Alimento não percível</td>
                                        <td>
                                            <button className='btnEdit' onClick={(openProduct)}>
                                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 15.2496V18.9996H3.75L14.81 7.93957L11.06 4.18957L0 15.2496ZM17.71 5.03957C18.1 4.64957 18.1 4.01957 17.71 3.62957L15.37 1.28957C14.98 0.89957 14.35 0.89957 13.96 1.28957L12.13 3.11957L15.88 6.86957L17.71 5.03957Z" fill="#444444"/></svg>
                                            </button>
                                            <button className='btnDelete' onClick={(deleteProduct)}>
                                                <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 6V16H3V6H11ZM9.5 0H4.5L3.5 1H0V3H14V1H10.5L9.5 0ZM13 4H1V16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4Z" fill="#201F20" fill-opacity="0.8"/></svg>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div id="newMov" className='new'>
                <h2>Adicionar produto</h2>
                <span className='line'></span>
                <form>
                    <div className='form-group'>
                        <label htmlFor="nome">Nome do produto *</label>
                        <input type="text" nome="nome" id='nome' className='form-control' required/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="tipoMedida">Tipo de medida *</label>
                        <input type="text" nome="tipoMedida" id='tipoMedida' className='form-control' required/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="perfil">Perfil*</label>
                        <select name='perfil' className='form-control'>
                            <option value="" disabled>Selecione o Perfil</option>
                            <option value="entrada">Entrada</option>
                            <option value="saida">Saída</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="imagem">Imagem do produto</label>
                        <input type="file" name="imagem" id='imagem' className='form-control' required/>
                    </div>
                    <button type="submit" className='btn-submit'>Salvar</button>
                    <button type="button" className='btn-cancel' onClick={(checkIfBoxesOpen)}>Cancelar</button>
                </form>
            </div>
            <div className='overlay' onClick={(checkIfBoxesOpen)}></div>
        </section>
    );
}