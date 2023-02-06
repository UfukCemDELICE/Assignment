import React from 'react'
import './App.css'
//import 'semantic-ui-css/semantic.min.css'
import Dashboard from './layout/Dashboard'
import Navigation from './layout/Navigation'
//import Navi from './layouts/Navi'
export default function App() {
  return (
    <div className='App'>
      <Navigation/>
      <Dashboard/>
    </div>
  )
}
