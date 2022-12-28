import React from 'react'
import styled from 'styled-components'
import config from '../../../config.json'
import Banner from '../../individual-components/banner'

const Container = styled.div`
    width: 100%;
    padding: 50px 0px;
`;

const BannerApp = () => {
    return (
        <Container>
            <Banner
                title={config.banner_app.text.title}
                description={config.banner_app.text.description}
            >
            </Banner>
        </Container>
        
    )
}

export default BannerApp