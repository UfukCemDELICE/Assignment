import React from 'react'
import './App.css'
import Dashboard from './layout/Dashboard'
import Footer from './layout/Footer'
import Nav from './layout/Nav'
import 'semantic-ui-css/semantic.min.css'


export default function App() {
  return (
    <div className='App'>
        <Nav/> 
          <Dashboard/>  
        <Footer/>
    </div>
  )
}
