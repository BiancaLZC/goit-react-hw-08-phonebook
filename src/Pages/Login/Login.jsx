import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../components/redux/authSlice';
import { useNavigate } from 'react-router-dom';
import styles from '../Login/Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector(state => state.auth.error);
  const isLoading = useSelector(state => state.auth.isLoading);

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(login({ email, password })).then(result => {
      if (result.type === 'auth/login/fulfilled') {
        navigate('/contacts');
      }
    });
  };

  return (
    <div className={styles.loginContainer}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label className={styles.loginLabel}>
          Email:
          <input
            className={styles.loginInput}
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label className={styles.loginLabel}>
          Password:
          <input
            className={styles.loginInput}
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button className={styles.loginBtn} type="submit" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
        {error && <p>Error: {error}</p>}
      </form>
    </div>
  );
};

export default Login;