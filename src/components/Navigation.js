import { useState } from 'react';
import { Link } from 'react-router-dom';
import avatar from './assets/avatar.png';

function Navigation() {
  const [isActiveLink1, setIsActiveLink1] = useState(false);
  const [isActiveLink2, setIsActiveLink2] = useState(false);

  const handleClickLink1 = () => {
    setIsActiveLink1(true);
    setIsActiveLink2(false);
  };

  const handleClickLink2 = () => {
    setIsActiveLink1(false);
    setIsActiveLink2(true);
  };

  return (
    <nav className="nav">
      <ul className="nav-items">
        <li className="nav-link">
          <Link to="/" className="link">
            <h1 className="logo"> BookStore CMS </h1>
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/" className={`link ${isActiveLink1 ? 'active-link' : ''}`} onClick={handleClickLink1}> Books </Link>
        </li>
        <li className="nav-link">
          <Link to="/categories" className={`link ${isActiveLink2 ? 'active-link' : ''}`} onClick={handleClickLink2}> Categories </Link>
        </li>
        <li className="nav-link" style={{ marginLeft: 'auto' }}>
          <img style={{ width: '55px', height: '55px', marginBottom: '-11px' }} src={avatar} alt="avatar" />
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
