import { configureStore } from '@reduxjs/toolkit';
import ThunkMiddleware from 'redux-thunk';
import todoReducer from '../features/todo/todoSlice';
import filterReducer from '../features/filter/filterSlice';
import { one } from '../testMiddleWare';
import loadingReducer from '../features/todo/loadingSlice';


export const store = configureStore({
  reducer: {
    todos: todoReducer,
    filters: filterReducer,
    loading: loadingReducer,
  },
  devTools:true,
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(ThunkMiddleware,one),
});


