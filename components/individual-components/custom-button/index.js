import { width } from '@mui/system';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components'
import config from '../../../config.json'

const ButtonContainer = styled.div`
    padding: 20px 20px;
    width: ${props=>props.width ? props.width : "100px"};
    background-color: ${props=>props.outlined ? "none" : config.navigation.colors.accent};
    border: ${props=>props.border ? "3px solid " + config.navigation.colors.accent : "none"};
    display: ${props=>props.hide ? "none" : "inline-flex"};
    height ${props=>props.height ? props.height : "100%"};
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.2s all ease;
    margin-top: ${props=>props.marginTop ? "10px" : "0px"};
    ${ props => props.hover ? `
        &:hover {
            transition: 0.2s all ease;
            border-color: ${config.navigation.colors.accent}80;
            cursor: pointer;
        }
    `
    :
    `
        &:hover {
            transition: 0.2s all ease;
            background-color: ${config.navigation.colors.accent}80;
            cursor: pointer;
        }
    `
        
    }
    box-sizing: border-box;
    
`;

const Text = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: ${props=>props.color ? config.navigation.colors.accent : "#fff"};
    margin: 0;
    padding: 0;
    text-decoration: none;
`;

const CustomButton = ({text, outlined, width, height, marginTop, hide, href}) => {
    return (
        <Link style={{textDecoration: 'none'}} href={href}>
            <ButtonContainer hide={hide} marginTop={marginTop} height={height} width={width} border={outlined} hover={outlined} outlined={outlined}>
                <Text color={outlined}>
                    {text}
                </Text>
            </ButtonContainer>
        </Link>

    )
}

CustomButton.defaultProps = {
    text: "Button",
    width: "50px",
    href: "/"
}

export default CustomButton