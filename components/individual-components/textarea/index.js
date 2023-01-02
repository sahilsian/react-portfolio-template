import React, { useState } from 'react'
import styled from 'styled-components'
import config from '../../../config.json'
import { Search } from 'react-ionicons'
import useWindowDimensions from '../../../hooks/useWIndowDimensions'

const Container = styled.div`
    width: 100%;
    border: 1px solid #00000015;
    display: flex;
    padding: 12px 10px;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: #ffffffCC;
`;

const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 5px;
`;

const InputPiece = styled.textarea`
    width: 100%;
    border-radius: 10px;
    border: none;
    color: ${config.navigation.colors.text};
    box-sizing: border-box;
    font-size: ${props=>props.size ? "16px" : "18px"};
    background-color: transparent;
    outline: none;
    min-height: 200px;  
    
`;

const TextArea = ({placeholder, value, onChange, size, noIcon}) => {
    const {width, height} = useWindowDimensions()
    const [focus, setFocus] = useState(false)
    return (
        <Container>
            <IconContainer></IconContainer>
            <InputPiece 
            onFocus={()=>{setFocus(true)}}
            onBlur={()=>{setFocus(false)}}
            size={size}
            onChange={onChange} 
            value={value} 
            placeholder={placeholder}
            type={"text"}
            ></InputPiece>
        </Container>
    )
}

TextArea.defaultProps = {
    placeholder: "Type here..."
}

export default TextArea