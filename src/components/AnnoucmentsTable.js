import {useState} from 'react'
import styled from 'styled-components'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EditAnnouncments from './EditAnnouncments';
import { req } from '../axiosReqMethods';
import { useDispatch } from 'react-redux';
import { setError } from '../redux/MessageRedux';
import { removeAnnoucment } from '../redux/AnnoucmentRedux';

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

const Status = styled.p`
  font-weight: 500;
  margin: 0;
  text-align: center;
  border-radius: 50px;
  background-color: ${props => props.status ? "rgb(222 255 190);" : "rgb(255 223 223);"};
  color: ${props => props.status ? "rgb(92 189 0);;" : "rgb(255 101 101)"};
  border: 1px solid ${props => props.status ? "rgb(92 189 0);;" : "rgb(255 101 101)"};
`;


function AnnoucmentsTable({announcments}) {

    const dispatch = useDispatch()

    const [editIsOpen, setEditIsOpen] = useState(false)
    const [editAnnoucmentInfo, setEditAnnoucmentInfo] = useState()
  
    const handleEdit = (a) => {
      setEditAnnoucmentInfo(a)
      setEditIsOpen(true)
    }

    const handleDelete = async (id) => {
      try {
        const {data} = await req.delete(`/api/announcment/${id}`);
        dispatch(setError(data.message))
        dispatch(removeAnnoucment(id))
      } catch (error) {
        console.log(error.response.data.message)
        dispatch(setError(error.response.data.message))
      }
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
                <Td><Status status={a.active}>{a.active ? "Activated" : "Deactivated"}</Status></Td>
                <Td>{new Date(a.createdAt).toLocaleDateString()}</Td>
                <Td>{new Date(a.updatedAt).toLocaleDateString()}</Td>
                <Td>
                <EditIcon onClick={() => handleEdit(a)}/>
                <DeleteIcon onClick={() => handleDelete(a._id)}/>
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