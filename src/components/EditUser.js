import {useState, useEffect} from 'react'
import EditModal from './EditModal'
import styled from 'styled-components'
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';


const Container = styled.div`
  margin: 1rem 0;
  display: grid;
  gap: 1rem;
  @media (max-width: 800px) { //added this bza left side was overflowing
    margin-left: 1em;
  }
`
const Section = styled.div`
  display: flex;

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`
const Left = styled.div`
  flex: 1;

`
const Right = styled.div`
  flex: 2;
`
const UploadImage = styled.div`
  
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px dashed black;
  padding: 1rem;

  > svg {
    color: teal;
  }
`
const UploadTitle = styled.span`

`
const UploadDesc = styled.p`
  font-size: 0.7rem;
`
const Lable = styled.label`

`

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 0.9rem 0.5rem;
  background-color: #F4F5F7;
  border: 1px rgb(229,231,235) solid;
  border-radius: 1vmin;
  font-size: 1.1rem;
  outline: none;

  :focus  {
    background-color: white;
  }
`

const TagSection = styled.div`
  display: flex;
  background-color: #F4F5F7;
  flex-wrap: wrap;

  > input {
    border-radius: 0;
    border: none;
    
  }
`


function EditUser({isOpen, setIsOpen, EditUserInfo, title, desc}) {
  const DefaultValues = {firstName:"", lastName:"", email:"", phone:"", number:"", isAdmin:"false"}

  const [User, setUser] = useState(DefaultValues)

  useEffect(() => {
    if(!EditUserInfo) return 
    setUser({...EditUserInfo})
  }, [EditUserInfo])

  const handleChange = (e) => {
    const { name, value} = e.target;
    setUser((p) => ({...p, [name] :  value}))
  }

  const handleSubmit = () => {
    if(!EditUserInfo) {
    } else {
    }
    
    setIsOpen(false)
  }



  return (
    <EditModal isOpen={isOpen} setIsOpen={setIsOpen} action={handleSubmit} title={title} desc={desc}>
              <Container>
          <Section>
            <Left>
              <Lable>User Image</Lable>
            </Left>
            <Right>
              <UploadImage>
                <CloudUploadOutlinedIcon/>
                <UploadTitle>Drag your image here</UploadTitle>
                <UploadDesc>(Only *.jpeg and *.png images will be accepted)</UploadDesc>
              </UploadImage>
            </Right>
          </Section>

           <Section>
            <Left><Lable>First name</Lable></Left>
            <Right><Input name="firstName" value={User?.firstName} onChange={e => handleChange(e)}/></Right>
          </Section>

          <Section>
            <Left><Lable>Last name</Lable></Left>
            <Right><Input name="lastName" value={User?.lastName} onChange={e => handleChange(e)}/></Right>
          </Section>


          <Section>
            <Left><Lable>Email</Lable></Left>
            <Right><Input name="email" value={User?.email} onChange={e => handleChange(e)}/></Right>
          </Section>

          <Section>
            <Left><Lable>Number</Lable></Left>
            <Right><Input name="number" value={User?.number} onChange={e => handleChange(e)}/></Right>
          </Section>

          <Section>
            <Left><Lable>IsAdmin</Lable></Left>
            <Right><Input name="price" value={User?.price} onChange={e => handleChange(e)}/></Right>
          </Section>
          
        </Container>
    </EditModal>
  )
}

export default EditUser