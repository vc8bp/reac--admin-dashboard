import { Delete, Edit } from '@material-ui/icons'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import { req } from '../axiosReqMethods'
import { userData } from '../ummydata'


const Container = styled.div`
    width: 100%;
    overflow: hidden;
   
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

`
const TopContainer = styled.div`
    padding: 0px 5px;
    height: 40px;
    width: 100%;
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
    overflow-y: auto;
`
const MiddleWrapper = styled.div`
    min-width: 620px;
`
const UsersContainer = styled.div`

    margin: 10px;
    display: flex;
`
const Name = styled.div`
    margin: 0px 5px;
    flex: 1;
`
const Email = styled.div`
    margin: 0px 5px;
    flex: 1;
`
const IsAdmin = styled.div`
    margin: 0px 5px;
    flex: 1;
    text-align: center;
    color: ${props => props.value === true ? "green" : "red"};
`
const IconContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
`

const BottomContainer = styled.div`

`

function User() {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        const getdata = async () => {
            const data = await req.get('/api/users/allinfo')
            setUsers(data.data)
            console.log(data)
        }
        getdata()
        console.log(users)
        
    },[])

    users.map((p) => {
        console.log(p.isAdmin)
    })

  return (
    <Container>
        <Wrapper>
        <TopContainer>
            <Title>User</Title>
            <TotalUsers>total : {users.length}</TotalUsers>
        </TopContainer>

        <MiddleContainer>
            <MiddleWrapper>
                {users.map((p) => (
                    <UsersContainer key={p.id}>
                    <Name>{`${p.firstName} ${p.lastName}`}</Name>
                    <Email>{p.email}</Email>
                    <IsAdmin value = {p.isAdmin} >{JSON.stringify(p.isAdmin)}</IsAdmin>
                    <IconContainer>
                        <Edit/>
                        <Delete/>
                    </IconContainer>
                        
                    </UsersContainer>
                ))}
            </MiddleWrapper>
        </MiddleContainer>

        <BottomContainer>
        </BottomContainer>
        </Wrapper>
    </Container>
  )
}

export default User