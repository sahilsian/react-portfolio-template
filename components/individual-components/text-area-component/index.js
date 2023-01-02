import React from 'react'
import styled from 'styled-components'
import config from '../../../config.json'
import Input from '../input';
import TextLabel from '../text-label';
import TextArea from '../textarea';

const Container = styled.div`
    width: 100%;
    padding-bottom: ${props=>props.padding};
`;

const TextAreaComponent = ({placeholder, onChange,text,labelsize,color,size, noIcon, padding}) => {
    return (
        <Container
            padding={padding} 
        >
            <TextLabel 
            text={text}
            labelsize={labelsize}
            color={color}
            >
            </TextLabel>
            <TextArea 
            noIcon={noIcon}
            placeholder={placeholder}
            onChange={onChange}
            size={size}
            ></TextArea>
        </Container>
    )
}

TextAreaComponent.defaultProps = {
    padding: "20px"
}

export default TextAreaComponent