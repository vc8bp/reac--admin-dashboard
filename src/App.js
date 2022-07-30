import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom"
import Navbar from "./components/Navbar";
import SlideBar from "./components/SlideBar";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`

function App() {
  return (
    <>
      <Navbar/>
      <Container>
        <SlideBar/>
        <Routes>  
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
