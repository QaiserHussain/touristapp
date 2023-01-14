import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {},
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    savedUser: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { savedUser } = userSlice.actions

export default userSlice.reducer