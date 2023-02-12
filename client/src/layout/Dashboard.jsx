import React from 'react'
import CompanyList from '../page/CompanyList'
import ProductList from '../page/ProductList'
import MainPage from '../page/MainPage'
import SignedIn from '../page/SignedIn'
import {Route, Routes} from 'react-router-dom'
import Register from '../page/Register'
import CompanyUpdate from '../page/CompanyUpdate'
import ProductUpdate from '../page/ProductUpdate'
import CompanyAdd from '../page/CompanyAdd'
import ProductAdd from '../page/ProductAdd'
export default function Dashboard() {
  return (
    <div>
      <Routes>
        <Route exact path="/auth/login" element={<SignedIn/>} />
        <Route exact path="/auth/register" element={<Register/>} />
        <Route exact path="/" element={<MainPage/>} />
        <Route exact path="/getCompany" element={<CompanyList/>} />
        <Route exact path="/updateCompany/:id" element={<CompanyUpdate/>} />
        <Route exact path="/getProduct" element={<ProductList/>} />
        <Route exact path="/updateProduct/:id" element={<ProductUpdate/>} />
        <Route exact path="/addCompany" element={<CompanyAdd/>} />
        <Route exact path="/addProduct" element={<ProductAdd/>} />         
      </Routes>
    </div>
  )
}
