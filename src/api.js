const BASE_URL = 'https://kevin-queiro.cyclic.cloud'
export const fetchData = async () => {
  try {
    console.log('url', BASE_URL);
    const response = await fetch(`${BASE_URL}`);
    const data = await response.json();
    return data[0];
  } catch (error) {
    throw new Error(`Error al obtener los datos: ${error.message}`);
  }
};

export const updateApi = async (userId, idToUpdate, what, data, forRefresh, forClose) => {
  try {
    const respose = await fetch(`${BASE_URL}/update/${what}/${userId}/${idToUpdate}`, {
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
    const respose = await fetch(`${BASE_URL}/delete/${what}/${userId}/${idToDelete}`, {
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
    const respose = await fetch(`${BASE_URL}/new/${what}/${userId}`, {
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
    const response = await fetch(`${BASE_URL}/comments`);
    const data = await response.json();
    return data.reverse()
  } catch (error) {
    throw new Error(error.message)
  }
}

export const newComment = async (data, forRefresh) => {
  try {
    const respose = await fetch(`${BASE_URL}/comments/new`, {
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