import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-4bf76.firebaseio.com/'
});

export default instance;