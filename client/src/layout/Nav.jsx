import React, {useState} from 'react';
//import CartSummary from './CartSummary';
import {Menu} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import SignIn from './SignIn';
import SignOut from './SignOut';
import { useNavigate, Link } from "react-router-dom"; 
import '../App.css'
//import { useSelector } from 'react-redux'

export default function Nav() {

  //const {cartItems} = useSelector(state => state.cart)
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const navigate = useNavigate()
  

  function handleSignOut() {
    setIsAuthenticated(false)
    navigate("/")
  }
  function handleSignIn() {
    setIsAuthenticated(true)
    navigate("/auth/login")
    
  }
  return (
    <div>
      <Menu inverted fixed="top">
          <Menu.Item name='Main' as={Link} to="/"/>
          <Menu.Item name='Company' as={Link} to="/company"/>
          <Menu.Item name='Product'as={Link} to="/product"/>
          <Menu.Menu position='right'>
            {isAuthenticated?<SignIn signOut={handleSignOut} />:<SignOut signIn={handleSignIn}/>}
          </Menu.Menu>
      </Menu>
    </div>
  );
}

//{cartItems.length>0&&<CartSummary/>}