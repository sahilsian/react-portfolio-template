import React from 'react'
import styled from 'styled-components'
import config from '../../../config.json'
import useWindowDimensions from '../../../hooks/useWIndowDimensions';
import TextLabel from '../text-label';

const Card = styled.div`
    width: 100%;
    flex: 1;
    flex-basis: 40%;
    background: #FFF;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    backdrop-filter: blur(6px);
    border-radius: 17px;
    transition: 0.3s all ease;
    box-sizing: border-box;
    min-width: 300px;
    
`;

const ProfileImage = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 100px;
    border: 3px solid white;
    margin-left: 20px;
    margin-top: -80px;
`;

const IconContainer = styled.div`
    display: flex;
    gap: 10px;
    box-sizing: border-box;
`;

const Banner = styled.img`
    width: 100%;
    height: 100px;
    border-radius: 17px 17px 0px 0px;
    display: block;
    object-fit: cover;
    object-position: center;
`;

const TextContainer = styled.div`
    padding: 0px 20px;
    padding-bottom: 30px;
    box-sizing: border-box;
`;



const PillCard = ({name, description, img, onClick, children, banner, altImage, altBanner}) => {
    const {width, height} = useWindowDimensions()
    return (
        <Card>
            <Banner alt={altBanner} src={banner}>

            </Banner>
            <ProfileImage alt={altImage} src={img}>
            </ProfileImage>
            <TextContainer>
            <TextLabel
            text={name}
            color={config.navigation.colors.text}
            labelsize={width < 980 ? "22px" : "28px"}
            padding={"0px"}
            >
            </TextLabel>
            <TextLabel
            text={description}
            weight={"300"}
            padding={"10px"}
            color={config.navigation.colors.text}
            labelsize={width < 980 ? "16px" : "18px"}
            >
            </TextLabel>

            <IconContainer>
                {children}
            </IconContainer>
            </TextContainer>

        </Card>
    )
}

export default PillCard