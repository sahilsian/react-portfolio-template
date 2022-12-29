import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 24px;
    max-width: ${props=>props.size};
    max-height: ${props=>props.size};   
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