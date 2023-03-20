import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:7107/api/Fruta'
});

export default api;