import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
})

export function sendOrder(payload){
    return api.post('/order', payload).then(res => res);
}