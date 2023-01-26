import React, { useEffect, useState } from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import styled from 'styled-components'
import { req } from '../axiosReqMethods'

const Table = styled.table`
    margin-top: 20px;
    width: 1200px;
    border: 1px solid #d5d6d7;
    border-collapse: collapse;
    overflow: hidden;
    border-radius: 1vmin;
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

function ProductsComp(props) {
    const [products, setProducts] = useState([])
    console.log(props)
    useEffect(() => {
        ( async() => {const { data } = await req.get("/api/products/allinfo?limit=100")
        setProducts(data)})()
    },[])

  return (
        <Table>
            <Thead>
                <tr> 
                    <Td>PRO NO.</Td>
                    <Td>PRODUCT NAME</Td>
                    <Td>CATEGORY</Td>
                    <Td>PRICE</Td>
                    <Td>STOCK</Td>
                    <Td>DETAILS</Td>
                    <Td>ACTIONS</Td>
                </tr>
            </Thead>
            <Tbody>
                {(props?.products?.length ? props?.products : products)?.map((p) => {
                    return <Tr key={p._id}>
                        <Td>
                            <div>
                            <ContentCopyIcon onClick={() => navigator.clipboard.writeText(p._id)}/>
                            {p.productno}                          
                            </div>
                        </Td>
                        <Td>
                            <div>
                                <Image src={p.img} />
                                {p.title.length > 50 ? `${p.title.slice(0, 50)}...` : p.title}
                            </div>
                        </Td>
                        <Td>{p.categories[0]}</Td>
                        <Td>{p.price}</Td>
                        <Td>{JSON.stringify(p.inStock)}</Td>
                        <Td>DETAILS</Td>
                        <Td><EditIcon/><DeleteIcon/></Td>
                    </Tr>
                })}
            </Tbody>
        </Table>
  )
}

export default ProductsComp