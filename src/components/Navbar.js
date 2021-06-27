import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <div className='navbar'>
                <div className='navbar-container container'>
                    <Link className='navbar-logo' to='/'>LAVISH</Link>
                    <div className='menu-icon'>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
