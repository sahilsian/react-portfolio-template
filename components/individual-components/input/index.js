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

const InputPiece = styled.input`
    width: 100%;
    border-radius: 10px;
    border: none;
    color: ${config.navigation.colors.text};
    box-sizing: border-box;
    font-size: ${props=>props.size ? "16px" : "18px"};
    background-color: transparent;
    outline: none;  
    
`;

const Input = ({placeholder, value, onChange, size}) => {
    const {width, height} = useWindowDimensions()
    const [focus, setFocus] = useState(false)
    return (
        <Container>
            <IconContainer>
                <Search
                    style={{
                        marginTop: "7px"
                    }}
                    width={"20px"}
                    color={"#00000050"}
                >
                </Search>
            </IconContainer>
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

Input.defaultProps = {
    placeholder: "Type here..."
}

export default Input