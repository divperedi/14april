import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <nav>
        <ul>
            <li><Link to="/" className='nav-link'>Welcome</Link></li>
            <li><Link to="/books" className='nav-link'>All books</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar