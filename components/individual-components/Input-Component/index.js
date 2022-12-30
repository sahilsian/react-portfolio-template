import React from 'react'
import styled from 'styled-components'
import config from '../../../config.json'
import Input from '../input';
import TextLabel from '../text-label';

const Container = styled.div`
    width: 100%;
`;

const InputComponent = ({placeholder, onChange,text,labelsize,color,size}) => {
    return (
        <Container>
            <TextLabel 
            text={text}
            labelsize={labelsize}
            color={color}
            >
            </TextLabel>
            <Input 
            placeholder={placeholder}
            onChange={onChange}
            size={size}
            ></Input>
        </Container>
    )
}

export default InputComponent