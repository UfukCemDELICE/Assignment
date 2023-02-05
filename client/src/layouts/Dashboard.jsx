import React from 'react'
import Navi from './Navi'
import CompanyList from '../pages/CompanyList'
import MainPage from '../pages/MainPage'
import ProductList from '../pages/ProductList'
export default function Dashboard() {
  return (
    <div>
      <Navi/>
      <CompanyList/>
      <MainPage/>
      <ProductList/>
    </div>
  )
}
