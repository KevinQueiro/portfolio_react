export const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:4000/');
    const data = await response.json();
    return data[0];
  } catch (error) {
    throw new Error(`Error al obtener los datos: ${error.message}`);
  }
};

export const updateApi = async (userId, idToUpdate, what, data, forRefresh, forClose) => {
  try {
    const respose = await fetch(`http://localhost:4000/update/${what}/${userId}/${idToUpdate}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    if (respose.ok) {
      forClose()
      forRefresh()
    } else {
      console.log(respose);
    }
  } catch (error) {
    throw new Error(error.message)
  }
}

export const deleteApi = async (userId, idToDelete, what, data, forRefresh) => {
  try {
    const respose = await fetch(`http://localhost:4000/delete/${what}/${userId}/${idToDelete}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    if (respose.ok) {
      forRefresh()
    } else {
      console.log(respose);
    }
  } catch (error) {
    throw new Error(error.message)
  }
}

export const newApi = async (userId, what, data, forRefresh, forClose) => {
  try {
    const respose = await fetch(`http://localhost:4000/new/${what}/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    if (respose.ok) {
      forClose()
      forRefresh()
    } else {
      console.log(respose);
    }
  } catch (error) {
    throw new Error(error.message)
  }
}

export const getComments = async () => {
  try {
    const response = await fetch('http://localhost:4000/comments');
    const data = await response.json();
    return data.reverse()
  } catch (error) {
    throw new Error(error.message)
  }
}

export const newComment = async (data, forRefresh) => {
  try {
    const respose = await fetch(`http://localhost:4000/comments/new`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    if (respose.ok) {
      forRefresh()
    } else {
      console.log(respose);
    }
  } catch (error) {
    throw new Error(error.message)
  }
}