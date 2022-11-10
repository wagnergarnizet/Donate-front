import React, { useState } from 'react';
import imgLogo from './../../images/admin/logo.png';
import FirstStep from './firstSteps/first';
import SecondStep from './firstSteps/second';
import ThirdStep from './firstSteps/third';

export default function FirstAccess(){
    const [activeTab, setActiveTab] = useState("first");

    function ActiveStep(props){
        const step = props.step;
        if (step === "first") {
            return <FirstStep/>;
        }else if(step === "second") {
            return <SecondStep/>;
        }else if(step === "third") {
            return <ThirdStep/>;
        }
    }

    const handleStep1 = () => {
        setActiveTab("first");
    };
    const handleStep2 = () => {
        setActiveTab("second");
    };
    const handleStep3 = () => {
        setActiveTab("third");
    };

    return (
        <section id="firstAccess" className='Admin'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8 offset-md-2'>
                        <div className='bg-card'>
                            <img src={imgLogo} alt="Logo" className='img-fluid'/>
                            <p>Preencha os dados abaixo para fazer o seu cadastro</p>
                            <div className='flex-center'>
                                <button className={activeTab === "first" ? "active group" : "group"} id="btnFirstStep">
                                    <span className='number'>1</span>
                                    <span>Dados do usuário</span>
                                </button>
                                <span className='trace'></span>
                                <button className={activeTab === "second" ? "active group" : "group"} onClick={handleStep2} id="btnSecondStep">
                                    <span className='number'>2</span>
                                    <span>Dados da Instituição</span>
                                </button>
                                <span className='trace'></span>
                                <button className={activeTab === "third" ? "active group" : "group"} onClick={handleStep3} id="btnThirdStep">
                                    <span className='number'>3</span>
                                    <span>Envio</span>
                                </button>
                            </div>
                            <ActiveStep step={activeTab} />
                        </div>
                    </div>
                </div>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.4501 17.8496L3.8501 12.2496L4.9251 11.1746L9.4501 15.6996L19.0501 6.09961L20.1251 7.17461L9.4501 17.8496Z" fill="white"/></svg>
        </section>
    );
}