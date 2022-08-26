// import { createSlice } from "@reduxjs/toolkit";


// const UsersSlice = createSlice({
//     name: "users",
//     initialState: {
//         fetchedUsers: [],
//         currentUser: null,
//         isFetching: false,
//         isError: false,
//         error: null,

//     },
//     reducers: {
//         fetchStart: (state) => {
//             state.isFetching = true;
//             state.isError = false;
//             state.error = null;
//         },
//         fetchSuccess: (state, action) => {
//             state.fetchedUsers = action.payload;
//             state.isFetching = false;
//         },
//         fetchFailed: (state, action) => {
//             state.isFetching = false;
//             state.isError = true;
//             state.error = action.payload;
//         },
//         reserError: (state) => {
//             state.isError = false;
//             state.error = null;
//         }
//     }
// })
// export const {fetchStart, fetchFailed, fetchSuccess, reserError} = UsersSlice.actions;
// export default UsersSlice.reducer;



import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: {
        fetchedUsers: [],
        isFetching: false,
        isError: false,
        error: null,
    },
    reducers: {
 
        fetchStart: (state) => {
            state.isError = false;
            state.isFetching = true;  
            state.error = null; 
        },
        fetchSuccess: (state, action) => {
            state.isFetching = false;
            state.fetchedUsers = action.payload;
            state.isError = false;
            state.error = null;

        },
        fetchFailed: (state, action) => {
            state.isFetching = false;
            state.currentUser = null;
            state.error = action.payload;
            state.isError = true;
            
        },
        reserError: (state) => {
            state.isError = false;
            state.error = null;
        },
        clearUsers: (state) => {
            state.fetchedUsers = [];
            state.isFetching = false;
            state.isError = false;
            state.error = null;
        }
    }
})

export const {fetchStart, fetchFailed, fetchSuccess, reserError, clearUsers} = userSlice.actions;
export default userSlice.reducer;

