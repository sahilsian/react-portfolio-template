import React from 'react'
import styled from 'styled-components'
import config from '../../../config.json'
import useWindowDimensions from '../../../hooks/useWIndowDimensions';
import TextLabel from '../text-label';

const Card = styled.div`
    width: 300px;
    height: 300px;
    background: #FFF;
    border: 1px solid white;
    box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
    backdrop-filter: blur(6px);
    border-radius: 17px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.3s all ease;
    
    &:hover {
        transform: scale(1.1);
        transition: 0.3s all ease;
    }
`;

const ProfileImage = styled.img`
    width: 175px;
    height: 175px;
    border-radius: 100px;
    border: 1px solid white;
    margin-top: -50px;
    margin-bottom: 10px;
`;

const IconContainer = styled.div`
    width: 100%;
    justify-content: center;
    display: flex;
    gap: 10px;
`;



const PillCard = ({name, description, img, onClick, children}) => {
    const {width, height} = useWindowDimensions()
    return (
        <Card>
            <ProfileImage src={img}>
            </ProfileImage>
            <TextLabel
            text={name}
            color={config.navigation.colors.text}
            center
            labelsize={width < 980 ? "22px" : "28px"}
            padding={"2px"}
            >
            </TextLabel>
            <TextLabel
            text={description}
            color={config.navigation.colors.subtext}
            center
            labelsize={width < 980 ? "16px" : "18px"}
            >
            </TextLabel>
            <IconContainer>
                {children}
            </IconContainer>
        </Card>
    )
}

export default PillCard