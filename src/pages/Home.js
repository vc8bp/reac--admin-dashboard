import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/Navbar';
import SlideBar from '../components/SlideBar';
import User from '../components/User';


const HomeComponent = styled.div`
  flex: 5;
  width: 100%;
  display: flex;
  padding: 20px;
`



function Home() {
  return (
    <>
      
        <HomeComponent>
            <User/>
        </HomeComponent>
 
    </>
  )
}

export default Home

