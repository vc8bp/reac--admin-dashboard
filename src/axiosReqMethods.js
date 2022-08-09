import axios from "axios";

const baseURL = `${process.env.REACT_APP_BACKEND_API_BASE_URL}`;

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZWNkMzllMjZmZTVjNTdiNWE4NjFjYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDA0NDM1MywiZXhwIjoxNjYwMjE3MTUzfQ.Q5E-rJPHY6-3adkNiTOP8yxRJv66b-lLvOyyLW5GHDI"

export const req = axios.create({
    baseURL,
    headers : {token: `Bearer ${TOKEN}`},
});