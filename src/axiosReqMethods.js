import axios from "axios";

const baseURL = `${process.env.REACT_APP_BACKEND_API_BASE_URL}`;

//refer to this for gret from local storage


const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.currentUser)?.accessToken;

export const req = axios.create({
    baseURL,
    headers : {token: `Bearer ${TOKEN}`},
});