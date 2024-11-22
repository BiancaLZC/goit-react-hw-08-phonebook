import { Link } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import CreateIcon from '@mui/icons-material/Create';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PageviewIcon from '@mui/icons-material/Pageview';

const HomePage = () => {
  return (
    <>
      <Typography
        variant="h2"
        sx={{
          textAlign: 'center',
          marginBottom: '40px',
        }}
      >
        Welcome to the Home Page of Phonebook!{' '}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'start',
          marginBottom: '40px',
        }}
      >
        <PhoneIcon color="primary" sx={{ fontSize: '80px' }} />
        <PageviewIcon color="action" sx={{ fontSize: '80px' }} />
        <CreateIcon sx={{ fontSize: '80px' }} />
        <PersonAddIcon color="secondary" sx={{ fontSize: '80px' }} />
      </Box>
      <Typography
        sx={{
          textAlign: 'center',
          fontSize: '24px',
          marginBottom: '20px',
        }}
      >
        Here you can add contacts, view saved contacts and easily find the ones
        you need using the filter.
      </Typography>
      <Typography
        sx={{
          textAlign: 'center',
          fontSize: '24px',
        }}
      >
        To use the application, please
        <Link to="/login"> log in</Link> to your account or
        <Link to="/register"> register</Link>.
      </Typography>
    </>
  );
};
export default HomePage;