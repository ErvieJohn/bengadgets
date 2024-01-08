import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingBasket } from '@fortawesome/fontawesome-free-solid';
import logo from '../../logo.svg'
import { BASE_URL } from '../../config/config';

function Navbar() {
  return (
    <div className='nav-body'>
        <div className='nav-container'>
            <a href={BASE_URL + '/'}>
                <img width={100} height={50} src={logo} alt='logo'>
                </img>
            </a>
            

            <div className='nav-item' style={{ width: "35%" }}>
                <a href={BASE_URL + '/'} className='nav-item-link'>
                    <h5>Home</h5>
                </a>
                <a href={BASE_URL + '/products'} className='nav-item-link'>
                    <h5>Products</h5>
                </a>
                <a href={BASE_URL + '/about'} className='nav-item-link'>
                    <h5>About</h5>
                </a>
                <a href={BASE_URL + '/contacts'} className='nav-item-link'>
                    <h5>Contacts</h5>
                </a>
            </div>

            <div className='nav-item' style={{ width: "10%" }}>
                <button style={{ backgroundColor: "transparent", border: "none" }}>
                    <FontAwesomeIcon icon={faSearch} color='black' size='1x'/>
                </button>
                
                <button style={{ backgroundColor: "transparent", border: "none" }}>
                    <FontAwesomeIcon icon={faShoppingBasket} color='black' size='1x'/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar