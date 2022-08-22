import jwt_decode from 'jwt-decode'


export function isAdmin(Token)  {
    console.log(`inside funtion token = ${Token}`)
    const decodedToken = jwt_decode(Token)
    console.log(decodedToken)
    if(decodedToken.isAdmin === true){
        return true;    
    } else {
        return {success: false, error: "is not admin"};
    }
}

export function isValidTokenWithAdmin(Token) {
    console.log("isValidTokenWithAdmin called")
    const decodedToken = jwt_decode(Token);
    const currentDate = Date.now();
      
      if(currentDate < decodedToken.exp){
        return {success: false, error: "token is expired"}
      } else {
        return isAdmin()
      }
}