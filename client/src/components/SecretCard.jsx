import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SecretCard = (props) => {

    const { id, title, content, age, gender, date, likes, comments } = props

    const [like, setLike] = useState(likes);
    const [allowLikes, setAllowLikes] = useState(true);

    // console.log(localStorage.clear())

    const formattedDate = new Date(date).toLocaleDateString(
        'es-CL',
        {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'America/Santiago',
            hour: 'numeric',
            minute: 'numeric'
        }
    )

    const handleLikes = () => {
        if (allowLikes) {
            setLike(like + 1)
            setAllowLikes(false)
            localStorage.setItem(id, id);
            axios.put(`http://localhost:8000/api/secrets/update/${id}`, {
                likes: like + 1
            })
        }
    }

    const disableButton = () => {
        if (localStorage.getItem(id)) {
            setAllowLikes(false)
            buttonRef.current.disabled = true
            buttonRef.current.children[0].className='fa-solid fa-heart'
        } else {
            setAllowLikes(true)
            buttonRef.current.disabled = false
            buttonRef.current.children[0].className='fa-regular fa-heart'
        }
    }

    // const disableButton = () => {
    //     localStorage.getItem(id) ? buttonRef.current.disabled = true : buttonRef.current.disabled = false
    // }

    const buttonRef = useRef(null);

    useEffect(() => {
        setLike(likes);
    }, [likes]);

    useEffect(() => {
        disableButton();
    }, [allowLikes, likes]);

    return (
        <div className='secret-card'>
            {/* <p># {number}</p> */}
            <div className='info'>
                {gender === 'm' && <i className="fa-solid fa-mars"></i>}
                {gender === 'f' && <i className="fa-solid fa-venus"></i>}
                {gender === 'o' && <i className="fa-solid fa-genderless"></i>}
                <p>{age} años,</p>
                <p className='date'>confesado el {formattedDate}</p>
            </div>
            <p className='title'><Link to={`/leer/${id}`}>{title}</Link></p>
            <p className='content'>{content}</p>
            <div className="actions">
                <button onClick={() => handleLikes()} ref={buttonRef}><i className="fa-regular fa-heart"></i>{like}</button>
                <div>
                    {comments.length === 1 && <Link to={`/leer/${id}`}>{comments.length} comentario</Link>} 
                    {(comments.length === 0 || comments.length > 1 && comments.length < 10) && <Link to={`/leer/${id}`}>{comments.length} comentarios</Link>} 
                    {comments.length >= 10 && <span><i className="fas fa-fire"></i><Link to={`/leer/${id}`}>{comments.length} comentarios</Link></span>} 
                </div>
            </div>
        </div>
    );
}

export default SecretCard;