import { Box } from '@mui/material';
import { Link } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <Box sx={{ marginLeft: 'auto', display: 'flex' }}>
      <Link to="/register">Registration</Link>
      <Link to="/login">Login</Link>
    </Box>
  );
};
export default AuthNav;