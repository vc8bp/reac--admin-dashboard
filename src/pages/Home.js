import React from 'react'
import styled from 'styled-components'



const HomeComponent = styled.div`
  flex: 5;
  width: 100%;
  display: flex;
  padding: 20px;
`



function Home() {
  return (
    <> 
        <HomeComponent>
            <h1>hemloo</h1>
        </HomeComponent>
 
    </>
  )
}

export default Home

