import React from 'react'
import styled from 'styled-components'
import SideSide from '../../individual-components/side-side'
import config from '../../../config.json'

const Container = styled.div`
    width: 100%;
    padding: 50px 0px;
`;
const Info = ({title, description, src, maindirection, reverse}) => {
    return (
        <Container>
        <SideSide
            maindirection={maindirection}
            title={title}
            description={description}
            src={src}
            reverse={reverse}
        ></SideSide>
        </Container>
    )
}
export default Info