import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/Navbar';
import SlideBar from '../components/SlideBar';


const Container = styled.div`
  display: flex;
  flex: 5;
  justify-content: center;
`

const HomeComponent = styled.div`
  
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  border: solid teal 1px;
  border-radius: 1vmax;
  margin: 20px;
  padding: 10px 15px;
`

const Title = styled.h1`
  font-weight: 500;

`
const Form = styled.form`

`
const Input = styled.input`

`

const UsersContainer = styled.div


function Home() {
  return (
    <>
      
      <Container>
        <HomeComponent>
            <Wrapper>
              <Title>i am title 1</Title>

            </Wrapper>
            <Wrapper>
              <Title>i am title 2</Title>
            </Wrapper>
        </HomeComponent>
      </Container>
    </>
  )
}

export default Home