import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/filter/slice';
import { getContacts } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Typography, List, ListItem } from '@mui/material';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    if (contacts) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
    return [];
  };

  return filteredContacts().length > 0 ? (
    <List
      sx={{
        padding: '20px',
        backgroundColor: '#fff',
        height: '350px',
        overflow: 'auto',
      }}
    >
      {filteredContacts().map(({ id, name, number }) => (
        <ListItem
          key={id}
          sx={{
            width: '600px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '8px',
            border: '1px solid gray',
            borderRadius: '3px',
            padding: '5px',
          }}
        >
          <Typography
            sx={{
              width: '200px',
              overflow: 'hidden',
            }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              width: '200px',
              overflow: 'hidden',
            }}
          >
            {number}
          </Typography>
          <IconButton
            aria-label="delete"
            onClick={() => dispatch(deleteContact(id))}
          >
            <DeleteIcon sx={{ fill: 'none', stroke: '#3498db' }} />
          </IconButton>
        </ListItem>
      ))}
    </List>
  ) : filter !== '' ? (
    <Typography
      sx={{
        width: '350px',
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#fff',
        height: '350px',
      }}
    >
      There are no saved contacts with this name.
    </Typography>
  ) : (
    <Typography
      sx={{
        width: '350px',
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#fff',
        height: '350px',
      }}
    >
      There are no contacts.
    </Typography>
  );
};

export default ContactList;