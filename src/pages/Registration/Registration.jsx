import RegisterForm from 'components/RegisterForm';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Registration = () => {
  return (
    <>
      <Typography variant="h4" align="center">
        Create an account
      </Typography>
      <Typography align="center" mt={2} mb={2}>
        Fill out and send the form
      </Typography>
      <RegisterForm />
      <Typography align="center" mt={2}>
        if you have just registered, go to{' '}
        <Link to="/login" style={{ color: '#1976d2' }}>
          the login page
        </Link>
      </Typography>
    </>
  );
};

export default Registration;