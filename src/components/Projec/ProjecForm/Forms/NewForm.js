import React, { useState } from 'react'
import { newApi } from '../../../../api'

const NewForm = ({props}) => {
    
    const [form, setForm] = useState({
        name: '',
        description: '',
        photo: '',
        password: ''
    })
    
    const handleInputChange = (e) => {
        e.preventDefault()
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        newApi(props.userId, props.wath, form, props.forRefresh, props.forClose)
    }

    return (
        <form>
            <fieldset className='edu-form'>
                <label htmlFor="name">Titulo: <input onChange={handleInputChange} id="name" name="name" type="text" required className='form-input' /></label>
                <label htmlFor="description">Descripccion: <input onChange={handleInputChange} id="description" name="description" type="text" required className='form-input' /></label>
                <label htmlFor="photo">Foto: <input onChange={handleInputChange} id="photo" name="photo" type="text" required className='form-input' /></label>
                <label htmlFor="password">Password: <input onChange={handleInputChange} id="password" name="password" type="password" required className='form-input' /></label>
            </fieldset>
            <button onClick={handleSubmit} type="submit">Confirmar</button>
        </form>
    )
}

export default NewForm

