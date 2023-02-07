import React, { useEffect } from 'react'
import OrdersTabel from '../components/OrdersTabel.js'
import styled from 'styled-components'
import { useState } from 'react'
import { req } from '../axiosReqMethods.js'
import { setError } from '../redux/MessageRedux.js'
import { useDispatch } from 'react-redux'

const Container = styled.div`
    width: 100%;
    height: 100vh;
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


function Orders() {
    const dispatch = useDispatch()
    const [orders, setOrders] = useState()
    useEffect(() => {
        (async () => {
            try {
                const {data} = await req.get('/api/orders')
                setOrders(data)
            } catch (error) {
                dispatch(setError("failed to fetch orders"))
            }
        })()
    },[])

  return (
    <Container>
        <Wrapper>
            <h2>Orders</h2>
            <OrdersTabel orders={orders} setOrders={setOrders}/>
        </Wrapper>

    </Container>
  )
}

export default Orders