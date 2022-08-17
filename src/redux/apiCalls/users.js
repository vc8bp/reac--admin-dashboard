import { req } from "../../axiosReqMethods";
import { fetchStart, fetchFailed, fetchSuccess, reserError  } from "../UseersComponentRedux";

export const  fetchUsers = async (dispatch) => {
    dispatch(fetchStart())
    try {
        const users = await req.get('/api/users/allinfo');
        dispatch(fetchSuccess(users.data));
    } catch (error) {
        dispatch(fetchFailed(error))
        setTimeout(() => {
            dispatch(reserError())
        }, 5000);
    }
    

}