import Home from "./pages/Home";
import {Navigate, Route, Routes, Outlet} from "react-router-dom"
import './App.css'
import Login from "./pages/Login";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import SlideBar from "./components/SlideBar";
import styled from "styled-components";
import UserPage from "./pages/UserPage";
import Users from "./pages/Users";
import { logoutUser } from "./redux/userRedux";
import jwt_decode from 'jwt-decode'
import Products from "./pages/Products";
import { useState } from "react";

const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`

function IsLogedin() {
  const user = useSelector(state => state.user.currentUser)
  return user ? <Navigate to={"/"}/> : <Outlet/>
}

function PrivateRoute() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.currentUser)

  if(!user?.accessToken) return <Navigate to="/login" />

  try {
    const decoded = jwt_decode(user.accessToken)
    if (decoded.exp * 1000 < Date.now()) {
      dispatch(logoutUser())
      return <Navigate to="/login"/>
    }
  } catch (err) {
    console.log(err)
    dispatch(logoutUser())
    return <Navigate to="/login"/>
  }
  return <Outlet/>
}


function App() {
  const user = useSelector(state => state.user.currentUser)
  
  const [isSlideBarOpen, setisSlideBarOpen] = useState(false)
  return (
    <>
    {user && <Navbar setSideBar={setisSlideBarOpen} isOpen={isSlideBarOpen}/>}
    <Container>
      {user && <SlideBar isOpen={isSlideBarOpen}/>}
      <Routes>  
        <Route element={<IsLogedin/>} >
          <Route path="/login" element={<Login/>}/>
        </Route>

        <Route element={<PrivateRoute/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/user" element={<Users/>}/>
          <Route path="/user/:id" element={<UserPage/>}/>
          <Route path="/products" element={<Products/>}/>
        </Route>
      </Routes>
    </Container>
    </>
  );
}

export default App;
