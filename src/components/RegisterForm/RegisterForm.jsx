import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { register } from 'redux/auth/operations';
import { Form } from './RegisterForm.styled';
import { Box, TextField, Button, Paper } from '@mui/material';

import PersonIcon from '@mui/icons-material/Person';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import KeyIcon from '@mui/icons-material/Key';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = e => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    switch (name) {
      case 'name':
        setName(value);
        break;

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

    console.log({ name, email, password });
    dispatch(register({ name, email, password }));
    reset();
  };

  const reset = () => {
    setName('');
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
        <Form onSubmit={handleSubmitForm}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <PersonIcon sx={{ color: 'action.active', mr: 2, my: 1 }} />
            <TextField
              fullWidth
              label="Name"
              variant="standard"
              type="text"
              name="name"
              required
            />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AlternateEmailIcon sx={{ color: 'action.active', mr: 2, my: 1 }} />
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
            sing up
          </Button>
        </Form>
      </Paper>
    </>
  );
};

export default RegisterForm;