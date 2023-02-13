import React, { useEffect } from 'react'
import { useState } from 'react';
import { req } from '../axiosReqMethods';
import BarChart from './Charts/BarChart'
import styled from 'styled-components';
import PieChart from './Charts/PieChart';

const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    gap: 1rem;
    margin: 2rem 0;

    @media only screen and (max-width: 800px) {
        flex-direction: column;
    }

`


function ChartsComponent() {
    const [sizeColordataSet, setsizeColordataSet] = useState();
    const [topProducts, setTopProducts] =  useState()
    useEffect(() => {

        (async () => {
            try {            
                const [sizeColot, top] = await Promise.all([
                    await req.get('/api/analytics/popularsizecolor'),
                    await req.get('/api/analytics/topproducts/?for=chart')
                ])
                setsizeColordataSet(sizeColot.data)
                setTopProducts(top.data)
            } catch (error) {
            }
        })();
    },[])

  return (
    <>
        {sizeColordataSet ? (
            <Container>
                <BarChart data={sizeColordataSet[0].sizes} title="Top Size"/>
                <BarChart data={sizeColordataSet[0].colors}  color={true} title="Top Color"/>
            </Container>
            
        ) : null}

        {sizeColordataSet ? (
            <Container>
                <PieChart data={topProducts} title="Top Size"/>
                <PieChart data={topProducts} title="Top Size"/>
            </Container>
            
        ) : null}   
        
    </>
  )
}

export default ChartsComponent