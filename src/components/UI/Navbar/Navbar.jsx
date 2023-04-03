import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import MyButton from '../button/MyButton';
import { AuthContext } from '../../../context/context';

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  };
  return (
    <div className="navigation-bar">
      <MyButton onClick={logout}>Sign up</MyButton>
      <div className="navigation-bar__links">
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
      </div>
    </div>
  );
};

export default Navbar;
