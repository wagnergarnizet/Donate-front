import * as React from 'react';

function openEditRegister(){
    document.querySelector(".new").classList.add("active");
    document.querySelector(".overlay").classList.add("active");
}

function checkIfBoxesOpen(props){
    var actives = document.querySelectorAll(".active");
    for(var i = 0; i < actives.length; i++){
        actives[i].classList.remove("active");
    }
}

export default function Estoque(){
    return (
        <section className='content' id="estoque">
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='bg-white'>
                            <h1>Estoque</h1>
                            <div className='legendas'>
                                <p>Legenda:</p>
                                <p><span className='status green'></span> Estoque OK</p>
                                <p><span className='status yellow'></span> Estoque baixo</p>
                                <p><span className='status red'></span> Estoque crítico</p>
                            </div>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Nome do produto</th>
                                        <th>Quantidade</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td scope="row"><span className='status green'></span></td>
                                        <td>Arroz</td>
                                        <td>50 kg</td>
                                        <td>
                                            <button className='btnEdit' onClick={(openEditRegister)}>
                                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 15.2496V18.9996H3.75L14.81 7.93957L11.06 4.18957L0 15.2496ZM17.71 5.03957C18.1 4.64957 18.1 4.01957 17.71 3.62957L15.37 1.28957C14.98 0.89957 14.35 0.89957 13.96 1.28957L12.13 3.11957L15.88 6.86957L17.71 5.03957Z" fill="#444444"/></svg>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="row"><span className='status yellow'></span></td>
                                        <td>Feijão</td>
                                        <td>5 kg</td>
                                        <td>
                                            <button className='btnEdit' onClick={(openEditRegister)}>
                                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 15.2496V18.9996H3.75L14.81 7.93957L11.06 4.18957L0 15.2496ZM17.71 5.03957C18.1 4.64957 18.1 4.01957 17.71 3.62957L15.37 1.28957C14.98 0.89957 14.35 0.89957 13.96 1.28957L12.13 3.11957L15.88 6.86957L17.71 5.03957Z" fill="#444444"/></svg>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="row"><span className='status red'></span></td>
                                        <td>Farinha</td>
                                        <td>27 kg</td>
                                        <td>
                                            <button className='btnEdit' onClick={(openEditRegister)}>
                                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 15.2496V18.9996H3.75L14.81 7.93957L11.06 4.18957L0 15.2496ZM17.71 5.03957C18.1 4.64957 18.1 4.01957 17.71 3.62957L15.37 1.28957C14.98 0.89957 14.35 0.89957 13.96 1.28957L12.13 3.11957L15.88 6.86957L17.71 5.03957Z" fill="#444444"/></svg>
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
                <h2>Editar Movimentação</h2>
                <span className='line'></span>
                <form>
                    <div className='form-group'>
                        <label htmlFor="tipo">Tipo de Movimentação</label>
                        <select name='tipo' className='form-control'>
                            <option value="" disabled>Selecione a Movimentação</option>
                            <option value="entrada">Entrada</option>
                            <option value="saida">Saída</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="quantidade">Quantidade</label>
                        <input type="number" nome="quantidade" id='quantidade' className='form-control' required/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="obs">Observações</label>
                        <textarea name="obs" id='obs' className='form-control' required></textarea>
                    </div>
                    <button type="submit" className='btn-submit'>Salvar</button>
                    <button type="button" className='btn-cancel' onClick={(checkIfBoxesOpen)}>Cancelar</button>
                </form>
            </div>
            <div className='overlay' onClick={(checkIfBoxesOpen)}></div>
        </section>
    );
}