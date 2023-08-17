import axios from 'axios'

const baseUrl = 'https://notes-backend-lqnu.onrender.com/api/users'

const createUser= async credentials => {
    const { data } = await axios.post(baseUrl, credentials)
    console.log(data)
    return data
  }

export default {createUser}