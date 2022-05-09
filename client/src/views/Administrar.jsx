import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AdminSecretList from '../components/AdminSecretList';

const Administrar = () => {

    const [secrets, setSecrets] = useState();

    useEffect(() => {
        axios.get('http://localhost:8000/api/secrets/all')
            .then(res => {
                setSecrets(res.data.secrets)
                console.log(secrets)
            })
    }, []);

    const deleteSecret = (id) => {
        axios.delete(`http://localhost:8000/api/secrets/delete/${id}`)
            .then(res => {
                console.log(res)
                setSecrets(secrets.filter(secret => secret._id !== id))
            })
    }

    return (
        <div>
            <table className='table-admin'>
                <thead>
                    <tr>
                        {/* <th>ID</th> */}
                        <th>gender</th>
                        <th>age</th>
                        <th>title</th>
                        <th>content</th>
                        <th>date</th>
                        <th><i className="fas fa-heart"></i></th>
                        <th><i className="far fa-comments"></i></th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {secrets?.map((secret, i) =>
                        <tr key={i}>
                            <AdminSecretList
                                id={secret._id}
                                gender={secret.gender}
                                age={secret.age}
                                title={secret.title}
                                content={secret.content}
                                date={secret.createdAt}
                                likes={secret.likes}
                                comments={secret.comments.length}
                                deleteSecret={() => deleteSecret(secret._id)}
                            />
                        </tr>
                        // <tr key={i}>
                        //     {/* <td>{secret._id}</td> */}
                        //     <td>{secret.gender}</td>
                        //     <td>{secret.age}</td>
                        //     <td><Link to={`/leer/${secret._id}`}>{secret.title}</Link></td>
                        //     <td>{secret.content}</td>
                        //     <td>{secret.createdAt}</td>
                        //     <td>{secret.likes}</td>
                        //     <td>{secret.comments.length}</td>
                        //     <td><button onClick={() => deleteSecret(secret._id)}><i className="far fa-trash-alt"></i></button></td>
                        // </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Administrar;
