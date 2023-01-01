import Link from 'next/link';
import react from 'react';
import styled from 'styled-components';

//default at 250px
const LogoContainer = styled.div`
    width: 100%;
    max-width: ${props=>props.width ? width : '200px'};
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: ${props=>props.paddingbottom};
`;

const LogoImage = styled.img`
    width: 100%;
    height: auto;
    resize-mode: contain;
`;

const Logo = ({image, paddingbottom}) => {
    return (
        <LogoContainer paddingbottom={paddingbottom}>
            <Link style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}} href={'/'}>
                <LogoImage src={image}></LogoImage>
            </Link>
        </LogoContainer>
    )
}

Logo.defaultProps = {
    image: '/greenclick-long.svg'
}

export default Logo