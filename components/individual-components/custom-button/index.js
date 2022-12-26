import { width } from '@mui/system';
import React from 'react';
import styled from 'styled-components'
import config from '../../../config.json'

const ButtonContainer = styled.div`
    padding: 15px 40px;
    width: ${props=>props.width ? props.width : "100px"};
    background-color: ${props=>props.outlined ? "none" : config.navigation.colors.accent};
    border: ${props=>props.border ? "3px solid " + config.navigation.colors.accent : "none"};
    display: inline-flex;
    height ${props=>props.height ? props.height : "auto"};
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.2s all ease;
    ${ props => props.hover ? `
        &:hover {
            transition: 0.2s all ease;
            border-color: ${config.navigation.colors.accent}80;
        }
    `
    :
    `
        &:hover {
            transition: 0.2s all ease;
            background-color: ${config.navigation.colors.accent}80;
        }
    `
        
    }
    
`;

const Text = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: ${props=>props.color ? config.navigation.colors.accent : "#fff"};
    margin: 0;
    padding: 0;
`;

const CustomButton = ({text, outlined, width, height}) => {
    return (
        <ButtonContainer height={height} width={width} border={outlined} hover={outlined} outlined={outlined}>
            <Text color={outlined}>
                {text}
            </Text>
        </ButtonContainer>
    )
}

CustomButton.defaultProps = {
    text: "Button",
    width: "50px"
}

export default CustomButton