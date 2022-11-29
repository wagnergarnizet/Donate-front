import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';
import BgImage from './../../images/bg-contato.png';

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

export default function Contato(){
    return(
        <section></section>
        // <section id="contato">
        //     {/* <img src={BgImage} alt="Background" className="background"/>
        //     <div className='container'>
        //         <div className='row'>
        //             <div className='col-md-5'>
        //                 <h2>Quer receber atualização de uma institução?</h2>
        //                 <p>Se cadastre e saiba quando uma campanha for aberta</p>
        //             </div>
        //             <div className='col-md-5 offset-md-2'>
        //                 <form method="POST">
        //                     <div className="form-group">
        //                         <label htmlFor="nome">Nome</label>
        //                         <input type="text" name="nome" id="nome" className="form-control" aria-describedby="errorNome" onFocus={focusInput} onBlur={blurInput} required/>
        //                         <small id="errorNome" className="text-muted">Nome inválido</small>
        //                     </div>
        //                     <div className="form-group">
        //                         <label htmlFor="email">E-mail</label>
        //                         <input type="email" name="email" id="email" className="form-control" aria-describedby="errorEmail" onFocus={focusInput} onBlur={blurInput} required/>
        //                         <small id="errorEmail" className="text-muted">E-mail inválido</small>
        //                     </div>
        //                     <div className="form-group">
        //                         <select className="form-control" name="insituicao" id="insituicao" required>
        //                             <option disabled value="">Institução</option>
        //                             <option value="Institução 1">Institução 1</option>
        //                             <option value="Institução 2">Institução 2</option>
        //                         </select>
        //                     </div>
        //                     <button className='btn' type='submit'>Participar!</button>
        //                 </form>
        //             </div>
        //         </div>
        //     </div> */}
        // </section>
    );
}