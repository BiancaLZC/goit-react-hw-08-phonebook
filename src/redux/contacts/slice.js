import { createSlice } from '@reduxjs/toolkit';
import { addContsct, deleteContact, fetchContacts } from './operations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state, action) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContsct.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addContsct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(addContsct.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
      });
    // .addCase(fetchCurrentUser.rejected, (state, action) => {
    //   state.error = action.payload;
    // });
  },
});

export const contactsReducer = contactsSlice.reducer;
// export const getError = state => state.contacts.error;
// export const getIsLoading = state => state.contacts.isLoading;
// export const getContacts = state => state.contacts.items;