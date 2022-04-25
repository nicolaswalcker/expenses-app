import axios from 'axios';

const api = axios.create({
  baseURL: 'https://economia.awesomeapi.com.br/json',
})

export default {
  getAll(){
    return api.get('/all');
  },

  listen(codes = []){
    return api.get(`/all/${codes.join()}`);
  }
}