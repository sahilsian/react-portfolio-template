import React, {useState} from 'react'
import styled from 'styled-components'
import config from '../../../config.json'
import TextLabel from '../text-label';
import useWindowDimensions from '../../../hooks/useWIndowDimensions';

const BannerContainer = styled.div`
    width: 100%;
    background-color: ${config.navigation.colors.accent};
    padding-top: 30px;
`;

const Margin = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: auto;
    display: flex;
    gap: 50px;
    padding: 0px 20px;
    align-items: center;
    box-sizing: border-box;
    flex-direction: ${props=>props.direction ? "column-reverse" : "row"};
`;

const Image = styled.img`
    width: 100%;
    max-width: 450px;
    display: block;
    box-sizing: border-box;
`;

const FlexContainer = styled.div`

`;

const Badge = styled.img`
    width: auto;
    max-width: ${props=>props.width};
`;

const BadgeContainer = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    padding-top: 10px;
    justify-content: ${props=>props.justify ? "center" : "flex-start"};
`;

const Banner = ({image, title, description, alt}) => {
    const {width, height} = useWindowDimensions();
    return (
        <BannerContainer>
            <Margin direction={width < 980}>
                <Image src={image} alt={alt}>

                </Image>
                <FlexContainer>
                    <TextLabel
                    text={title}
                    labelsize={width < 980 ? "38px" : "54px"}
                    weight={"700"}
                    center={width < 980}
                    >
                    </TextLabel>
                    <TextLabel
                    text={description}
                    labelsize={width < 980 ? "18px" : "20px"}
                    weight={"300"}
                    center={width < 980}
                    >
                    </TextLabel>
                    <BadgeContainer justify={width < 980}>

                    <Badge 
                    src='/defaults/app-store.svg'
                    width={"150px"}
                    ></Badge>
                    <Badge 
                    src='/defaults/play-store.png'
                    width={"132px"}
                    ></Badge>
                    </BadgeContainer>

                </FlexContainer>
            </Margin>
        </BannerContainer>
    )
}

Banner.defaultProps = {
    image: "/defaults/square_default.png"
}

export default Banner