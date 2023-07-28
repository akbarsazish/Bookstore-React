import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="nav">
      <ul className="nav-items">
        <li className="nav-link">
          <Link to="/" className="link"> Books </Link>
        </li>
        <li className="nav-link">
          <Link to="/categories" className="link"> Categories </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
