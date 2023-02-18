import React from 'react'
import styled from 'styled-components'
import AddIcon from '@mui/icons-material/Add';
import { useEffect } from 'react';
import { req } from '../axiosReqMethods';
import { useState } from 'react';


const Container = styled.div`
  width: 100vw;
`
const Wrapper = styled.div`
  margin: auto;
  width: 1200px;
  max-width: 95%;
`
const Title = styled.h1`

`
const TopSection = styled.div`
`
const AddAnnouncments = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const IconContainer = styled.div`
  border: 1px solid green;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 2px;
`

const TableWrapper = styled.div``
const Table = styled.table``
const Thead = styled.thead`
  padding: 10px 0;
`
const Tbody = styled.tbody``
const Tr = styled.tr``
const Td = styled.td`
  padding: 5px;
`

function Annoucment() {

  const [announcments, setannouncments] = useState()
  useEffect(() => {
    (async () => {
      const {data} = await req.get("/api/announcment/all")
      setannouncments(data)}
    )()
  }, [])

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
                </Tr>
              </Thead>
              <Tbody>
              {announcments.map(a => {
                return <Tr>
                <Td>{a.title}</Td>
                <Td>{JSON.stringify(a.active)}</Td>
                <Td>{new Date(a.updatedAt).toLocaleString()}</Td>
                <Td>{new Date(a.updatedAt).toLocaleString()}</Td>
              </Tr>
              })}
              </Tbody>
            </Table>
          </TableWrapper> : null}
        </TopSection>
      </Wrapper>
    </Container>
  )
}

export default Annoucment