import React from 'react';
import './Navbar.css'
import './../App.css'

//need to make functionality where when the text logo is clicked,
// we are brought back up to the top of the page.

//first need to add a border and background to the logo.

let Navbar = () => {
    return (
        <nav>
            <a class="logo" href="#">THE DOKUSOU CAST</a>
            {/* <ul>
                <li>
                    <a href='#'>Home</a>
                </li>
                <li>
                    <a href='#'>About</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul> */}
            {/* <div>Logo</div> */}
        </nav>
    );
}

export default Navbar;
