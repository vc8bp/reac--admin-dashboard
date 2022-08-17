import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { req } from '../axiosReqMethods'



const Container = styled.div`
width: 100%;
background-color: #f6fbfb;
display: flex;
align-items: center;
flex-direction: column;
margin: 20px;
padding: 15px;
border-radius: 1vmax;
`

const Wrapper = styled.div`
  /* width: max(500px); */

`

const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Avatar = styled.img`
  width: 200px;
  height: 200px;
`
const UserID = styled.h2``

const MiddleSection = styled.div`
  
`
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  
  align-items: center;
`
const Input = styled.input`
  flex: 1 0 33%; 
  margin: 20px;
  padding: 10px;

`

const SubmitButton = styled.button`
  width: 100%;
  margin: 0 30px;
  padding: 1  0px;
`

const BottomSection = styled.div``




function UserPage() {
  const [user, setuser] = useState(null)

  const id = useLocation().pathname.split("/")[2]
  console.log(id)

  useEffect(() => {
    const fetchuser = async () => {
      const data = await req.get(`/api/users/info/${id}`);
      setuser(data.data)

    }
    fetchuser();
    console.log(user);
  },[])

  const inputOnchange = (e) => {
    const { name, value } = e.target
    setuser({...user , [name]: value});
    console.log(user)
  }
  

  return (
    <>
      {user && 
      <Container>
        <Wrapper>
        <TopSection>
          <Avatar src={user?.avatar}/>
          <UserID>userID : {user._id}</UserID>
        </TopSection>
        <MiddleSection>
          <Form>
            <Input name='firstName' value={user.firstName} onChange={inputOnchange}></Input>
            <Input name='lastName' value={user.lastName} onChange={inputOnchange}></Input>
            <Input name='email' value={user.email} onChange={inputOnchange}></Input>
            <Input name='number' value={user.number} onChange={inputOnchange}></Input>
            <Input name='isAdmin' value={user.IsAdmin} onChange={inputOnchange}></Input>
            <SubmitButton>Save user</SubmitButton>
          </Form>
        </MiddleSection>
        </Wrapper>
      </Container>}
    </>
  )
}

export default UserPage