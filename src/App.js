import Home from "./pages/Home";
import {Navigate, Route, Routes} from "react-router-dom"
import './App.css'
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import SlideBar from "./components/SlideBar";
import styled from "styled-components";
import UserPage from "./pages/UserPage";

const Container = styled.div`
display: flex;
justify-content: center;
`



function App() {

  const user = useSelector(state => state.user.currentUser)
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
