import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Error from 'components/Error';
import Filter from 'components/Filter';
import Loader from 'components/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { getError, getIsLoading } from 'redux/contacts/selectors';
import { Paper } from '@mui/material';

const ContactsPage = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Paper
        elevation={16}
        sx={{
          margin: '0 auto',
          padding: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'start',
        }}
      >
        <ContactForm />
        <Paper
          elevation={16}
          sx={{
            margin: '0 auto',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Filter />
          {isLoading ? <Loader /> : error ? <Error /> : <ContactList />}
        </Paper>
      </Paper>
    </>
  );
};

export default ContactsPage;