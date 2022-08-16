import { req } from "../../axiosReqMethods";
import { fetchStart, fetchFailed, fetchSuccess, reserError  } from "../UseersComponentRedux";

export const  fetchUsers = async (dispatch) => {
    dispatch(fetchStart())
    console.log("me 1")
    try {
        console.log("me 2")
        const users = await req.get('/api/users/allinfo');
        console.log("me 3")
        dispatch(fetchSuccess(users.data));
        console.log("me 4")
    } catch (error) {
        console.log("me 5")
        dispatch(fetchFailed(error))
        console.log("me 6")
        setTimeout(() => {
            console.log("me 7")
            dispatch(reserError())
            console.log("me 8")
        }, 5000);
    }
    

}