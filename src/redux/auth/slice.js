import { createSlice } from '@reduxjs/toolkit';
// import { fetchContacts } from 'redux/contacts/operations';
import { register, logIn, logOut, fetchCurrentUser } from './operations';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      //   .addCase(fetchContacts.rejected, (state, action) => {
      //     state.isLoading = false;
      //     state.error = action.payload;
      //   })
      //   .addCase(addContsct.pending, (state, action) => {
      //     state.isLoading = true;
      //   })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      //   .addCase(addContsct.rejected, (state, action) => {
      //     state.isLoading = false;
      //   })
      //   .addCase(deleteContact.pending, state => {
      //     state.isLoading = true;
      //   })
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      //   .addCase(deleteContact.rejected, (state, action) => {
      //     state.isLoading = false;
      //   });
      .addCase(fetchCurrentUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(fetchCurrentUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;