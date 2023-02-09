import React from 'react'
import './App.css'
//import 'semantic-ui-css/semantic.min.css'
import Dashboard from './layout/Dashboard'
//import Navigation from './layout/Navigation'
import Footer from './layout/Footer'
import Nav from './layout/Nav'
import 'semantic-ui-css/semantic.min.css'

//import ProductUpdate from './layout/ProductUpdate'
//import SignedIn from './layout/SignedIn'
//import Navi from './layouts/Navi'
//   

export default function App() {
  return (
    <div className='App'>
        <Nav/> 
          <Dashboard/>  
        <Footer/>
    </div>
  )
}
