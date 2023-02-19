import React from 'react'
import styled from 'styled-components'
import AddIcon from '@mui/icons-material/Add';
import { useEffect } from 'react';
import { req } from '../axiosReqMethods';
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EditAnnouncments from '../components/EditAnnouncments';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  height: 100dvh;
  display: flex;
  justify-content: center;
  background-color: #F0F2F5;
`
const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 1rem;
`
const Title = styled.h1`
  font-size: 2rem;
  color: #444;
  margin-bottom: 1rem;
`
const TopSection = styled.div`
  background-color: #FFF;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`
const AddAnnouncments = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;
  color: #444;
  cursor: pointer;
`
const IconContainer = styled.div`
  border: 2px solid teal;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  transition: all 0.3s ease-in-out;

  >svg {
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    transform: scale(1.1);
    background-color: teal;
    > svg {
      
      color: white;
    }
  }
`
const TableWrapper = styled.div`
  margin-top: 1rem;
  overflow: auto;
  border: 1px solid #EEE;
  border-radius: 1vmin;
`
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`
const Thead = styled.thead`
  background-color: teal;
  color: #FFF;
  text-align: left;
`
const Tbody = styled.tbody``
const Tr = styled.tr`
  border-bottom: 1px solid #EEE;
  &:last-child {
    border-bottom: none;
  }
`
const Td = styled.td`
  padding: 1rem;
`

function Annoucment() {

  const [announcments, setannouncments] = useState()
  useEffect(() => {
    (async () => {
      const {data} = await req.get("/api/announcment/all")
      setannouncments(data)}
    )()
  }, [])

  const [editIsOpen, setEditIsOpen] = useState(false)
  const [editAnnoucmentInfo, setEditAnnoucmentInfo] = useState()

  const handleEdit = (a) => {
    setEditAnnoucmentInfo(a)
    setEditIsOpen(true)
  }

  return (
    <Container>
      <Wrapper>
        <Title>Announcments</Title>
        <TopSection>
          <AddAnnouncments><IconContainer><AddIcon/></IconContainer>add Announcments</AddAnnouncments>
          {announcments ? <TableWrapper>
            <Table>
              <Thead>
                <Tr>
                  <Td>Title</Td>
                  <Td>Status</Td>
                  <Td>Date Added</Td>
                  <Td>Last updated</Td>
                  <Td>Actions</Td>
                </Tr>
              </Thead>
              <Tbody>
              {announcments.map(a => {
                return <Tr>
                <Td>{a.title}</Td>
                <Td>{JSON.stringify(a.active)}</Td>
                <Td>{new Date(a.updatedAt).toLocaleDateString()}</Td>
                <Td>{new Date(a.updatedAt).toLocaleDateString()}</Td>
                <Td>
                  <EditIcon onClick={() => handleEdit (a)}/>
                  <DeleteIcon/>
                </Td>
              </Tr>
              })}
              </Tbody>
            </Table>
          </TableWrapper> : null}
        </TopSection>
      </Wrapper>
    <EditAnnouncments isOpen={editIsOpen} setIsOpen={setEditIsOpen} EditAnnouncmentsInfo={editAnnoucmentInfo} title="Edit Annoucment" desc="Edit your Annoucment's information from here" />
    </Container>
  )
}

export default Annoucment