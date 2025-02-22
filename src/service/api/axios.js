import axios from 'axios';

const Instance = axios.create({
  baseURL: 'http://localhost:9000/bsky/api',
});

Instance.interceptors.request.use((conf) => {
  const sessionUser = JSON.parse(localStorage.getItem('sessionuser'));

  if (sessionUser && sessionUser.token) {
    conf.headers.Authorization = `Bearer ${sessionUser.token}`;
  }

  conf.headers['Content-Type'] = 'application/json';

  return conf;
});

export default Instance;
