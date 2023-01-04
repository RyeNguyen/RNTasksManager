import { createSlice } from '@reduxjs/toolkit';
import { createNewUser } from '../thunks/userThunk.thunk';

const initialState = {
  userData: null,
  isLoading: false,
};

const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createNewUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createNewUser.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(createNewUser.rejected, (state, action) => {
        console.log('error from slice', action.error.message);
      });
  },
});

export default userSlice.reducer;
