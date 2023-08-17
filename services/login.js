import axios from 'axios'

const baseUrl = 'https://notes-backend-lqnu.onrender.com/api/login'

const login = async credentials => {
  const { data } = await axios.post(baseUrl, credentials)
  return data
}

export default  {login }