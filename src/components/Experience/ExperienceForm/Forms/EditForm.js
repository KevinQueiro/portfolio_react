import React, { useState } from 'react'
import { updateApi } from '../../../../api'
import fecha from '../../../../utils/fecha'

const EditForm = ({ props }) => {

    const [form, setForm] = useState({
        name: props.data.name,
        description: props.data.description,
        initdate: props.data.initdate,
        finaldate: props.data.finaldate,
        photo: props.data.photo,
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
                <label htmlFor="description">Descripccion: <input onChange={handleInputChange} value={form.description} id="description" name="description" type="text" required className='form-input' /></label>
                <label htmlFor="initdate">Fecha Inicial: <input onChange={handleInputChange} value={fecha(form.initdate)} id="initdate" name="initdate" type="text" required className='form-input' /></label>
                <label htmlFor="finaldate">Fecha Final: <input onChange={handleInputChange} value={fecha(form.finaldate)} id="finaldate" name="finaldate" type="text" required className='form-input' /></label>
                <label htmlFor="photo">Foto: <input onChange={handleInputChange} value={form.photo} id="photo" name="photo" type="text" required className='form-input' /></label>
                <label htmlFor="password">Password: <input onChange={handleInputChange} id="password" name="password" type="password" required className='form-input' /></label>
            </fieldset>
            <button onClick={handleSubmit} type="submit">Confirmar</button>
        </form>
    )
}

export default EditForm