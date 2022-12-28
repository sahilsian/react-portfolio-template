import React from 'react'
import styled from 'styled-components'
import RentalComponent from '../../individual-components/rental-component';
import Search from '../../individual-components/search';

const Container = styled.div`
    width: 100%;
    position: relative;
    padding-bottom: 50px;
    box-sizing: border-box;
`;

const Rental = () => {
    return (
        <Container>
            <RentalComponent></RentalComponent>
            <Search></Search>
        </Container>
    )
}

export default Rental