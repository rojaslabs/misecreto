import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const SecretForm = () => {

    const [form, setForm] = useState({
        title: '',
        content: '',
        age: '',
        gender: ''
    })

    const [errors, setErrors] = useState([])

    let navigate = useNavigate();

    const backToMain = () => {
        navigate('/')
    }

    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        console.log(form)
    }, [form])

    const handleOnSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/secrets/new', form)
            .then(res => {
                console.log('Response', res)
                backToMain()
            })
            .catch(err => {
                console.log(err.response.data)
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

    // const { title, content, age, gender } = form

    return (
        <div className='secret-form'>
            <form onSubmit={handleOnSubmit}>
                <div className="label-double">
                    <label htmlFor="title">Título</label>
                    <div>Máximo: {25 - form.title.length} caracteres</div>
                </div>
                <input type="text" name="title" placeholder="¿De qué se trata?" required onChange={handleForm} />
                <div className="label-double">
                    <label htmlFor="content">Secreto</label>
                    <div>Máximo: {500 - form.content.length} caracteres</div>
                </div>
                <textarea name="content" rows="10" placeholder='¿Cuál es tu secreto?' required onChange={handleForm} />
                <label htmlFor="age">Edad</label>
                <input type="number" name="age" placeholder="¿Cuántos años tienes?" min="5" max="100" required onChange={handleForm} />
                <label htmlFor="gender">Género</label>
                <select name="gender" required onChange={handleForm}>
                    <option value="">¿Con qué género te identificas?</option>
                    <option value="m">Masculino</option>
                    <option value="f">Femenino</option>
                    <option value="o">Otro</option>
                </select>
                <div className="actions"><button className='btn-confess' type="submit">Confesar secreto</button></div>
            </form>
            {errors.map((error, i) => <p className='error' key={i}>{error}</p>)}
        </div>
    );
}

export default SecretForm;
