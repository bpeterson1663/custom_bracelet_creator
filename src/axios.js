import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://mock-1-b6566.firebaseio.com/'
})

export default instance;