import axios from 'axios';
export default class CompanyService {
  getCompany() {
    return axios.get('https://jsonplaceholder.typicode.com/posts').then(function (response) {
      console.log(response.data);
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.headers);
      console.log(response.config);
    });
    // link olarak Restful servise request atıyoruz.
  }
}