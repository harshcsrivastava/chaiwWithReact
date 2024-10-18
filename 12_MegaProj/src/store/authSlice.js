import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null,
}

// name, initialstate, reducers dena hota
const authSlice = createSlice({
    name: 'auth',
    initialState,
    // The reducers key is an object that contains functions (reducers) to handle specific actions that modify the state.
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        // , action => ki jrurat nhi lekin access hai
        logout : (state) => {
            state.status = false;
            state.userData = null;
        }
    }
})

// The login reducer sets the status to true and the userData to the payload of the action.
export const {login, logout} = authSlice.actions;
// aise upar jaise export krenge
// ye auth ka SLICE hai
// Assignment me Post ka bhi SLICE banana hai* :: 4:35:00
export default authSlice.reducer;


// Summary:
// authSlice contains two reducer functions:

// login: Updates the state to reflect a logged-in user, storing the user data.
// logout: Resets the state to reflect that the user is logged out, clearing user data.
// Redux Toolkit's createSlice automatically generates action creators for you. So you can dispatch the actions like this:
// dispatch(authSlice.actions.login({ userData: userInfo }));
// dispatch(authSlice.actions.logout());
