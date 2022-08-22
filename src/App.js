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
  const [tokenCheck, setTokenCheck] = useState(false)
  const user = useSelector(state => state.user.currentUser)
  console.log(user?.accessToken)

  useEffect(() => {
    console.log(`my token = ${user.accessToken}`);
    const decode = jwt_decode(user.accessToken);
    console.log(decode)

    if(user) {
      try { 
      console.log("break 1")
      const Token = user?.accessToken;
      console.log(Token)
      console.log("break 2")
      const result = isValidTokenWithAdmin(Token); //inside funtion this passed token is getting undefined
      console.log("break 3")
      console.log(result)
      console.log("break 4")
      if(result === false) {
        console.log("break 5")
        setTokenCheck(false);
        console.log("break 6")
        logoutUser()
        console.log("break 7")
      } else {
        setTokenCheck(true)
        console.log("break 8")
      }

    } catch (error) {
        console.log("error from error bolte")
        console.log(error)
    }
    }
  }, [])
  
  

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
