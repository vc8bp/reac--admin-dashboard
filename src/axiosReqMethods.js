import axios from "axios";


const baseURL = `${process.env.REACT_APP_BACKEND_API_BASE_URL}`;

//feger out why need refrashe after login and logout




// TOKEN = state?.user?.currentUser?.AccessToken;

// const givetoken = () => {
//     const TOKEN = state?.user?.currentUser?.accessToken;
//     console.log(`token = ${TOKEN}`);
//     return TOKEN;

// }


// if (typeof window !== undefined) {}
    //TOKEN = JSON.parse(JSON.parse(localStorage?.getItem("persist:root"))?.currentUser)?.accessToken;  


    const getToken = () =>{
        const lStorage = localStorage.getItem("persist:root");
        const parsedLocalStorage = lStorage && JSON.parse(lStorage);
        const currentUser = parsedLocalStorage && parsedLocalStorage?.currentUser;
        const AccessToken = currentUser && JSON.parse(currentUser)?.accessToken;
        const TOKEN = AccessToken;
        !TOKEN ? console.log("there is no token in local storage"): console.log(`LOCAL TOKEN = ${TOKEN}`);

        return TOKEN;

    
}

export const req = axios.create({
    baseURL,
    headers : {token: `Bearer ${getToken()}`},
},console.log("me from inside state"));

export const publicreq = axios.create({
    baseURL,
},console.log("me from inside state"));

