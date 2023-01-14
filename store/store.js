import { configureStore } from '@reduxjs/toolkit'
import counterRedcuer from './counterSlice'
import loginReducer from './loginSlice'
export const store = configureStore({
  reducer: {
    counter: counterRedcuer,
    login: loginReducer
  },
})