import React from 'react';
import SecretForm from '../components/SecretForm';
import { useNavigate } from 'react-router-dom';

const Contar = () => {
    
    let navigate = useNavigate()

    const backToMain = () => {
        navigate('/')
    }

    return (
        <div>
            <SecretForm />
            {/* <button onClick={backToMain}>Volver al Inicio</button> */}
        </div>
    );
}

export default Contar;
