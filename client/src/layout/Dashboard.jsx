import React from 'react'
import CompanyList from '../page/CompanyList'
import ProductList from '../page/ProductList'
import MainPage from '../page/MainPage'
import SignedIn from '../page/SignedIn'
import {Route, Routes} from 'react-router-dom'
import Register from '../page/Register'
import CompanyUpdate from '../page/CompanyUpdate'
import ProductUpdate from '../page/ProductUpdate'
export default function Dashboard() {
  return (
    <div>
      <Routes>
        <Route exact path="/auth/login" element={<SignedIn/>} />
        <Route exact path="/auth/register" element={<Register/>} />
        <Route exact path="/" element={<MainPage/>} />
        <Route exact path="/getCompany" element={<CompanyList/>} />
        <Route exact path="/company/:id" element={<CompanyUpdate/>} />
        <Route exact path="/product" element={<ProductList/>} />
        <Route exact path="/product/:id" element={<ProductUpdate/>} />             
      </Routes>
    </div>
  )
}
