import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    return (
        <>
            <div className='navbar'>
                <div className='navbar-container container'>
                    <Link className='navbar-logo' to='/'>
                        <MdFingerprint className='navbar-icon' />
                        LAVISH
                    </Link>
                    <div className='menu-icon'>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
