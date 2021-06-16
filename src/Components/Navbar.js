import React, { useState } from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Dropdown from './Dropdown'


function Navbar() {
    const [click, setClick]= useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    return (
        <>
            <nav className='navbar'>
                <Link to='/'
                className='navbar-logo'>
                    r.sheffield Tutoring
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active': 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/testimonials' 
                        className='nav-links' 
                        onClick={closeMobileMenu}>
                            Testimonials
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/scheduling' 
                        className='nav-links' 
                        onClick={closeMobileMenu}>
                            Scheduling
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' 
                        className='nav-links' 
                        onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;