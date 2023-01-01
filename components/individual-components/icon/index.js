import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: auto;
    height: 100%;
    cursor: pointer;
    display: ${props=>props.display ? "none" : "flex"};
    justify-content: center;
    align-items: center;
`;

const IconRaw = styled.img`
    width: ${props=>props.size || "20px"};
    max-height: ${props=>props.size || "20px"}; 
`;

const Icon = ({src, size, onClick, display, alt}) => {
    return (
        <Container display={display} onClick={onClick}>
            <IconRaw alt={alt} src={src} size={size}></IconRaw>
        </Container>
    )
}

Icon.defaultProps = {
    size: "20px"
}

export default Icon