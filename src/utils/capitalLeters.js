const capitalLeter = (word) => {
    return(word.split('')[0].toUpperCase() + word.split('').slice(1).join(''));
}

export default capitalLeter;