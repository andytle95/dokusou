import React from 'react';
import './Navbar.css'

let Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <a href='#'>Home</a>
                </li>
                <li>
                    <a href='#'>About</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
            <div>Logo</div>
        </nav>
    );
}

export default Navbar;
