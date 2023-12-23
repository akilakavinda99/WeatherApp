import axios from 'axios';
import {BASE_URL} from '../constants/apiConstants';

const API = axios.create({
  baseURL: BASE_URL,
});

export default API;
