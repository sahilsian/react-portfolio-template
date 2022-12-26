import React from 'react'
import styled from 'styled-components'
import CustomButton from '../custom-button';
import InputComponent from '../Input-Component';
import config from '../../../config.json'

const Container = styled.div`
    width: 100%;
    position: absolute;
    z-index: 4;
    top: -110px;    
`;

const Comp = styled.div`
    width: 100%;
    max-width: 1280px;
    padding: 30px;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: ${props=>props.bgcolor ? "rgba(255, 255, 255, 0.75)" : "rgba(17, 25, 40, 0.75)"};
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    margin: auto;
    min-height: 100px;
    border-radius: 20px;
    display: flex;
    align-items: flex-end;
    gap: 20px;
`;



const RentalComponent = ({bgcolor}) => {
    return (
        <Container>
            <Comp>
                <InputComponent 
                text={config.rental.text.location_search}
                labelsize={"20px"}
                bgcolor={bgcolor}
                placeholder={config.rental.text.input_placeholder}
                >
                </InputComponent>
                <CustomButton 
                    text={config.rental.text.button_search}
                    height={"35px"}
                    width={"160px"}
                ></CustomButton>
            </Comp>
        </Container>
    )
}

export default RentalComponent