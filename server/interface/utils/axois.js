import axios from 'axios'
const instance = axios.create({
  baseURL: `http://${process.env.host || 'localhost'}:${process.env.port}: '3000'`
})

export default instance
