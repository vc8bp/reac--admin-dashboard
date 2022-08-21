import axios from "axios";
import { store } from "./redux/store";

const baseURL = `${process.env.REACT_APP_BACKEND_API_BASE_URL}`;

//feger out why need refrashe after login and logout


let TOKEN = null;
const state = store.getState();
TOKEN = state?.user?.currentUser?.AccessToken;


// if (typeof window !== undefined) {}
    //TOKEN = JSON.parse(JSON.parse(localStorage?.getItem("persist:root"))?.currentUser)?.accessToken;  
    const getToken = () =>{
        const lStorage = localStorage.getItem("persist:root");
        const parsedLocalStorage = lStorage && JSON.parse(lStorage);
        const currentUser = parsedLocalStorage && parsedLocalStorage?.currentUser;
        const AccessToken = currentUser && JSON.parse(currentUser)?.accessToken;
        TOKEN = AccessToken;
        console.log(`token = ${state?.user?.currentUser?.AccessToken}`)
        return TOKEN && state?.user?.currentUser?.AccessToken

    
}
console.log(getToken())
export const req = axios.create({
    baseURL,
    headers : {token: `Bearer ${TOKEN}`},
},console.log("me from inside state"));

