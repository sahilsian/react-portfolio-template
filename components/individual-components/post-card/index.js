import React from 'react'
import styled from 'styled-components'
import TextLabel from '../text-label';
import config from '../../../config.json'
import CustomButton from '../custom-button';
import Link from 'next/link';

const Container = styled.div`
    width: 100%;
    max-width: 780px;
    border-radius: 20px;
    transition: all 0.3s;
    position: relative;
    border-bottom: 1px solid #00000010;
    padding-bottom: 20px;
    margin-bottom: 20px;
`;

const ImageWrapper = styled.img`
    width: 100%;
    object-fit: contain;
    object-position: center;
`;

const TextContainer = styled.div`
    padding: 20px 0px;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
`;

const AuthorContainer = styled.div`
    display: flex;
    padding: 20px 0px;
`;

const AuthorIcon = styled.div`
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #00000010;
    border-radius: 100px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
`

const Img = styled.img`
    width: 30px;
    height: auto;
`;

const ItemContainer = styled.div`
    padding: 7px 15px;
`;

const PostCard = ({img, title, date, description, href, alt}) => {
    return (
        <Container>
            <AuthorContainer>
                <AuthorIcon >
                    <Img alt={"Logo"} src='/greenclick-green.png'></Img>
                </AuthorIcon>
                <ItemContainer>
                    <TextLabel padding={"0px"} weight={'500'} labelsize={"15px"} color={config.navigation.colors.text} text={"Greenclick Technologies"}></TextLabel>
                    <TextLabel weight={'300'} padding={"0px"} labelsize={"15px"} color={config.navigation.colors.subtext} text={date}></TextLabel>
                </ItemContainer>
            </AuthorContainer>
            <ImageWrapper alt={alt} src={img}>
            </ImageWrapper>
            <TextContainer>
                <TextLabel 
                color={config.navigation.colors.text} 
                text={title}
                labelsize={"22px"}
                ></TextLabel>
                <TextLabel
                color={config.navigation.colors.text}
                text={description}
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