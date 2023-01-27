import React, { useEffect, useState } from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import styled from 'styled-components'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Confirmation from './Confirmation';
import ProductNotFound from './ProductNotFound';

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

//cornfirmation style


function ProductsComp(props) {

    const [isOpen, setIsOpen] = useState(false)
    const [DeleteProduct, setDeleteProduct] = useState("")

    const HandleDelete = (product) => {
        setDeleteProduct(product)
        setIsOpen(true)
    }
    const DeleProduct = async () => {
        console.log("yes delete it")
    }

  return (
    <>
        {props.products.length ? <Table>
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
                {props.products.map((p) => {
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
                        <Td>
                            <div>
                                <RemoveRedEyeOutlinedIcon/><EditIcon/><DeleteIcon onClick={() => HandleDelete(p)} />
                            </div>
                        </Td>
                    </Tr>
                })}
            </Tbody>
        </Table> : <ProductNotFound/>}

        <Confirmation isOpen={isOpen} setIsOpen={setIsOpen} action={DeleProduct} >
            <div style={{display: "flex", flexDirection:"column", textAlign: "center", gap: "0.5rem"}} >
                <b>Are You Sure! Want to Delete <span style={{color: "red"}}>{DeleteProduct.title}</span> Record?</b>
                <span>Do you really want to delete these records? You can't view this in your list anymore if you delete!</span>
            </div>
        </Confirmation>
    </>
  )
}

export default ProductsComp