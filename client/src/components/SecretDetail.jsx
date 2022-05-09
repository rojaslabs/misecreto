import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import SecretCard from './SecretCard';
import CommentList from './CommentList';
import Loading from './Loading';

const SecretDetail = () => {

    const [secrets, setSecrets] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const { id } = useParams()
    let navigate = useNavigate()

    useEffect(() => {
        getSecret();
    }, []);

    const getSecret = () => {
        setIsLoading(true)
        axios.get(`http://localhost:8000/api/secrets/${id}`)
            .then(res => {
                setIsLoading(false)
                setSecrets([res.data.secret])
                console.log(secrets)
            })
    }

    return (
        <div>
            {!isLoading ? secrets?.map((secret, i) => (
                <div key={i}>
                    <div className='breadcrumb'><Link to='/'><i className="fa-solid fa-house"></i></Link> / {secret.title}</div>
                    <SecretCard
                        id={secret._id}
                        title={secret.title}
                        content={secret.content}
                        age={secret.age}
                        gender={secret.gender}
                        date={secret.createdAt}
                        likes={secret.likes}
                        comments={secret.comments}
                    />
                </div>
            )) : <Loading />}
            {secrets?.map((secret, i) => (
                <CommentList
                    key={i}
                    id={secret._id}
                    comments={secret.comments}
                />
            ))}
        </div>
    );
}

export default SecretDetail;
