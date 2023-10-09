import React, { useState } from 'react'
import { updateApi } from '../../../../api'

const EditForm = ({ props }) => {

    const [form, setForm] = useState({
        name: props.data.name,
        percentage: props.data.percentage,
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
        updateApi(props.userId, props.data._id, props.wath, form, props.forRefresh, props.forClose)
    }

    return (
        <form>
            <fieldset className='edu-form'>
            <label htmlFor="name">Titulo: <input onChange={handleInputChange} value={form.name} id="name" name="name" type="text" required className='form-input' /></label>
                <label htmlFor="percentage">Porcentaje: <input onChange={handleInputChange} value={form.percentage} id="percentage" name="percentage" type="text" required className='form-input' /></label>
                <label htmlFor="password">Password: <input onChange={handleInputChange} id="password" name="password" type="password" required className='form-input' /></label>
            </fieldset>
            <button onClick={handleSubmit} type="submit">Confirmar</button>
        </form>
    )
}

export default EditForm