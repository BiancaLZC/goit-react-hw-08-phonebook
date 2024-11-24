import { useSelector } from 'react-redux';
import { getEmail, getIsLoggedIn, getName } from '../redux/auth/selectors';

export const useAuth = () => {
  const userName = useSelector(getName);
  const userEmail = useSelector(getEmail);
  const isLoggedIn = useSelector(getIsLoggedIn);

  return {
    userName,
    userEmail,
    isLoggedIn,
  };
};