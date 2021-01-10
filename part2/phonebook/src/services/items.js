import axios from 'axios'
const personsUrl = '/api/persons'

const getAll = () => {
  const request = axios.get(personsUrl)
  return request.then(response => response.data)

}

const create = newObject => {
  const request = axios.post(personsUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  axios.put(`${personsUrl}/${id}`, newObject)
  return axios.get(personsUrl).then(response => response.data)
}

const deleteItem = id => {
    const request = axios.delete(`${personsUrl}/${id}`)
    return request.then(response => response.data)
}

export default { getAll, create, update, deleteItem }