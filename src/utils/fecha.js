const fecha = (fecha) => {
    const date = new Date(fecha)
    return(`${date.getUTCDate()}/${date.getUTCMonth()+1}/${date.getUTCFullYear()}`);
}

export default fecha;