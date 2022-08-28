import axios from "axios";



const baseURL = `${process.env.REACT_APP_BACKEND_API_BASE_URL}`;

//feger out why need refrashe after login and logout

//JhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjA0ZjFlODcyMjExOTZhYTY5MmE4OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MTE3NjM4OSwiZXhwIjoxNjYxMjYyNzg5fQ.EUgeKQzu2AFZmJMzTPVTcpTCbR-q-Vaw614XBWdAAn8


// TOKEN = state?.user?.currentUser?.AccessToken;

// const givetoken = () => {
//     const TOKEN = state?.user?.currentUser?.accessToken;
//     console.log(`token = ${TOKEN}`);
//     return TOKEN;

// }

// console.log(`token from custom hook ${token}`);

// const getToken = () => {
//     console.log("gettoken runed")
//     if (typeof window !== undefined) {
//         const TOKEN = JSON.parse(localStorage?.getItem("persist:root"))?.currentUser 
//                       ? JSON.parse(JSON.parse(localStorage?.getItem("persist:root"))?.currentUser)?.accessToken
//                       : null;
//         return TOKEN;
        
//     }
// }


// export const getToken = () =>{
//     console.log("get token runed")
//     const lStorage = localStorage.getItem("persist:root");
//     const parsedLocalStorage = lStorage && JSON.parse(lStorage);
//     const currentUser = parsedLocalStorage && parsedLocalStorage?.currentUser;
//     const AccessToken = currentUser && JSON.parse(currentUser)?.accessToken;
//     const TOKEN = AccessToken;
//     !TOKEN ? console.log("there is no token in local storage"): console.log(`Your final tokenn = ${TOKEN}`);

//     return TOKEN;   
// }


export const req = axios.create({
    baseURL,
    //headers : {token: `Bearer ${getToken()}`},
});
 
export const publicreq = axios.create({
    baseURL,
});

req.interceptors.request.use(config => {
    const TOKEN = JSON.parse(localStorage?.getItem("persist:root"))?.currentUser 
                      ? JSON.parse(JSON.parse(localStorage?.getItem("persist:root"))?.currentUser)?.accessToken
                      : null;
    console.log(TOKEN)
    const token = ` bearer ${TOKEN}`;
    config.headers = Object.assign({
        token: token
    });

    return config;
})

// export const privateReq = () => {
//     const TOKEN = JSON.parse(localStorage?.getItem("persist:root"))?.currentUser 
//                       ? JSON.parse(JSON.parse(localStorage?.getItem("persist:root"))?.currentUser)?.accessToken
//                       : null;
//     return axios.create({
//         baseURL,
//         headers : `bearer ${TOKEN}`
//     })
// }

export const privateReq = () => {
    return axios.create({
       baseURL, 
       headers: {
       //token: `bearer ${TOKEN}`
      }
   });
  
 }

