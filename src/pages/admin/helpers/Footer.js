import * as React from 'react';
import Logo from './../../../images/logo-footer.png';

export default function Footer(){
    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-3 mb-mob">
                        <img src={Logo} alt="Logo footer" className="img-fluid"></img>
                        <p className="mt-10">Donate Management - é uma plataforma onde as instituições poderão organizar o recebimento das doações, realizar sua gestão e promover campanhas para arrecadação de suprimentos.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}