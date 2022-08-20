import { req } from "../../axiosReqMethods";
import { fetchStart, fetchFailed, fetchSuccess, reserError,  } from "../UseersComponentRedux";
import { logoutUser } from "../userRedux";



export const  fetchUsers = async (dispatch) => {
    dispatch(fetchStart())
    try {
        const users = await req.get('/api/users/allinfo');
        dispatch(fetchSuccess(users.data));
        console.log("is not error in login")
    } catch (error) {
        if(error.response.data === "token is not valid") {
            console.log("is error in login")
            
            dispatch(fetchFailed("your session is expired"))      
            dispatch(logoutUser());
            localStorage.clear();
            
        } else {
            dispatch(fetchFailed(error.response.data));
        }
        
        setTimeout(() => {
            dispatch(reserError())
        }, 5000);
    }
    

}

export const updateUser = async (userID, data) => {
    try {
        const res = req.put(`/api/users/${userID}`, data);
        return res;
    } catch(err) {
        console.log(`error is ${err}`)
    }
}