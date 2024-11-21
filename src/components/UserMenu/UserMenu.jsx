import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { getEmail } from 'redux/auth/selectors';
import { Box, Typography, Button } from '@mui/material';

const UserMenu = () => {
  const mail = useSelector(getEmail);
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        marginLeft: 'auto',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Typography>{mail}</Typography>
      <Button
        onClick={() => dispatch(logOut())}
        variant="outlined"
        sx={{ marginLeft: '15px' }}
        color="inherit"
      >
        Logout
      </Button>
    </Box>
  );
};
export default UserMenu;