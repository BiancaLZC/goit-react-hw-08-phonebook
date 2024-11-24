import { useSelector, useDispatch } from 'react-redux';
import { Notify } from 'notiflix';
import { getContacts } from '../../redux/contacts/selectors';
import { addContsct } from '../../redux/contacts/operations';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const checkNewName = name => {
    if (contacts) {
      const normalizeDataName = name.toLowerCase();
      const nameIsWritten = contacts.some(
        contact => contact.name.toLowerCase() === normalizeDataName
      );
      return nameIsWritten;
    } else {
      return false;
    }
  };
  return (
    <>
      <Paper
        elevation={16}
        sx={{
          margin: '0 auto',
          padding: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '490px',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography>New contact</Typography>
          <Formik
            initialValues={{ name: '', number: '' }}
            validate={values => {
              const errors = {};
              if (!values.name) {
                errors.name = 'Name is required';
              } else if (
                !/^[a-zA-Zа-яА-Я]+([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$/.test(
                  values.name
                )
              ) {
                errors.name =
                  'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore dArtagnan';
              }
              if (!values.number) {
                errors.number = 'Number is required';
              } else if (
                !/\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/.test(
                  values.number
                )
              ) {
                errors.number =
                  'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +';
              }
              return errors;
            }}
            onSubmit={async ({ name, number }, { resetForm }) => {
              if (!checkNewName(name)) {
                const newContact = { name, number };
                await dispatch(addContsct(newContact));
              } else {
                Notify.failure(`${name} is already in contacts.`);
              }
              document.activeElement.blur();
              resetForm();
            }}
          >
            <Form>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Field
                  as={TextField}
                  type="text"
                  name="name"
                  label="Name"
                  variant="filled"
                  sx={{ mb: 2, mt: 2 }}
                  required
                />
                <ErrorMessage name="name" component="div" />

                <Field
                  as={TextField}
                  type="tel"
                  name="number"
                  label="Number"
                  variant="filled"
                  sx={{ mb: 2, width: '450px' }}
                  required
                />
                <ErrorMessage name="number" component="div" />

                <Button type="submit" variant="outlined">
                  Add contact
                </Button>
              </Box>
            </Form>
          </Formik>
        </Box>
      </Paper>
    </>
  );
};

export default ContactForm;