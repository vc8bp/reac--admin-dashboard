import {useState, useEffect} from 'react'
import EditModal from './EditModal'
import styled from 'styled-components'


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

  > input, select {
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
  }
`

const Textarea = styled.textarea`
    box-sizing: border-box;
    width: 100%;
    height: 500px;
    resize: vertical;
    padding: 0.9rem 0.5rem;
    background-color: #F4F5F7;
    border: 1px rgb(229,231,235) solid;
    border-radius: 1vmin;
    font-size: 1.1rem;
    outline-color: lightblue;
`


function EditAnnouncments({isOpen, setIsOpen, EditAnnouncmentsInfo, title, desc, action}) {
  const DefaultValues = {title:"", active: false}

  const [annoucment, setAnnoucment] = useState(DefaultValues)

  useEffect(() => {
    if(!EditAnnouncmentsInfo) {
        setAnnoucment({...EditAnnouncmentsInfo})
    }
  }, [])

  const handleSubmit = () => {
    console.log("hello")
  }
  

  return (
    <EditModal isOpen={isOpen} setIsOpen={setIsOpen} action={handleSubmit} title={title} desc={desc}>
        <Container>
            <Section>
                <Left><label>Product Description</label></Left>
                <Right><Textarea name="title"/></Right>
            </Section>

            <Section>
                <Left><label>is activated</label></Left>
                <Right>
                <select >
                    <option value={false}>false</option>
                    <option value={true}>true</option>
                </select>
                </Right>
            </Section>
          
        </Container>
    </EditModal>
  )
}

export default EditAnnouncments