import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import EditUser from '../components/EditUser'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Confirmation from './Confirmation';
import { req } from '../axiosReqMethods';
import { deleteUser } from '../redux/UseersComponentRedux';
import { setError } from '../redux/MessageRedux';


const TableWrapper = styled.div`
    margin-top: 20px;   
    overflow: auto;
    border: 1px solid #d5d6d7;
    border-radius: 1vmin;
`
const Table = styled.table`
    width: 100%; 
    min-width: 1000px;   
    border-collapse: collapse;  
    overflow: auto  ;
`
const Thead = styled.thead`
    background-color: teal;
    color: white;
`
const Tbody = styled.tbody`
    background-color: white;

    > :nth-last-child() {
        border-bottom: 2px solid teal;
        background-color: red;
    }
    
`
const Td = styled.td`
    padding: 0.75rem 1rem;
    vertical-align: middle;
    margin-top: auto;

    > div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    > svg{
        color: rgb(171,171,171);

        :hover {
            color: rgb(130,130,130);
        }
    }

    > div > svg {
        color: rgb(171,171,171);
        :hover {
            color: rgb(130,130,130);
        }
    }
`
const Tr = styled.tr`
    border-bottom: 1px solid #d5d6d7;

`
const Image = styled.img`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    object-position: center;
`
const IsAdmin = styled.div`
    color: ${p => p.value ? "green" : "red"};
`

function UsersTableComp() {
    const dispatch = useDispatch()
    const data = useSelector(state => state.users);
    const users = data.fetchedUsers;
    console.log()


    //edit user
    const [isOpen, setIsOpen] = useState(false)
    const [EditUserInfo, setEditUserInfo] = useState(null)

    //delete user
    const [isWarningOpen, setIsWarningOpen] = useState(false)
    const [DeleteUserInfo, setDeleteUserInfo] = useState(null)

    const DeleteUser = async () => {
        const userId = DeleteUserInfo._id;
        try {
            const {data} = await req.delete(`/api/users/${userId}`)
            dispatch(deleteUser(userId))
            dispatch(setError(`${DeleteUserInfo.firstName} ${DeleteUserInfo.lastName}'s Account is deleted Successfully!!`))
        } catch (error) {
            dispatch(setError(`Failed to delete ${DeleteUserInfo.firstName} ${DeleteUserInfo.lastName}'s Account`))
        }
        setIsWarningOpen(false)
    }


  return ( <>
    <TableWrapper>
        <Table>
            <Thead>
                <tr>
                    <Td>ID</Td>
                    <Td>JOINING DATE</Td>
                    <Td>NAME</Td>
                    <Td>EMAIL</Td>
                    <Td>PURCHASED</Td>
                    <Td>isAdmin</Td>
                    <Td>ACTIONS</Td>
                </tr>
                
            </Thead>
            <Tbody>
                {users?.map((u) => {
                    return <Tr key={u._id}>
                        <Td>
                            <div>
                                <ContentCopyIcon onClick={() => navigator.clipboard.writeText(u?._id)}/>                 
                            </div>
                        </Td>
                        <Td>{new Date(u.createdAt).toDateString()}</Td>
                        <Td>{`${u.firstName} ${u.lastName}`}</Td>
                        <Td>{u.email}</Td>
                        <Td>{u?.purchasedProducts?.length}</Td>
                        <Td><IsAdmin value={u.isAdmin}>{JSON.stringify(u.isAdmin)}</IsAdmin></Td>
                        <Td>
                            <div>
                                <EditIcon onClick={() => {setEditUserInfo(u); setIsOpen(true)}} />
                                <DeleteIcon onClick={() => {setDeleteUserInfo(u); setIsWarningOpen(true)}}/>
                            </div>
                        </Td>
                    </Tr>
                })}
            </Tbody>
        </Table>
    </TableWrapper>
    <Confirmation isOpen={isWarningOpen} setIsOpen={setIsWarningOpen} action={DeleteUser} >
        <div style={{display: "flex", flexDirection:"column", textAlign: "center", gap: "0.5rem"}} >
            <b>Are You Sure! Want to Delete <span style={{color: "red"}}>{`${DeleteUserInfo?.firstName} ${DeleteUserInfo?.lastName}`}</span> This User?</b>
            <span>Do you really want to delete these User? You can't view this in your list anymore if you delete!</span>
        </div>
    </Confirmation>
    <EditUser EditUserInfo={EditUserInfo} isOpen={isOpen} setIsOpen={setIsOpen} title="Edit user" desc="Updated necessary information of Users from here"/>
    </>
    
  )
}

export default UsersTableComp