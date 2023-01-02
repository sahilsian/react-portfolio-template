import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    position: absolute;
    z-index: 3;
    width: 100%;
    height: 100%;
     height: 100vh;
     background: rgb(8,46,83);
     background: linear-gradient(347deg, rgba(8,46,83,1) 0%, rgba(31,44,65,1) 100%); 
`;


const StaticHero = () => {
    return (
        <Container>
        </Container>
    )
    
}

export default StaticHero