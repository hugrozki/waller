import React from 'react';
import { Link } from 'react-router-dom';

const LogoutButton = () => {
  return (
    <Link
      to="/logout"
      style={{
      bottom: 10,
      color: '#a5a5a5',
      left: 10,
      position: 'absolute',
      fontSize: '20px',
      zIndex: 2,
    }}>
      <i className="fas fa-sign-out-alt" />
    </Link>
  );
}

export default LogoutButton;