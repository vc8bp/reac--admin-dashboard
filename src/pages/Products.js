import React from 'react'
import styled from 'styled-components'
import ProductsComp from '../components/ProductsComp'


const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F4F5F7;
    box-sizing: border-box;
`
const Wrapper = styled.div`
    width: 1200px;
    max-width: 90%;
`
const Title = styled.h1`
    font-size: 1.25rem;
`
const FilterSection = styled.div`
    width: 100%;
    display: flex;
    padding: 1.5rem 1rem;
    background-color: white;
    box-sizing: border-box;
    gap: 0.5rem;
    border-radius: 1vmin;

    > * {
        background-color: #F4F5F7;
        border: #F4F5F7 1px solid;
        border-radius: 1vmin;
        padding: 1rem 0.8rem; 
    }

    > *:focus {
        background-color: white;
    }
`
const SearchProduct = styled.input`
    padding: 0.7rem 0.5rem;
    outline: none;
    flex: 2;   
`
const Sections = styled.select`
    flex: 1;
`
const Options = styled.option`

`
const AddProduct = styled.button`
    flex: 1;
    background-color: teal;
    color: white;
    font-weight: 600;
`

function Products() {
  return (
    <Container>
        <Wrapper>
            <Title>Products</Title>
            <FilterSection>
                <SearchProduct placeholder='Search by product name'></SearchProduct>
                <Sections>
                    <Options>jewelery</Options>
                    <Options>clotiong</Options>
                    <Options>bottom</Options>
                </Sections>
                <Sections>
                    <Options>Low to high</Options>
                    <Options>High to low</Options>
                </Sections>
                <AddProduct>Add Product</AddProduct>
            </FilterSection>
            <ProductsComp/>
        </Wrapper>

    </Container>
  )
}

export default Products