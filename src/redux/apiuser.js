import { req } from "../axiosReqMethods";
import { loginFailed, start, reserError, loginSuccess } from "./userRedux";


export const login = async (dispatch, user) => {
    const {email, password} = user;
    console.log("i failed 1")
    dispatch(start());
    console.log("i failed 2")
    try {
        console.log("i failed 3")
        const res = await req.post("api/auth/login", {email, password});
        dispatch(loginSuccess(res.data));
        console.log("i failed 4")
    } catch (error) {
        console.log("i failed 5")
        dispatch(loginFailed(error.response.data));
        console.log("i failed 6")
        //reseting error
        setTimeout(() => {
            dispatch(reserError())
        }, 5000);

    }
}