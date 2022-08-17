import axios from "axios";

const baseURL = `${process.env.REACT_APP_BACKEND_API_BASE_URL}`;

//feger out why need refrashe after login and logout


let TOKEN = null;

if (typeof window !== undefined) {
    console.log("i am not undefined")

    TOKEN = JSON.parse(JSON.parse(localStorage?.getItem("persist:root"))?.currentUser)?.accessToken;  
}
export const req = axios.create({
    baseURL,
    headers : {token: `Bearer ${TOKEN}`},
});

