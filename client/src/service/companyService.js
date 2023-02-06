import axios from 'axios';
export default class CompanyService {
  getCompany() {
    return axios.get('http://localhost:3000/company');
    // link olarak Restful servise request atıyoruz.
  }
}