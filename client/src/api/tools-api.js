import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
})

export const toolsAPI = {
    insertTools(payload){
        return api.post('/tool', payload, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(res => res);
    },
    getAllTools(){
        return api.get('/tools').then(res => res);
    },
    updateToolById(id, payload){
        return api.put('/tool/' + id, payload);
    },
    deleteToolById(id){
        return api.delete('/tool/' + id);
    },
    getToolById(id){
        return api.get('/tool/' + id);
    }
}

