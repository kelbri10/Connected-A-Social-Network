import axios from 'axios'; 

function createNewUser (newUser: any) { 
        return axios.post('/api/accounts/signup', newUser)
}

function getExistingUser (existingUser: any){ 
    return axios.get('/api/accounts/login', existingUser); 
}

const axiosApi = {createNewUser, getExistingUser}; 
export default axiosApi; 