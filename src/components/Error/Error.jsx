import { useSelector } from 'react-redux';
import { getError } from '../../redux/contacts/selectors';
import { Typography } from '@mui/material';

const Error = () => {
  const error = useSelector(getError);
  return (
    <Typography
      sx={{
        width: '380px',
        height: '300px',
        backgroundColor: '#fff',
        textAlign: 'center',
        paddingTop: '20px',
      }}
    >
      {error}
    </Typography>
  );
};

export default Error;