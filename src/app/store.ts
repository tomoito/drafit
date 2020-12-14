import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import draqueReducer from 'feature/DraqWalkSlice';

export const store = configureStore({
  reducer: {
    draque: draqueReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type AppDispatch = typeof store.dispatch;
