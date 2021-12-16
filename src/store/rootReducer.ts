import { jwtSlice, navSlice } from './slices';

export const reducer = {
  [jwtSlice.name]: jwtSlice.reducer,
  [navSlice.name]: navSlice.reducer,
};
