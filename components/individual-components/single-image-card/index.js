import React, {useState} from 'react'
import styled from 'styled-components'
import config from '../../../config.json'
import TextLabel from '../text-label';


const HoverContainer = styled.div`
    width: 100%;
    border-radius: 26px;
    padding: 20px;
    position: absolute;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.75);
    bottom: 0;
    box-sizing: border-box;
    left: 0;
    visibility: hidden;
    transition: all 0.3s;
    opacity: 0;
`;

const Container = styled.div`
    padding: 40px 40px;
    width: 100%;
    max-width: 320px;
    backdrop-filter: blur(7px);
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 26px;
    box-shadow: ${props=>props.reverse ? " -35px 35px 68px 0px #4aaf6e20, inset 8px -8px 16px 0px #4aaf6e50, inset 0px 11px 28px 0px rgb(255, 255, 255)" : " 35px 35px 68px 0px #4aaf6e20, inset -8px -8px 16px 0px #4aaf6e50, inset 0px 11px 28px 0px rgb(255, 255, 255)"};
    transition: all 0.3s;
    border: 1px solid #4aaf6e10;
    cursor: pointer;

    &:hover {
        box-shadow: ${props=>props.reverse ? "-35px 35px 68px 0px #4aaf6e40" : "35px 35px 68px 0px #4aaf6e40"} ;
    }
    position: relative;

    &:hover ${HoverContainer} {
        visibility: visible;
        transition: all 0.3s;
        opacity: 1;
    }

`;

const Title = styled.p`
    color: ${config.navigation.colors.text};
    font-size: 20px;
    margin: 0;
    padding: 0;
    padding-top: 15px;
    font-weight: 500;
    text-align: center;
`;

const Image = styled.img`
    width: 100%;
    max-width: 250px;
    display: block;
    margin: 0px auto;
`;

const ContainerNested = styled.div`
`;



const SingleImageCard = ({title, src,reverse, descriptiontitle, descriptiondescription}) => {
    const [selectedCar, setSelectedCar] = useState(0)
    return (
        <Container reverse={reverse}>
            <ContainerNested>
                <Image src={src}></Image>
            </ContainerNested>
            {/* <Title>{title}</Title> */}
            <HoverContainer>
                <TextLabel text={descriptiontitle} color={config.navigation.colors.text}></TextLabel>
                <TextLabel text={descriptiondescription} color={config.navigation.colors.subtext}></TextLabel>
            </HoverContainer>

        </Container>

    )
}

SingleImageCard.defaultProps = {
    title: "Greenclick Kiosk",
    src: config.side_one.images.image1,
    descriptiontitle: "Greenclick Valet Kiosk",
    descriptiondescription: "The Greenclick Valet Kiosk stores your rental keys and is located inside the hotel lobby. You can access and return keys into the box by using our Greenclick App."
}

export default SingleImageCard