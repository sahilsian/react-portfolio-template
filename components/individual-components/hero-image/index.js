import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Image = styled.img`
    width: auto;
`;

const HeroImage = ({src}) => {
    return (
        <Container>
            <Image src={src}>
            </Image>
        </Container>
    )
}

HeroImage.defaultProps = {
    src: '/defaults/hero_default.png'
}

export default HeroImage