import axios from 'axios';

// export default axios.create({
//     baseURL: 'http://localhost:5100/api/'
// })

// import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:7107/api/Fruta'
});

export default api;