import { configureStore, } from '@reduxjs/toolkit';
import todoSlice from 'shared/store/todos';

export const store = configureStore({
  reducer: {
    todo: todoSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
