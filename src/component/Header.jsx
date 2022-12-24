import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import  '../css/Header.css'
import { Link } from "react-router-dom";
const Header = ({filterData}) => {
    const value= useSelector(state=>state.countCardItems)
  return (
    <Navbar  className="header">
    <Container>
      <Navbar.Brand href="#home" className="navbar">Navbar</Navbar.Brand>
      <Nav className="ms-auto">
        <Nav.Link  className='nav_link'>
      <Link to="/" className='nav_items'>Cart</Link>
        </Nav.Link>
        <Nav.Link  className='nav_link'>
      <Link to="/women" className='nav_items' onClick={()=>filterData("women's clothing")}>Women</Link>
        </Nav.Link>
        <Nav.Link  className='nav_link'>
        <Link to="/men" className='nav_items' onClick={()=>filterData("men's clothing")}>Men</Link>
        </Nav.Link>
        <Nav.Link  className='nav_link'>
        <Link to="/jwellary" className='nav_items' onClick={()=>filterData("jewelery")}>Jwellary</Link>
        </Nav.Link>
        <Nav.Link  className='nav_link'>
        <Link to="/electronics" className='nav_items' onClick={()=>filterData("electronics")}>Electronics</Link>
        </Nav.Link>
        <Nav.Link className='nav_link cart_container'>
        <Link to="/cart" className='nav_items' onClick={()=>filterData("electronics")}>
        <img src="450-512.webp" alt="" className='image_logo'/>
<span className='cart_items'>{value>0?value:null}</span>
      </Link>

            {/* Cart{value} */}
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Header