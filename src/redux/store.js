import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { thunk } from 'redux-thunk';
import taskReducer from './taskSlice';

// Persist configuration
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['tasks'],  // Persist tasks only
};

const persistedReducer = persistReducer(persistConfig, taskReducer);

const store = configureStore({
  reducer: {
    task: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk), // Add redux-thunk middleware
});

export const persistor = persistStore(store);
export default store;
