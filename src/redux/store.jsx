import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
// import storageSession from 'reduxjs-toolkit-persist/lib/storage/session'
import thunk from 'redux-thunk';
import authReducer from "./authReducer";

const persistConfig = {
    key: 'root',
    // storageSession,
    storage
}

const persistedReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})

export const persistor = persistStore(store)