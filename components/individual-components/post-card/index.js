import React from 'react'
import styled from 'styled-components'
import TextLabel from '../text-label';
import config from '../../../config.json'
import CustomButton from '../custom-button';
import Link from 'next/link';

const Container = styled.div`
    width: 100%;
    max-width: 350px;
    min-width: 300px;
    height: 500px;
    border-radius: 20px;
    transition: all 0.3s;
    position: relative;
    box-shadow: ${props=>props.reverse ? " -35px 35px 68px 0px #4aaf6e20, inset 8px -8px 16px 0px #4aaf6e50, inset 0px 11px 28px 0px rgb(255, 255, 255)" : " 35px 35px 68px 0px #4aaf6e20, inset -8px -8px 16px 0px #4aaf6e50, inset 0px 11px 28px 0px rgb(255, 255, 255)"};
    &:hover {
        box-shadow: ${props=>props.reverse ? "-35px 35px 68px 0px #4aaf6e40" : "35px 35px 68px 0px #4aaf6e40"} ;
        cursor: pointer;
    }
`;

const ImageWrapper = styled.img`
    width: 100%;
    border-radius: 20px 20px 0px 0px;
    max-height: 200px;
    object-fit: cover;
    object-position: center;
`;

const TextContainer = styled.div`
    padding: 20px;
    overflow: hidden;
    height: 100%;
    width: 100%;
    box-sizing: border-box;

`;

const PostCard = ({img, title, date, description, href}) => {
    return (
        <Container>

            <ImageWrapper src={img}>
            </ImageWrapper>
            <TextContainer>
                <TextLabel 
                color={config.navigation.colors.subtext} 
                text={date}
                labelsize={"14px"}
                weight={"400"}
                padding={'3px'}
                ></TextLabel>
                <TextLabel 
                color={config.navigation.colors.text} 
                text={title}
                labelsize={"22px"}
                ></TextLabel>
                <TextLabel
                color={config.navigation.colors.text}
                text={description + '...'}
                weight={"400"}
                padding={'20px'}
                >
                </TextLabel>
                <CustomButton
                    height={"50px"}
                    width={'none'}
                    text={'Read More'}
                    outlined
                    href={href}
                >
                </CustomButton>
            </TextContainer>
        </Container>
    )
}

PostCard.defaultProps = {
    img: '/example.jpg',
    title: 'Electric Cars! They are Here. Get Ready for them now!',
    date: 'Posted: Jan 27, 1992',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
    href: '/'
}

export default PostCard