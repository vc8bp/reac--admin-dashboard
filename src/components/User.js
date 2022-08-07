import { Delete, Edit } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    background-color: red;
    overflow-y: auto;
`
const Wrapper = styled.div`
    min-width: 620px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: yellow;
`
const TopContainer = styled.div`
    padding: 0px 5px;
    height: 40px;
    width: 100%;
    background-color: lightblue;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Title = styled.div`
    font-size: 2rem;
    font-weight: 300;
`
const TotalUsers = styled.div`
    font-size: 2rem;
    font-weight: 300;
`

const MiddleContainer = styled.div`
    width: 100%;
`
const UsersContainer = styled.div`

    margin: 10px;
    display: flex;
    justify-content: space-between;
`
const Name = styled.div`
    margin: 0px 5px;
`
const Email = styled.div`
    margin: 0px 5px;
`
const IsAdmin = styled.div`
    margin: 0px 5px;
`

const BottomContainer = styled.div`

`

function User() {
  return (
    <Container>
        <Wrapper>
        <TopContainer>
            <Title>User</Title>
            <TotalUsers>total : 20</TotalUsers>
        </TopContainer>

        <MiddleContainer>
            <UsersContainer>
                <Name>vivek chaturvedi</Name>
                <Email>vc8bp3@gmail.com</Email>
                <IsAdmin>true</IsAdmin>
                <Edit/>
                <Delete/>
            </UsersContainer>
            <UsersContainer>
                <Name>vivek chaturvedi</Name>
                <Email>vc8bp3@gmail.com</Email>
                <IsAdmin>true</IsAdmin>
                <Edit/>
                <Delete/>
            </UsersContainer>
            <UsersContainer>
                <Name>vivek chaturvedi</Name>
                <Email>vc8bp3@gmail.com</Email>
                <IsAdmin>true</IsAdmin>
                <Edit/>
                <Delete/>
            </UsersContainer>
            <UsersContainer>
                <Name>vivek chaturvedi</Name>
                <Email>vc8bp3@gmail.com</Email>
                <IsAdmin>true</IsAdmin>
                <Edit/>
                <Delete/>
            </UsersContainer>
            <UsersContainer>
                <Name>vivek chaturvedi</Name>
                <Email>vc8bp3@gmail.com</Email>
                <IsAdmin>true</IsAdmin>
                <Edit/>
                <Delete/>
            </UsersContainer>
            <UsersContainer>
                <Name>vivek chaturvedi</Name>
                <Email>vc8bp3@gmail.com</Email>
                <IsAdmin>true</IsAdmin>
                <Edit/>
                <Delete/>
            </UsersContainer>
        </MiddleContainer>

        <BottomContainer>
        </BottomContainer>
        </Wrapper>
    </Container>
  )
}

export default User