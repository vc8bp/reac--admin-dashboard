import { useEffect } from "react";
import Home from "./pages/Home";
import {Navigate, Route, Routes, useLocation} from "react-router-dom"
import './App.css'
import Login from "./pages/Login";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import SlideBar from "./components/SlideBar";
import styled from "styled-components";
import UserPage from "./pages/UserPage";

import Users from "./pages/Users";
import { isValidTokenWithAdmin } from "./helperfun/checkToken";
import { logoutUser } from "./redux/userRedux";

const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`



function App() {
  const dispatch = useDispatch()
  // const [tokenCheck, setTokenCheck] = useState(false)
  const user = useSelector(state => state.user.currentUser)
  console.log(user?.accessToken)
  const location = useLocation()
  useEffect(() => {
    if(user){
        const res = isValidTokenWithAdmin(user?.accessToken);
        if (res !== true) {
          dispatch(logoutUser());
          localStorage.clear();
          console.log("user logout success bczof token expired");
        } else {
          console.log("user is admin with not expired token");
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
        <Route path="/user" element={!user ? <Navigate to="/login"/> : <Users/>}/>
        <Route path="/user/:id" element={!user ? <Navigate to="/login"/> :<UserPage/>}/>
      </Routes>
    </Container>
    </>
  );
}

export default App;
