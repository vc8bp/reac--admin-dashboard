import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/Navbar';
import SlideBar from '../components/SlideBar';


const Container = styled.div`
  display: flex;
`

const HomeComponent = styled.div`
  flex: 5;
  background-color: red;
  
`


function Home() {
  return (
    <>
      <NavBar/>
      <Container>
        <SlideBar/>
        <HomeComponent>
            <p>Home</p>
        </HomeComponent>
      </Container>
    </>
  )
}

export default Home