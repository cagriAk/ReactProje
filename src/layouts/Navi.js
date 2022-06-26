import React, { useState } from 'react'
import CartSummary from './CartSummary'
import { Container,  Menu } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector'

export default function Navi() {
  
  const {cartItems}= useSelector(state=>state.cart)

  const [isAuthanticated, setIsAuthanticated] = useState(true)

  const navigate  =  useNavigate()

   function handleSignOut (param){
       setIsAuthanticated(false)
       navigate("/");
      }
  
    function handleSignIn(param){
      setIsAuthanticated(true)
   }
   
  return (
    <Menu inverted >
      <Container>
        <Menu.Item
          name='home'
        />
        <Menu.Item
          name='messages'
        />
        <Menu.Menu position='right'>
            
        { cartItems.length> 0 && <CartSummary></CartSummary> }
                                          
              {
                isAuthanticated? <SignedIn signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn}/>
              }
    
        </Menu.Menu>
        </Container>
      </Menu>
  )
}
