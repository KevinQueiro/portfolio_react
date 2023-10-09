import React, { useState } from 'react'
import { deleteApi } from '../../../../api'

const DeleteForm = ({props}) => {
    
    const [form, setForm] = useState({
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
        deleteApi(props.userId, props.data._id, props.wath, form, props.forRefresh)
    }

    return (
        <form>
            <fieldset className='edu-form'>
                <label for="password">Password: <input onChange={handleInputChange} value={form.password} id="password" name="password" type="password" required className='form-input' /></label>
            </fieldset>
            <button onClick={handleSubmit} type="submit">Eliminar</button>
        </form>
    )
}

export default DeleteForm