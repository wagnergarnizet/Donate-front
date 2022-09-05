import React from "react";
import { Link } from 'react-router-dom';

const thirdStep = () => {
    return (
        <div className="thirdStep" id="third">
            <p>Seus dados foram enviados com sucesso!</p>
            <Link to='/admin/login' className='btn'>IR PARA LOGIN</Link>
        </div>
    );
};
export default thirdStep;