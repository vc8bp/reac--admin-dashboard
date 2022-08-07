import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom"

import styled from "styled-components";



function App() {
  return (
    <>
        <Routes>  
          <Route path="/" element={<Home/>}></Route>
        </Routes>
    </>
  );
}

export default App;
