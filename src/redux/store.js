import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { friendReducer } from './friendsSlice';
import { filterReducer } from './filterSlice';
import { userReducer } from './user/userSlice';

//збереження в локал сторедж окремо
// const persistConfig = {
//   key: 'friends',
//   version: 1,
//   storage,
// };

// const filterPersistConfig = {
//   key: 'filter',
//   version: 1,
//   storage,
// };

// constpersistedFriendReducer = persistReducer(persistConfig, friendReducer);
// const filterPersistedReducer = persistReducer(
//   filterPersistConfig,
//   filterReducer
// );

//збереження в локал сторедж одним об'єктом
// const rootReducer = combineReducers({
//   friends: friendReducer,
//   filter: filterReducer,
// });

const persistConfig = {
  key: 'user',
  version: 1,
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    friends: friendReducer,
    filter: filterReducer,
    user: persistedReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
