import axios from 'axios';

export const getZipCodeInfo = axios.create({
  baseURL: 'https://viacep.com.br/ws/'
});
