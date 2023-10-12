import React, { useEffect, useState } from 'react'
import { getComments, newComment } from '../../api'
import CommentCard from './CommentCard/CommentCard'
import './Comments.css'

const Comments = () => {

  const [comments, setComments] = useState();
  const [refreshComments, setRefreshComments] = useState();
  const [rows, setRows] = useState(1);
  const [form, setForm] = useState({
    cname: '',
    comment: ''
  })

  useEffect(() => {
    const fetchCommentsFromApi = async () => {
      try {
        const resposeComments = await getComments();
        setComments(resposeComments);
        if(refreshComments){
          setRefreshComments(false)
        }
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    }
    fetchCommentsFromApi()
  }, [refreshComments])

  const forRefreshComments = () => {
    setRefreshComments(true)
  }

  const handleInputChange = (e) => {
    e.preventDefault()
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    if(form.comment.length % 25 === 0 && form.comment.length !== 0){
      setRows(rows + 1)
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    newComment(form, forRefreshComments)
    setForm({
      cname: '',
      comment: ''
    })
  }

  return (
    <div>
      <div>
        {
          comments ?
            <div className='mainComment'>
              <h2>Deja tu comentario:</h2>
              <form className='formComment'>
                <label htmlFor='cname' className='labelComment'>Nombre
                  <input className='text' type='text' value={form.cname} id='cname' name='cname' onChange={handleInputChange} />
                </label>
                <label htmlFor='comment' className='labelComment'>Comentario
                  <textarea className='text' type='text' value={form.comment} id='comment' name='comment' rows={rows} cols={30} onChange={handleInputChange} />
                </label>
                <button className="btnComment" name='new' onClick={handleSubmit}>
                  Comentar
                </button>
              </form>
              <div>
                {
                  comments.map((comment) =>
                    <CommentCard props={comment} key={comment._id}/>
                  )}
              </div>
            </div>
            :
            <h1>Cargando</h1>
        }
      </div>
    </div>
  )
}

export default Comments