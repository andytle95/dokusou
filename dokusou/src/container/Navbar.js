

// v2 code VVVVVVV


import React from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
    const [showMenu, setShowMenu] = React.useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className={`navbar ${showMenu ? 'active' : ''}`}>
            <div className="logo">
                <Link to="top" smooth={true}>
                    THE DOKUSOU CAST
                </Link>
            </div>
            <ul className={`nav-links ${showMenu ? 'active' : ''}`}>
                <li>
                    <Link to="about" smooth={true} onClick={toggleMenu}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} onClick={toggleMenu}>
                        Contact
                    </Link>
                </li>
            </ul>
            <div className="menu-icon" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} />
            </div>
        </nav>
    );
};

export default Navbar;











// VVVVVVV v1 code VVVVVV


// import React from 'react';
// import './Navbar.css'
// import './../App.css'

// //need to make functionality where when the text logo is clicked,
// // we are brought back up to the top of the page.

// //first need to add a border and background to the logo.

// //need to find appropriate color for the navbar

// // anday

// let Navbar = () => {
//     return (
//         <nav className='navbar'>
//             <a class="logo" href="#">THE DOKUSOU CAST</a>
//             {/* <ul>
//                 <li>
//                     <a href='#'>Home</a>
//                 </li>
//                 <li>
//                     <a href='#'>About</a>
//                 </li>
//                 <li>
//                     <a href="#">Contact</a>
//                 </li>
//             </ul> */}
//             {/* <div>Logo</div> */}
//         </nav>
//     );
// }

// export default Navbar;
