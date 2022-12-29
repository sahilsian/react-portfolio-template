import React, { useEffect } from 'react'
import styled from 'styled-components'
import Lottie from "lottie-react";
import Animation from '../../../public/loading.json'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #202732;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Loading = () => {
    
    return (
        <Container>
            <Lottie
            style={{width: 400}}
             animationData={Animation} 
             loop={true} />
        </Container>
    )
}   

export default Loading