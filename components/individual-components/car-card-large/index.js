import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import config from '../../../config.json'
import useWindowDimensions from '../../../hooks/useWIndowDimensions';

const Wrapper = styled.div`
    width: 360px;
    height: ${props=>props.height ? props.height : "auto"};
    box-shadow:
    rgba(0, 0, 0, 0.24) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0.5) 0px 1px 0px 0px,
    rgba(0, 0, 0, 0.3) 0px 0px 8px 0px,
    rgba(0, 0, 0, 0.5) 0px 20px 30px 0px;
    transition: transform 1s ease 0s;
    border-radius: 16px;
    transform:
    perspective(800px)
    rotateY(-8deg);

    &:hover {
        transform: perspective(800px) rotateY(-4deg);
      }

    display: ${props=>props.display ? "none": "block"};

`;

const Container = styled.div`
    padding: 20px;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(17, 25, 40, 0.75);
    border-radius: 0px 0px 16px 16px;
`;

const Title = styled.p`
    color: #fff;
    font-size: 20px;
    margin: 0;
    padding: 0;
    padding-bottom: 15px;
    font-weight: 500;
    border-bottom: 1px solid hsla(0,0%,100%,.1);
`;

const CarImage = styled.img`
    width: 100%;
    max-width: 200px;
    display: block;
    margin: 0px auto;
`;

const ContainerNested = styled.div`
    border-bottom: 1px solid hsla(0,0%,100%,.1);
`;

const CTA = styled.div`
    width: 100%;
    padding: 20px 0px;
    padding-bottom: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    
`;

const CTALink = styled.a`
    text-align: center;
    font-size: 18px;
    color: ${config.navigation.colors.accent};
    cursor: pointer;
    transition: 0.2s all ease;
    &:hover {
        transition: 0.2s all ease;
        color: #fff;
        cursor: pointer;
    }
`;

const DotContainer = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    padding-bottom: 20px;
`;

const Dot = styled.div`
    cursor: pointer;
    width: 10px; 
    height: 10px;
    border-radius: 30px;
    background-color: ${props=>props.act ? config.navigation.colors.accent : "#fff"}; 
`

const Image = styled.img`
    width: ${props=> props.width < 1650 ? "360px" : "530px"};
    display: block;
`;

const images = [
    {
        name: '2022 Hyundai Kona',
        img: "/hyundai-kona.png"
    },
    {
        name: '2022 Veemo E-Bike',
        img: "/hundai-kona.png"
    },
    {
        name: '2022 Toyota Prius',
        img: "/hundai-kona.png"
    }
]

const CarCardLarge = () => {
    const [selectedCar, setSelectedCar] = useState(0)
    const { width, height } = useWindowDimensions();

    return (
        <Wrapper display={width < 1100} height={width < 1100 ? "300px" : false}>
        <Image width={width} src={width < 1650 ? '/map-no-banner.png' : '/map.png'}></Image>
        <Container>
            <Title>{config.hero.cars[selectedCar].name}</Title>
            <ContainerNested>
                <CarImage src={`${config.hero.cars[selectedCar].img}`}></CarImage>
                <DotContainer>
                    {config.hero.cars.map((e)=> {
                        return (
                            <Dot onClick={()=> {
                                setSelectedCar(config.hero.cars.indexOf(e))
                            }} 
                            act={e == config.hero.cars[selectedCar]}
                            />
                        )
                    })}
                    
                </DotContainer>
            </ContainerNested>
            <CTA>
                <CTALink>Start Renting</CTALink>
            </CTA>
        </Container>
        </Wrapper>

    )
}

export default CarCardLarge 