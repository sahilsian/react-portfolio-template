import React from 'react'
import styled from 'styled-components'
import config from '../../../config.json'
import useWindowDimensions from '../../../hooks/useWIndowDimensions';
import CustomButton from '../custom-button';
import CustomButtonWhite from '../custom-button-white';
import InputComponent from '../Input-Component';
import TextAreaComponent from '../text-area-component';
import TextLabel from '../text-label';

const Container = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: auto;
    min-height: 200px;
    background-color: ${config.navigation.colors.accent};
    border-radius: 20px;
    padding: 30px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;

const ContactComponent = () => {
    const {width, height} = useWindowDimensions()
    return (
        <Container>
            <TextLabel padding={"0px"} weight={"700"} labelsize={width < 1100 ? "38px" : "54px"} text={config.contact.text.title}></TextLabel>
            <TextLabel padding={"20px"} weight={"300"} labelsize={width < 1100 ? "18px" : "22px"} text={config.contact.text.description}></TextLabel>

            <InputComponent labelsize={"18px"} placeholder={"Email Address"} noIcon text={"Your Email Address"}></InputComponent>
            <InputComponent labelsize={"18px"} placeholder={"Hi, I'm interested in..."} noIcon text={"Subject"}></InputComponent>
            <TextAreaComponent labelsize={"18px"} text={"Body"} placeholder={"Type Here"}></TextAreaComponent>
            <CustomButtonWhite text={"Send us a Message"} width={"auto"}></CustomButtonWhite>
        </Container>
    )
}

export default ContactComponent;