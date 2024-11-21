import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { fetchCurrentUser } from 'redux/auth/operations';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute';
import { getIsRefreshing } from 'redux/auth/selectors';

const Home = lazy(() => import('../pages/HomaPage'));
const Registration = lazy(() => import('../pages/Registration'));
const Login = lazy(() => import('../pages/LoginPage'));
const Contacts = lazy(() => import('../pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefreshing);
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route
            path="/register"
            element={
              <PublicRoute redirectTo="/contacts" restricted>
                <Registration />
              </PublicRoute>
            }
          />

          <Route
            path="/login"
            element={
              <PublicRoute redirectTo="/contacts" restricted>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login">
                <Contacts />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    )
  );
};
