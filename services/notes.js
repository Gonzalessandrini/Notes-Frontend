import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/notes'

let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

const getAll = () => {

  const config = {
    headers: {
      Authorization: token
    }}

      const response =  axios.get(baseUrl,config)
      return response.then(response => response.data)

      // return notes?.map(note => (
      //   {
      //     content: note.content,
      //     date: note.date,
      //     important:note.important ,
      //     id: note.id
      //   }
      // ))
}



 const create = (noteObject) => {

  const config = {
    headers: {
      Authorization: token
    }
  }

  const request =  axios.post(baseUrl, noteObject, config)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const config = {
    headers: {
      Authorization: token
    }
  }

  const request = axios.put(`${baseUrl}/${id}`, newObject, config)
  return request.then(response => response.data)
}

const deleted= (id)=>{
  const config = {
    headers: {
      Authorization: token
    }
  }
  axios.delete(`${baseUrl}/${id}`, config)
  
}

export default {update, setToken,create,deleted,getAll }