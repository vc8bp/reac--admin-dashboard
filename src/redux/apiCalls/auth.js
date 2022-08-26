import { publicreq } from "../../axiosReqMethods";
import { loginFailed, start, reserError, loginSuccess } from "../userRedux";


export const login = async (dispatch, user) => {
    const {email, password} = user;
    dispatch(start());
    try {
        const res = await publicreq.post("api/auth/login", {email, password});
        dispatch(loginSuccess(res?.data));
        console.log("LOgin done")
        
    } catch (error) {
        console.log(error)
        dispatch(loginFailed(error.response?.data));
        //reseting error
        setTimeout(() => {
            dispatch(reserError())
        }, 5000);
    }
}
