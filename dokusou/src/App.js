// import Navbar from './container/Navbar';
import Main from './container/Main.js'
import AboutMe from './container/AboutMe.js'
import { Routes, Route, Link } from 'react-router-dom';

import './App.css';
function App() {
  return (
    <div className="App">
      {/* nav class that shows logo style and links to scroll down to */}
      <nav className='nav'>.
      <Link to="#" className='nav-item'>Homepage</Link>
      <Link to="#" className='nav-item'>About Us</Link>
      </nav>
      {/* Routes in order to scroll through the page. */}
      <Routes>
      <Route path='/' element={ <Main /> } />
      <Route path='/about-me' element={ <AboutMe /> } />
      </Routes>
    </div>
  );
}

export default App;
