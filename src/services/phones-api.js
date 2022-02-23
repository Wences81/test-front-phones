import axios from 'axios';
axios.defaults.baseURL = 'https://git.heroku.com/test-back-phones.git';

export async function fetchPhones() {
  const { data } = await axios.get('/phones');
  return data;
}
