import axios from 'axios';
export default class ProductService {
  getProduct() {
    return axios.get('http://localhost:5000/api/product/getall').then(function (response) {
      console.log(response.data);
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.headers);
      console.log(response.config);
    });;
    // link olarak Restful servise request atıyoruz.
  }
}