import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { Box, TextField, Button, Paper } from '@mui/material';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import KeyIcon from '@mui/icons-material/Key';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = e => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmitForm = async e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Paper
        elevation={16}
        sx={{
          margin: '0 auto',
          padding: '20px',
          width: '400px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <form onSubmit={handleSubmitForm}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
              width: '300px',
              margin: '0 auto',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <AlternateEmailIcon
                sx={{ color: 'action.active', mr: 2, my: 1 }}
              />
              <TextField
                fullWidth
                label="Email"
                variant="standard"
                type="email"
                name="email"
                onChange={handleInputChange}
                required
              />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <KeyIcon sx={{ color: 'action.active', mr: 2, my: 1 }} />
              <TextField
                fullWidth
                label="Password"
                variant="standard"
                type="password"
                name="password"
                onChange={handleInputChange}
                required
              />
            </Box>
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{ marginTop: '20px' }}
            >
              sing in
            </Button>
          </Box>
        </form>
      </Paper>
    </>
  );
};
export default Login;