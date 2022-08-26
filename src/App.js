import { useEffect, useState } from "react";
import Home from "./pages/Home";
import {Navigate, Route, Routes} from "react-router-dom"
import './App.css'
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import SlideBar from "./components/SlideBar";
import styled from "styled-components";
import UserPage from "./pages/UserPage";
import jwt_decode from "jwt-decode";
import { logoutUser } from "./redux/userRedux";
import { isValidTokenWithAdmin } from "./helperfun/checkToken";

const Container = styled.div`
display: flex;
justify-content: center;
`



function App() {
  // const [tokenCheck, setTokenCheck] = useState(false)
  const user = useSelector(state => state.user.currentUser)
  // console.log(user?.accessToken)

  // useEffect(() => {
  //   console.log(`my token = ${user?.accessToken}`);
  //   const decode = jwt_decode(user?.accessToken);
  //   console.log(decode)

  //   if(user) {
  //     try { 
      
  //     const Token = user?.accessToken;
     
  //     //const result = isValidTokenWithAdmin(Token); //inside funtion this passed token is getting undefined
   
  //     if(result === false) {
    
  //       setTokenCheck(false);
  //       logoutUser()
  
  //     } else {
  //       setTokenCheck(true)
   
  //     }

  //   } catch (error) {
  //       console.log("error from error bolte")
  //       console.log(error)
  //   }
  //   }
  // }, [])
  
  

  return (
    <>
    {user && <Navbar/>}
    <Container>
      {user && <SlideBar/>}
      <Routes>  
        <Route path="/login" element={user ? <Navigate to="/"/> : <Login/>}/>
        <Route path="/" element={!user ? <Navigate to="/login"/> : <Home/>}/>
        <Route path="/user/:id" element={<UserPage/>}/>
      </Routes>
    </Container>
    </>
  );
}

export default App;
