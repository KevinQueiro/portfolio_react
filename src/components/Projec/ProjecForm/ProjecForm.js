import React, { useState } from 'react';
import EditForm from './Forms/EditForm';
import DeleteForm from './Forms/DeleteForm';

import './ProjecForm.css';

const ExperienceForm = ({ props }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [isDelete, setIsDelete] = useState(false);

    const closeAll = () => {
        setIsOpen(false);
        setIsEdit(false);
        setIsDelete(false);
    }

    const toggleDropdown = (e) => {
        switch (e.target.name) {
            case "options":
                setIsOpen(!isOpen);
                setIsEdit(false);
                setIsDelete(false);
                break;
            case "edit":
                setIsEdit(!isEdit);
                setIsDelete(false);
                break;
            case "delete":
                setIsDelete(!isDelete);
                setIsEdit(false);
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <button className="dropdown-button" name='options' onClick={toggleDropdown}>
                Opciones
            </button>
            {isOpen && (
                <div>
                    <button className="dropdown-button" name='edit' onClick={toggleDropdown}>
                        Editar
                    </button>
                    {isEdit && (
                        <EditForm name='edit' props={{ data: props.data, userId: props.userId, wath: 'project', forRefresh: props.forRefresh, forClose: closeAll }} />
                    )}
                    <button className="dropdown-button" name='delete' onClick={toggleDropdown}>
                        Eliminar
                    </button>
                    {isDelete && (
                        <DeleteForm props={{ data: props.data, userId: props.userId, wath: 'project', forRefresh: props.forRefresh }} />
                    )}
                </div>
            )}
        </div>
    )
}

export default ExperienceForm