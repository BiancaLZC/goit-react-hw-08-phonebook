import { useSelector } from 'react-redux';

import { getIsLoggedIn } from '../../redux/auth/selectors';
import { Box } from '@mui/material';

import { Link } from './Navigation.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Box sx={{ marginLeft: '40px', display: 'flex', gap: '16px' }}>
      <Link to="/">HOME</Link>
      {isLoggedIn && <Link to="/contacts">CONTACTS</Link>}
    </Box>
  );
};

export default Navigation;