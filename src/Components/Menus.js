import styled from 'styled-components';
import { NavLink } from "react-router-dom";




export function Menus() {
  function styleByActiveStatus(isActive) {
    return isActive ? { color: 'purple' } : { color: 'blue' }
   };

  const Menus = styled.h2` 
    display: inline-grid;   
    font-size: 1em;
    font-weight: bold;
    margin: 1em;
    padding-left: 15%;
  `;

  return (
    <div>
      <NavLink style={({ isActive }) => styleByActiveStatus(isActive)} to="/products">
          <Menus>Products</Menus>
      </NavLink>

      <NavLink style={({ isActive }) => styleByActiveStatus(isActive)} to="/productdetails">
        <Menus>Product Details</Menus>
      </NavLink>

      <NavLink style={({ isActive }) => styleByActiveStatus(isActive)} to="/cart">
        <Menus>Cart</Menus>
      </NavLink>

      <NavLink style={({ isActive }) => styleByActiveStatus(isActive)} to="/checkout">
        <Menus>Checkout</Menus>
      </NavLink>
    </div>
  )
};