import { req } from "../../axiosReqMethods";
import { loginFailed, start, reserError, loginSuccess } from "../userRedux";


export const login = async (dispatch, user) => {
    const {email, password} = user;
    dispatch(start());
    try {
        const res = await req.post("api/auth/login", {email, password});
        dispatch(loginSuccess(res.data));
    } catch (error) {
        
        dispatch(loginFailed(error.response.data));
        //reseting error
        setTimeout(() => {
            dispatch(reserError())
        }, 5000);
    }
}
