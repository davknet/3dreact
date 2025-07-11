import { Link } from 'react-router-dom';
import './style/Main-head-nav-menu.css';

const MainHeaderNav = () => {
  return (
    <nav className="main-header-nav">
      <ul className="main-header-nav-ul">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about-us">About</Link></li>
        <li><Link to="/contact-us">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default MainHeaderNav;
