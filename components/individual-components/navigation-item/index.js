import Link from 'next/link';
import React from 'react'
import styled from 'styled-components'
import config from '../../../config.json'

const HeadingLink = styled.p`
    font-size: 16px;
    margin: 0;
    padding: 0;
    color: ${props=>props.color ? config.navigation.colors.primary : config.navigation.colors.secondary};
    padding-right: 8px;
    min-width: 300px;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
    text-decoration: none;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 14px 0px;
    transition: 0.2s all ease;
    padding: 20px;
    cursor: pointer;
    &:hover {
        background-color: ${props=>props.hover ? config.navigation.colors.primary + "30" : config.navigation.colors.text + "30"} ;
        transition: 0.2s all ease;
    }
    border-radius: 10px;
`;
const HeadingSubText = styled.p`
    font-size: 14px;
    margin: 0;
    padding: 0;
    color: ${props=>props.color ? config.navigation.colors.subtext : config.navigation.colors.secondary + "80"};
    padding-right: 8px;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
    text-decoration: none;
`;


const NavigationItem = ({onClick, tabName, description, hover, color, href}) => {
    return (
        <Link style={{textDecoration: 'none'}} href={href}>
            <Container hover={hover} onClick={onClick}>
                <HeadingLink color={color}>{tabName}</HeadingLink>
                <HeadingSubText color={color}>{description}</HeadingSubText>
            </Container>
        </Link>
    )
}

NavigationItem.defaultProps = {
    tabName: 'Generic Item',
    description: 'This is a generic link used for generic navigation'
}

export default NavigationItem