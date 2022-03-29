import axios from 'axios';
axios.defaults.baseURL = ' https://test-back-phones.herokuapp.com/';

export async function fetchPhones() {
  const { data } = await axios.get('/api/phones');
  return data;
}
