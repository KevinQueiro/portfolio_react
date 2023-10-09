const fecha = (fecha, type) => {
    const date = new Date(fecha)
    switch (type) {
        case "dia":
            return (`${date.getUTCDate()}`);

        case "mes":
            return (`${date.getUTCMonth() + 1}`);

        case "año":
            return (`${date.getUTCFullYear()}`);

        default:
            return (`${date.getUTCDate()}/${date.getUTCMonth() + 1}/${date.getUTCFullYear()}`);
    }
}

export default fecha;