import React, {useState} from 'react';
//import CartSummary from './CartSummary';
import {Icon, Menu, Segment} from 'semantic-ui-react';
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
      <Segment>
      <Menu inverted fixed="top" Icon='labeled'>
          <Menu.Item name='Main' as={Link} to="/" Icon='home'><Icon name='home' />Home</Menu.Item>
          <Menu.Item name='Company' as={Link} to="/getCompany"><Icon name='compass' />Company</Menu.Item>
          <Menu.Item name='Product'as={Link} to="/getProduct"><Icon name='product hunt' />Product</Menu.Item>
          <Menu.Menu position='right'>
            {isAuthenticated?<SignIn signOut={handleSignOut} />:<SignOut signIn={handleSignIn}/>}
          </Menu.Menu>
      </Menu>
      </Segment>
    </div>
  );
}

//{cartItems.length>0&&<CartSummary/>}