import axios from 'axios';
export default class ProductService {
  getProduct() {
    return axios.get('http://localhost:3000/product');
    // link olarak Restful servise request atıyoruz.
  }
}