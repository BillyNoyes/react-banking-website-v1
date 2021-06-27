import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import { IconContext } from 'react-icons/lib';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setIsOpen(!isOpen);
    const closeMobileMenu = () => setIsOpen(false);

    const showMobileButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showMobileButton();
    }, [])

    window.addEventListener('resize', showMobileButton);
    
    return (
        <>
        <IconContext.Provider value={{ color: 'white' }}>
            <div className='navbar'>
                <div className='navbar-container container'>
                    <Link className='navbar-logo' to='/' onClick={closeMobileMenu}>
                        <MdFingerprint className='navbar-icon' />
                        LAVISH
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        { isOpen ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'><Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link></li>
                        <li className='nav-item'><Link to='/services' className='nav-links' onClick={closeMobileMenu}>Services</Link></li>
                        <li className='nav-item'><Link to='/products' className='nav-links' onClick={closeMobileMenu}>Products</Link></li>
                        <li className='nav-btn'>
                            {button ? (
                                <Link to='/sign-up' className='btn-link'><Button buttonStyle='btn--outline'>SIGN UP</Button></Link>
                            ) : (
                                <Link to='/sign-up' className='btn-link'><Button buttonStyle='btn--outline' buttonSize='btn--mobile'>SIGN UP</Button></Link>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
