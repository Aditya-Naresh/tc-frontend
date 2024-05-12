import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth/authSlice';
import persistStore from "redux-persist/es/persistStore";

const store = configureStore({
    reducer : {
        auth: authReducer,
    }
})

let peristor = persistStore(store)

export default store;