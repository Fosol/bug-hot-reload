import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { INavState } from '.';

export const navSlice = createSlice({
  name: 'nav',
  initialState: {
    status: false,
  },
  reducers: {
    storeStatus(state: INavState, action: PayloadAction<boolean>) {
      state.status = action.payload;
    },
  },
});

export const { storeStatus } = navSlice.actions;
