import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
})

export const cartAPI = {
    getCart(){
        return api.get('/cart').then(res => res);
    },
    addTool(payload){
        return api.put('/cart_add', payload).then(res => res);
    },
    deleteToolById(id){
        return api.delete('/cart_delete/' + id);
    },
    updateToolById(id, payload){
        return api.put('/cart_update/' + id, payload);
    },
};