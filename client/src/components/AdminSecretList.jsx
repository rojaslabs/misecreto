import React from 'react';
import { Link } from 'react-router-dom';

const AdminSecretList = (props) => {

    const { id, gender, age, title, content, date, likes, comments, deleteSecret } = props

    const formattedDate = new Date(date).toLocaleDateString(
        'es-CL',
        {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            timeZone: 'America/Santiago',
            hour: 'numeric',
            minute: 'numeric'
        }
    )

    return (
        <>
            {/* <td>{secret._id}</td> */}
            <td>{gender}</td>
            <td>{age}</td>
            <td><Link to={`/leer/${id}`}>{title}</Link></td>
            <td>{content}</td>
            <td>{formattedDate}</td>
            <td>{likes}</td>
            <td>{comments}</td>
            <td><button onClick={deleteSecret}><i className="far fa-trash-alt"></i></button></td>
        </>
    );
}

export default AdminSecretList;
