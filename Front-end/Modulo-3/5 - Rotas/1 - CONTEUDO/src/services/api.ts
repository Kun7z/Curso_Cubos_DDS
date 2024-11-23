import axios from 'axios'
const token = localStorage.getItem('token')

export default axios.create({
    baseURL: 'https://api-crud-user.pedagogico.cubos.academy',
    headers: {
        "Content-Type": 'application/json',
        Authorization: `Bearer ${token}`
    }
})