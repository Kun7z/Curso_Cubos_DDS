import axios from 'axios'
const token = localStorage.getItem('token')

export default axios.create({
    baseURL: 'http://localhost:3000/transactions',
    headers: {
        "Content-Type": 'application/json',
        Authorization: `Bearer ${token}`
    }
})