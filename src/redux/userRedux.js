                import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        isError: false,
        error: null,
    },
    reducers: {
        // start: (state) => {
        //     state.isError = false;
        //     state.error = null;
        //     state.isFetching = true;

        // },
            start: (state) => {
            state.isError = false;
            state.isFetching = true;  
            state.error = null; 
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
            state.isError = false;
            state.error = null;

        },
        loginFailed: (state, action) => {
            state.isFetching = false;
            state.currentUser = null;
            state.error = action.payload;
            state.isError = true;
            
        },
        reserError: (state) => {
            state.isError = false;
            state.error = null;
            state.isFetching = false;
        },
        logoutUser: (state) => {
            state.currentUser = null;
            localStorage.clear();
            console.log("clear logout runed")
        }
    }
})

export const {start, loginSuccess, loginFailed, reserError, logoutUser } = userSlice.actions;
export default userSlice.reducer;

