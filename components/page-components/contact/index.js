import React from 'react'
import styled from 'styled-components'
import ContactComponent from '../../individual-components/contact-component';

const Container = styled.div`
    padding: 50px 20px;
    box-sizing: border-box;
    width: 100%;
`;

const Contact = () => {
    return (
        <Container>
            <ContactComponent></ContactComponent>
        </Container>
    )
}

export default Contact