// import Navbar from './container/Navbar';
import Main from './container/Main.js'
import AboutMe from './container/AboutMe.js'
import { Routes, Route } from 'react-router-dom';

import './App.css';
function App() {
  return (
    <div className="App">
      {/* nav class that shows logo style and links to scroll down to */}
      <nav className='nav'>.
      <a href="#" className='nav-item'>Homepage</a>
      <a href="#" className='nav-item'>About Us</a>
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
