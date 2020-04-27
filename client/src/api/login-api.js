import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
})

export const authAPI = {
    login(email, password) {
        return api.post('/authenticate', {
            email: email, 
            password: password
        }, {withCredentials: true});
    },
    register(name, email, password) {
        return api.post('/create',{ 
		    name: name,
            email: email,
            password: password,
        }, {withCredentials: true});
    },
    logout() {
        return api.get('/logout', {withCredentials: true})
    }
};