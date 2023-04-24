import React from 'react'
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Search } from '../Search';

export const Navbar = () => {
  return (
    <>
    <Nav className='navBar' activeKey="/home" /* onSelect={(selectedKey) => alert(`selected ${selectedKey}`)} */ >
        <Link to="/" className='navLink'>Home</Link>
        <Link to="/comedy" className='navLink'>Comedy</Link>
    </Nav>
    </>
  )
}
