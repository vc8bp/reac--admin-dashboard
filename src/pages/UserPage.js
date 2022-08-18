import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { req } from '../axiosReqMethods'
import { updateUser } from '../redux/apiCalls/users'
import { mobile } from '../Responsive'


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


const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  ${mobile({
    flexDirection: "column",
    margin: "10px"
  })} 

  
`
const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px 100px / 150px;
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
  padding: 15px;
  border-radius: 1vmin;
  border: none;
  background-color: #d2e5e5;

`
const Select = styled.select`
  flex: 1 0 33%; 
  margin: 20px;
  padding: 15px;
  border-radius: 1vmin;
  border: none;
  background-color: #d2e5e5;


`
const Option = styled.option`
  

`

const SubmitButton = styled.button`
  width: 40%;
  border: none;
  background-color: teal;;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  border-radius: 1vmin;
  //margin-right: 60% ;
  margin-left: 58%;

  &:disabled{
    color: green;
    background-color: #e1e6ed;
    cursor: not-allowed;
  }

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
    
  },[])

  const inputOnchange = (e) => {
    const { name, value } = e.target
    setuser((prev) => ({...prev , [name]: value}));
    console.log(user);
    console.log(user.isAdmin)
    
  }

  const onSubmit = (e) => {
    //e.preventDefault();
    e.preventDefault();
    const {resetPasswordExpire,createdAt,_id , ...others} = user;
    updateUser(user._id, others)
    
    // const data = req.put(`/api/users/${user._id}`, others);
    // console.log(data)
  
  }
   

  return (
    <>
      {user && 
      <Container>
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
            <Select name='isAdmin' value={JSON.stringify(user.isAdmin)} onChange={inputOnchange}>
              <Option value={true}>True</Option>
              <Option value={false}>False</Option>
            </Select>
            <SubmitButton onClick={onSubmit}>Save user</SubmitButton>
          </Form>
        </MiddleSection>
      </Container>}
    </>
  )
}

export default UserPage