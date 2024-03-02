export const reducerActions = {
    
    setUserNamePassword: (state, action) => {
        console.log(action.payload.userName +" setting "+ action.payload.password);
        state.userName = action.payload.userName;
        state.password = action.payload.password;
      },
  };