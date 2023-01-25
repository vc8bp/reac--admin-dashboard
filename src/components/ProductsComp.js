import React from 'react'
import styled from 'styled-components'

const Table = styled.table`
    margin-top: 20px;
    width: 1200px;
    border-radius: 1vmin;
    border: 1px solid #d5d6d7;
    border-collapse: collapse;
    overflow-x: auto;
`
const Thead = styled.thead`
    background-color: #F4F5F7;
`
const Tbody = styled.tbody`
    background-color: white;
    
`
const Td = styled.td`
    padding: 0.75rem 1rem;
`
const Tr = styled.tr`
    border-bottom: 1px solid #d5d6d7;
`

function ProductsComp() {
  return (
        <Table>
            <Thead>
                <Td>ID</Td>
                <Td>PRODUCT NAME</Td>
                <Td>CATEGORY</Td>
                <Td>PRICE</Td>
                <Td>STOCK</Td>
                <Td>DETAILS</Td>
                <Td>ACTIONS</Td>
            </Thead>
            <Tbody>
                <Tr>
                    <Td>E88F29</Td>
                    <Td>Heinz Apple Cider Vinegar</Td>
                    <Td>Sauces & Pickles</Td>
                    <Td>200</Td>
                    <Td>45</Td>
                    <Td>DETAILS</Td>
                    <Td>ACTIONS</Td>
                </Tr>
                <Tr>
                    <Td>E88F29</Td>
                    <Td>Heinz Apple Cider Vinegar</Td>
                    <Td>Sauces & Pickles</Td>
                    <Td>200</Td>
                    <Td>45</Td>
                    <Td>DETAILS</Td>
                    <Td>ACTIONS</Td>
                </Tr>
                <Tr>
                    <Td>E88F29</Td>
                    <Td>Heinz Apple Cider Vinegar</Td>
                    <Td>Sauces & Pickles</Td>
                    <Td>200</Td>
                    <Td>45</Td>
                    <Td>DETAILS</Td>
                    <Td>ACTIONS</Td>
                </Tr>
                <Tr>
                    <Td>E88F29</Td>
                    <Td>Heinz Apple Cider Vinegar</Td>
                    <Td>Sauces & Pickles</Td>
                    <Td>200</Td>
                    <Td>45</Td>
                    <Td>DETAILS</Td>
                    <Td>ACTIONS</Td>
                </Tr>
            </Tbody>
        </Table>
  )
}

export default ProductsComp