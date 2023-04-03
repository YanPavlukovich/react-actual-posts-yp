import { Navigate } from 'react-router-dom';

import About from '../pages/About';
import PostIdPage from '../pages/PostIdPage';
import Posts from '../pages/Posts';
import Error from '../pages/Error';
import Login from '../pages/Login';

export const privateRoutes = [
  { path: '/about', component: <About /> },
  { path: '/posts', component: <Posts /> },
  { path: '/posts/:id', component: <PostIdPage /> },
  { path: '/*', component: <Navigate replace to="/posts" /> },
  { path: '*', component: <Error /> },
];

export const publicRoutes = [{ path: '*', component: <Login /> }];
