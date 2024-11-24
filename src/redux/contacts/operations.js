import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix';

axios.defaults.baseURL = 'https://connections-api.goit.global/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/contacts');
      if (response.statusText === 'OK') {
        return response.data;
      } else {
        throw new Error();
      }
    } catch (error) {
      return rejectWithValue(
        'Error: An error occurred while fetching contacts'
      );
    }
  }
);

export const addContsct = createAsyncThunk(
  'contacts/addContact',
  async newContact => {
    try {
      const response = await axios.post('/contacts', newContact);
      if (response.statusText === 'Created') {
        return response.data;
      } else {
        throw new Error();
      }
    } catch (e) {
      Notify.failure('Error: Contact not added');
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      if (response.statusText === 'OK') {
        return response.data;
      } else {
        throw new Error();
      }
    } catch (e) {
      Notify.failure(
        e.message ? e.message : 'Error: the contact was not deleted'
      );
    }
  }
);