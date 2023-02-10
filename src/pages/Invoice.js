import React from 'react'
import styled from 'styled-components'
import {mobile} from '../Responsive'

const Container = styled.div`
  background-color: #F4F5F7;
  height: 100vh;   
  display: flex;
  justify-content: center;
    
`
const Wrapper = styled.div`
  width: 1200px;  
  max-width: 90%;
  height: max-content;

  
`
const Title = styled.h2`

`
const InvoiceContainer = styled.div`
  border-radius: 1vmax; 
  background-color: #fff;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
`

const First = styled.div`
  display: flex;
  justify-content: space-between;

  >h1 {
    font-size: 1.1rem;

    >p {
      margin: 0
    }
  }

  >div{
    text-align: end;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    >p {
      margin: 0
    }
  }

  ${mobile({
    flexDirection: "column",
  })}
`

const SecondoryTitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
`
const Second = styled.div`
  display: flex;
  justify-content: space-between;
`
const ItemContainer = styled.div`
  text-align: ${p => p.right ? "right" : "left"};
`


const Third = styled.div`
    margin-top: 20px;   
    overflow: auto;
    border: 1px solid #d5d6d7;
    border-radius: 1vmin;
`
const Table = styled.table`
    width: 100%; 
    min-width: 500px;   
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
    color: ${p => p.price && "red"};
    font-weight: ${p => p.price && 600};

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
const Fourth = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #F4F5F7;
  border-radius: 1vmax;
`

const FourthChild = styled.div`
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  >span {
    font-weight: 600;
  }
`


function Invoice() {
  return (
    <Container>
      <Wrapper>
        <Title>Invoice</Title>
        <InvoiceContainer>
            <First>
              <h1>
              INVOICE
              <p>STATUS: Pending</p>
              </h1>
              <div>
                image
                <p>Cecilia Chapman, 561-4535 Nulla LA, <bt/> india</p>
              </div></First>
            <Second>
              <ItemContainer>
                <SecondoryTitle>DATE</SecondoryTitle>
                February 8, 2023
              </ItemContainer>
              <ItemContainer>
                <SecondoryTitle>INVOICE NO</SecondoryTitle>
                #353454
              </ItemContainer>
              <ItemContainer right={true}>
                <SecondoryTitle>INVOICE TO.</SecondoryTitle>
                xxx xxx<br/>
                123<br/>
                Thailand, Thailand, 34000
              </ItemContainer>
            </Second>
            <Third>
              <Table>
                <Thead>
                  <tr>
                    <Td>SR.</Td>
                    <Td>PRODUCT NAME</Td>
                    <Td>QUANTITY</Td>
                    <Td>ITEM PRICE</Td>
                    <Td>TOTEL</Td>
                  </tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>1</Td>
                    <Td>Blueberry</Td>
                    <Td>200</Td>
                    <Td>2</Td>
                    <Td price={true}>400</Td>
                  </Tr>
                  <Tr>
                    <Td>1</Td>
                    <Td>Tshirt</Td>
                    <Td>600</Td>
                    <Td>3</Td>
                    <Td  price={true}>1800</Td>
                  </Tr>
                </Tbody>
              </Table>
            </Third>
            <Fourth>
              <FourthChild>
                <SecondoryTitle>PAYMENT METHOD</SecondoryTitle>
                <span>Online</span>
              </FourthChild>
              <FourthChild>
                <SecondoryTitle>SHIPPING COST</SecondoryTitle>
                <span>80</span>
              </FourthChild>
              <FourthChild>
                <SecondoryTitle>DISCOUNT</SecondoryTitle>
                <span>0</span>
              </FourthChild>
              <FourthChild>
                <SecondoryTitle>TOTAL AMOUNT</SecondoryTitle>
                <span>2200</span>
              </FourthChild>
            </Fourth>
        </InvoiceContainer>
      </Wrapper>
    </Container>
  )
}

export default Invoice