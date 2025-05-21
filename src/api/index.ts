import axios from 'axios';

const API_KEY = '5368588e7c89949e12266ace0320db26';


export let authToken = null;

export const axiosClient = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
  timeout: 10000,
  timeoutErrorMessage: `Request is timed out.`,
  headers: {
    'Content-Type': 'application/json',
  }
});

// INTERCEPTORS
axiosClient.interceptors.request.use(
  config => {
    config.params = {
      api_key: API_KEY,
    };
    config.headers['Content-Type'] = 'application/json';
    config.headers["Accept"] = "application/json";
    return config;
  },
  error => {    
    return Promise.reject(error);
  },
);

// INTERCEPTORS
// axiosClient.interceptors.request.use(
// config => {
//   config.headers.Authorization = `Bearer ${authToken}`; // Assuming Bearer token type
//   config.headers['Content-Type'] = 'application/json';
//   config.headers["Accept"] = "application/json";
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );


axiosClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);
