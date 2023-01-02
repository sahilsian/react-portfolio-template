import react, { useEffect, useState } from "react";
import styled from "styled-components";
import { ChevronDown } from 'react-ionicons'
import config from '../../../config.json'

const TabText = styled.p`
    font-size: 16px;
    margin: 0;
    padding: 0;
    color: ${props=>props.color ? config.navigation.colors.primary : config.navigation.colors.secondary};
    color: ${props=>props.colorImportant};
    padding-right: 8px;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
    text-decoration: none;
`;

const Container = styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;
    position: relative;
    padding: 10px;
    border-radius: 10px;
    transition: 0.2s all ease;
    
    &:hover {
        background-color: ${props=>props.hover ? config.navigation.colors.primary + "30" : config.navigation.colors.text + "30"};
        transition: 0.2s all ease;
    }
`;


const NavigationTab = ({tabName, onClick, color, colorImportant}) => {
    const [hover, setHover] = useState(false)

    return (
        <Container hover={color} id="tab" onClick={onClick}>
            <TabText colorImportant={colorImportant} color={color}>{tabName}</TabText>
            <ChevronDown
            color={color ? config.navigation.colors.primary : config.navigation.colors.secondary} 
            width={'13px'}
            height={'13px'}
            style={{marginTop: 7}}
            />
        </Container>
    );
};

NavigationTab.defaultProps = {
    tabName: 'Generic Link'
}

export default NavigationTab