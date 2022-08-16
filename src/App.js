import Home from "./pages/Home";
import {Navigate, Route, Routes} from "react-router-dom"
import './App.css'
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import './index.css'



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
