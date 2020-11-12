// imports necessary components for the Navbar to function
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <div className="navbar">
                    <div className="navbar-container container">
                        <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                            <MdFingerprint className="navbar-icon"/>
                            DETONATE
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />} 
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/programs' className="nav-links" onClick={closeMobileMenu}>
                                    Programs
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/events' className="nav-links" onClick={closeMobileMenu}>
                                    Events
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/about' className="nav-links" onClick={closeMobileMenu}>
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/registration' className="nav-links" onClick={closeMobileMenu}>
                                    Registration
                                </Link>
                            </li>
                            <li className="nav-btn">
                                {button ? (
                                    <Link to='/login' className="btn-link">
                                        <Button buttonStyle='btn--outline'>LOGIN</Button>
                                    </Link>
                                ) : (
                                    <Link to='/login' className="btn-link" onClick={closeMobileMenu}>
                                        <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>LOGIN</Button>
                                    </Link>
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
