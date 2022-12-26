import Hero from '../components/page-components/hero'
import styled from 'styled-components'
import Header from '../components/individual-components/header';
import Rental from '../components/page-components/rental';

const Container = styled.div`
    width: 100%;
    height: 200vh;
`;

function HomePage() {
    return(
      <Container>
        <Header></Header>
        <Hero></Hero>
        <Rental></Rental>
      </Container>
    ) 
  }
  
export default HomePage
  