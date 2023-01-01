import React from 'react'
import styled from 'styled-components'
import CustomButton from '../custom-button';
import InputComponent from '../Input-Component';
import config from '../../../config.json'
import useWindowDimensions from '../../../hooks/useWIndowDimensions';

const Container = styled.div`
    width: 100%;
    position: ${props=>props.mobile ? "static" : "absolute"};
    z-index: 12;
    top: ${props=>props.mobile ? "0" : "-130px"};
    display: ${props=>props.hide ? "none" : "block"};
    padding: ${props=>props.mobile ? "0px" : "0px 20px"} ;
    box-sizing: border-box;
`;

const Comp = styled.div`
    width: 100%;
    max-width: 1280px;
    padding: 30px;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: ${props=>props.mobile ? "rgba(17, 25, 40, 1)" : "rgba(17, 25, 40, 0.75)"};
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    margin: auto;
    min-height: 100px;
    border-radius: ${props=>props.mobile ? "0px" : "20px"};
    display: ${props=>props.display ? "block" : "flex"};
    align-items: flex-end;
    gap: 20px;
    box-sizing: border-box;
`;



const RentalComponent = ({}) => {
    const {width, height} = useWindowDimensions()
    return (
        <Container hide={config.rental.disable} mobile={width < 1100}>
            <Comp mobile={width < 1100} display={width < 675}>
                <InputComponent 
                text={config.rental.text.location_search}
                labelsize={width < 675 ? "18px" : "20px"}
                placeholder={config.rental.text.input_placeholder}
                size={width < 675}
                >
                </InputComponent>
                <CustomButton
                    marginTop={width < 675}
                    text={config.rental.text.button_search}
                    width={width < 675 ? "100%" : "240px"}
                ></CustomButton>
            </Comp>
        </Container>
    )
}

export default RentalComponent