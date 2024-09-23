import { configureStore } from "@reduxjs/toolkit";
// sabse pahle ye lana hai, ye core Redux se aya

import todoReducer from '../features/todo/todoSlice'
export const store = configureStore({
    reducer: todoReducer
})