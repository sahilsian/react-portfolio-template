import React from 'react'
import styled from 'styled-components'
import config from '../../../config.json'

const Container = styled.div`
    width: 100%;
`; 

const Label = styled.p`
    margin: 0;
    color: ${props=>props.color ? props.color : "#ffffff" };
    font-size: ${props=>props.labelsize ? props.labelsize : "16px"};
    font-weight: 500;
    padding-bottom: ${props=>props.padding ? props.padding : "7px"};
    text-align: ${props=>props.center ? "center" : "left"};
`;

const TextLabel = ({text, center, labelsize, color, padding}) => {
    return (
        <Container>
            <Label center={center} color={color} padding={padding} labelsize={labelsize}>{text}</Label>
        </Container>
    )
}

TextLabel.defaultProps = {
    text: "This Input"
}

export default TextLabel