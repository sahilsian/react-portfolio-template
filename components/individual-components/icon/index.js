import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: ${props=>props.size};
    height: ${props=>props.size};   
    cursor: pointer;
`;

const IconRaw = styled.img`
    width: auto;
    
`;

const Icon = ({src, size, onClick}) => {
    return (
        <Container onClick={onClick}>
            <IconRaw src={src} size={size}></IconRaw>
        </Container>
    )
}

Icon.defaultProps = {
    size: "20px"
}

export default Icon