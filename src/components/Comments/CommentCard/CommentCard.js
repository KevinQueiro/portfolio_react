import React from 'react'
import fecha from '../../../utils/fecha'
import './CommentCard.css';

const CommentCard = ({ props }) => {

    return (
        <div className="CommentCard">
            <div className="name">{props.name}</div>
            <div className="createdAt">{fecha(props.createdAt)}</div>
            <div className="comment">{props.comment}</div>
        </div>
    )
}

export default CommentCard