import { createSlice } from '@reduxjs/toolkit'
import { reducerActions, } from './Reducers'

export const Reducer = createSlice({
  name: 'counter',
  initialState: {
    userName: '',
    password: ''

  },
  reducers: reducerActions,
})

// Action creators are generated for each case reducer function
export const { setUserNamePassword } = Reducer.actions

export default Reducer.reducer