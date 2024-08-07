import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import languageSlice from "./languageSlice";
import dataSlice from "./dataSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { thunk } from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["counter", "language"], // Solo los reducers en whitelist se persistirán
};

const rootReducer = combineReducers({
  counter: counterReducer,
  language: languageSlice,
  data: dataSlice, // Este reducer no se persistirá
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }).concat(thunk),
});

export const persistor = persistStore(store);
