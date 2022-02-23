import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000';

export async function fetchPhones() {
  const { data } = await axios.get('/phones');
  return data;
}
