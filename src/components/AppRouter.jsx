import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import { publicRoutes, privateRoutes } from '../router/routes';
import { AuthContext } from '../context/context';

const AppRouter = () => {
  const { isAuth /*setLoading*/ } = useContext(AuthContext);

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route key={route.path} element={route.component} path={route.path} />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} element={route.component} path={route.path} />
      ))}
    </Routes>
  );
};

export default AppRouter;
