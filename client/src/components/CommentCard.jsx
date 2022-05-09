import React from 'react';

const CommentCard = (props) => {

    const { id, content, date } = props;

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
        <div>
            <ul>
                <li>
                    <p>{formattedDate}</p>
                    <p>{content}</p>
                </li>
            </ul>
        </div>
    );
}

export default CommentCard;
