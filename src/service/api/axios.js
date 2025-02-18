import axios from 'axios';

const Instance = axios.create({
  baseURL: 'http://localhost:9000/bsky/api',
});

Instance.interceptors.request.use((conf) => {
  const token = localStorage.getItem('token');

  if (token) {
    conf.headers.Authorization = `Bearer ${token}`;
    conf.headers['Content-Type'] = 'application/json';
  }

  return conf;
});

export default Instance;
