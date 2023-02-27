import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { friendReducer } from './friendsSlice';
import { filterReducer } from './filterSlice';

// persistStore,
// persistReducer,

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

// const persistConfig = {
//   key: 'friends',
//   version: 1,
//   storage,
//   blacklist: ['filter'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    friends: friendReducer,
    filter: filterReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// export const persistor = persistStore(store);
