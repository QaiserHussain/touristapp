import { configureStore } from '@reduxjs/toolkit'
import counterRedcuer from './counterSlice'
export const store = configureStore({
  reducer: {
    counter: counterRedcuer
  },
})