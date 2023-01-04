import { createAsyncThunk } from '@reduxjs/toolkit';
import { createNewUserApi } from '../../api/userApi';
import { ValidationUserType } from '../../types/validation.types';

export const createNewUser = createAsyncThunk(
  'User/createNewUser',
  async (userData: ValidationUserType, thunkApi) => {
    return createNewUserApi(userData);
  }
);
