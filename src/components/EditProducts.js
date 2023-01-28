import React from 'react'
import EditModal from './EditModal'
import styled from 'styled-components'

const Container = styled.div`
    

    >h1 {
        margin: 100px 0;
    }
`

function EditProducts({isOpen, setIsOpen}) {
  return (
    <EditModal isOpen={isOpen} setIsOpen={setIsOpen} title="Update Product" desc="Updated your product and necessary information from here">
        <Container>
            <h1>h1llo 1</h1>
            <h1>h1llo 2</h1>
            <h1>h1llo 3</h1>
            <h1>h1llo 5</h1>
            <h1>h1llo 6</h1>
            <h1>h1llo 8</h1>
            <h1>h1llo 8</h1>
            <h1>h1llo 9</h1>
            <h1>h1llo 10</h1>
     
        </Container>
    </EditModal>
  )
}

export default EditProducts