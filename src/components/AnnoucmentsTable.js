import {useState} from 'react'
import styled from 'styled-components'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EditAnnouncments from './EditAnnouncments';

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


function AnnoucmentsTable({announcments}) {

    const [editIsOpen, setEditIsOpen] = useState(false)
    const [editAnnoucmentInfo, setEditAnnoucmentInfo] = useState()
  
    const handleEdit = (a) => {
      setEditAnnoucmentInfo(a)
      setEditIsOpen(true)
    }
  return (
    <>
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
                return <Tr key={a._id}>
                <Td>{a.title}</Td>
                <Td>{JSON.stringify(a.active)}</Td>
                <Td>{new Date(a.updatedAt).toLocaleDateString()}</Td>
                <Td>{new Date(a.updatedAt).toLocaleDateString()}</Td>
                <Td>
                <EditIcon onClick={() => handleEdit(a)}/>
                <DeleteIcon/>
                </Td>
            </Tr>
            })}
            </Tbody>
            </Table>
        </TableWrapper> : null}
        <EditAnnouncments isOpen={editIsOpen} setIsOpen={setEditIsOpen} EditAnnouncmentsInfo={editAnnoucmentInfo} title="Edit Annoucment" desc="Edit your Annoucment's information from here" />
      </>
  )
}

export default AnnoucmentsTable