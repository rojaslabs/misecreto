import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentCard from './CommentCard';

const CommentList = (props) => {

    const { id, comments } = props

    const [newComment, setNewComment] = useState('');
    const [updatedComments, setUpdatedComments] = useState(comments);

    const createComment = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/secrets/update/${id}`, {
            $push: { comments: [{ content: newComment }] }
        })
            .then(res => {
                console.log(res)
                setNewComment('')
            })
    }

    const getComments = () => {
        axios.get(`http://localhost:8000/api/secrets/${id}`)
            .then(res => {
                setUpdatedComments(res.data.secret.comments)
            })
    }

    useEffect(() => {
        getComments()
    }, [newComment])

    return (
        <div className='comment-card'>
            <p className='text-let-your-comment'>Deja tu comentario:</p>
            <form onSubmit={createComment}>
                <div>
                    <label htmlFor="comment"></label>
                    <textarea name="comment" value={newComment} onChange={(e) => setNewComment(e.target.value)} minLength={10} rows="2" required placeholder='Mínimo de 10 caracteres' />
                </div>
                <div className='actions'>
                    <button className='btn-comment' type='submit' disabled={newComment.length < 11}>Comentar</button>
                </div>
            </form>
            {updatedComments?.map((comment, i) => (
                <CommentCard
                    key={i}
                    id={comment._id}
                    content={comment.content}
                    date={comment.timestamp}
                />
            ))}
        </div>
    );
}

export default CommentList;
