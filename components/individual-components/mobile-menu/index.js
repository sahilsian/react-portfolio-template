import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    z-index: 999;
    transition: 0.2s all ease;
    display: ${props=>props.display ? "block" : "none"};
    position: absolute;
    padding: 20px;
    box-sizing: border-box;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: ${props=>props.bgcolor ? "rgba(255, 255, 255, 0.75)" : "rgba(17, 25, 40, 0.75)"};
`;

const MobileMenu = ({children, bgcolor, display}) => {
    return (
        <Container display={display} bgcolor={bgcolor}>
            {children}
        </Container>
    )
}

export default MobileMenu