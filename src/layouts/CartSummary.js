import React from 'react'
import {  Dropdown,Label } from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports'

export default function CartSummary() {

  const {cartItems}= useSelector(state=>state.cart)

  return (
    <Dropdown item text='Sepet'>
    <Dropdown.Menu>
      
        {
          cartItems.map((cartItem)=>(
              <Dropdown.Item key={cartItem.product.productId} > { cartItem.product.productName}
              <Label>{cartItem.quantity}</Label>
              </Dropdown.Item>
              
          ))
        }
        
      <Dropdown.Divider/>
      <Dropdown.Item  as={NavLink} to="/cart" >Sepete Git</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  )
} 
