import { Link } from 'react-router-dom';
import avatar from './assets/avatar.png';

function Navigation() {
  return (
    <nav className="nav">
      <ul className="nav-items">
        <li className="nav-link">
          <Link to="/" className="link">
            <h1 className="logo"> BookStor CMS </h1>
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/" className="link"> Books </Link>
        </li>
        <li className="nav-link">
          <Link to="/categories" className="link"> Categories </Link>
        </li>
        <li className="nav-link" style={{ marginLeft: 'auto' }}>
          <img style={{ width: '55px', height: '55px', marginBottom: '-11px' }} src={avatar} alt="avatar" />
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
