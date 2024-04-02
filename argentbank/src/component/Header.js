import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/Header.css';
import argentBankLogo from '../img/argentBankLogo.png';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = !!localStorage.getItem('userToken');
  // Utilisation de useSelector pour accéder à l'état de l'utilisateur
  const user = useSelector((state) => state.user.user);

  const handleSignOut = () => {
    localStorage.removeItem('userToken');
    // Ajoute ici toute action de déconnexion si nécessaire, par exemple réinitialiser l'état de l'utilisateur
    // dispatch({ type: 'USER_LOGOUT' });
    navigate('/');
  };

  return (
    <nav className="main-nav">
      <Link to="/">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isLoggedIn ? (
          <div className="main-nav-items">
            {/* Affiche le prénom de l'utilisateur s'il est connecté et les informations sont disponibles */}
            {user && (
              <div className="main-nav-item user-info">
                <i className="fa fa-user-circle"></i>
                {user.firstName}
              </div>
            )}
            <div className="main-nav-item" onClick={handleSignOut}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </div>
          </div>
        ) : (
          <Link to="/signin" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Header;
