import react from 'react'
import styled from 'styled-components'
import NavigationItem from '../navigation-item';

const TabContainer = styled.div`
    width: 100%;
    height: auto;
    display: ${props=>props.display ? "flex" : "none"};
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: ${props=>props.bgcolor ? "rgba(255, 255, 255, 0.75)" : "rgba(17, 25, 40, 0.75)"};
    background-color: ${props=>props.bgcolorDisplay} !important;
    box-sizing: border-box;
    box-shadow: 0px 8px 15px -7px rgba(0,0,0,0.1);
    align-items: center;
    justify-content: center;
    transition: 0.2s all ease;
`;

const TabBody = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1280px;
    margin: 0px auto;
`;

const NavigationMenu = ({display, children, bgcolor, ref, bgcolorDisplay}) => {
    return (
        <TabContainer ref={ref} bgcolor={bgcolor} display={display} bgcolorDisplay={bgcolorDisplay}>
            <TabBody>
                {children}
            </TabBody>
        </TabContainer>
    )
}

export default NavigationMenu