import React from 'react'
import CompanyList from '../page/CompanyList'
import ProductList from '../page/ProductList'
import MainPage from '../page/MainPage'
import {Route, Routes} from 'react-router-dom'
export default function Dashboard() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<MainPage/>} />
        <Route exact path="/company" element={<CompanyList/>} />
        <Route exact path="/product" element={<ProductList/>} />
      </Routes>
    </div>
  )
}
