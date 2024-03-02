import { createSlice } from '@reduxjs/toolkit'

export const Reducer = createSlice({
  name: 'counter',
  initialState: {
    userName: '',
    password: ''

  },
  reducers: {
    
    setUserNamePassword: (state, action) => {
        console.log(action.payload.userName +" setting "+ action.payload.password);
        state.userName = action.payload.userName;
        state.password = action.payload.password;
      },
  },
})

// Action creators are generated for each case reducer function
export const { setUserNamePassword } = Reducer.actions

export default Reducer.reducer