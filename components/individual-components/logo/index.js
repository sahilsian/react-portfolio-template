import react from 'react';
import styled from 'styled-components';

//default at 250px
const LogoContainer = styled.div`
    width: 100%;
    max-width: ${props=>props.width ? width : '200px'};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LogoImage = styled.img`
    width: 100%;
    height: auto;
    resize-mode: contain;
`;

const Logo = ({image}) => {
    return (
        <LogoContainer>
            <LogoImage src={image}></LogoImage>
        </LogoContainer>
    )
}

Logo.defaultProps = {
    image: '/greenclick-long.svg'
}

export default Logo