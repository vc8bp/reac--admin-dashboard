import Home from "./pages/Home";
import {Navigate, Route, Routes} from "react-router-dom"

import styled from "styled-components";
import Login from "./pages/Login";
import { useSelector } from "react-redux";



function App() {

  const user = useSelector(state => state.user.currentUser)
  return (
    <>
        <Routes>  
          <Route path="/login" element={user ? <Navigate to="/"/> : <Login/>}/>
          <Route path="/" element={!user ? <Navigate to="/login"/> : <Home/>}/>
        </Routes>
    </>
  );
}

export default App;
