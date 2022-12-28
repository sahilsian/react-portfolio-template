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
    font-weight: ${props=>props.weight ? props.weight : "500"};
    padding-bottom: ${props=>props.padding ? props.padding : "7px"};
    text-align: ${props=>props.center ? "center" : "left"};
    transition: 0.2s all ease;

    &:hover {
        color: ${props=>props.hover ? props.hover : props.color};
        transition: 0.2s all ease;
    }
`;

const TextLabel = ({text, center, labelsize, color, padding, weight, hover}) => {
    return (
        <Container>
            <Label hover={hover} weight={weight} center={center} color={color} padding={padding} labelsize={labelsize}>{text}</Label>
        </Container>
    )
}

TextLabel.defaultProps = {
    text: "This Input"
}

export default TextLabel