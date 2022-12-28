import React from 'react'
import styled from 'styled-components'
import config from '../../../config.json'
import CarCardLarge from '../car-card-large';
import CustomButton from '../custom-button';
import useWindowDimensions from '../../../hooks/useWIndowDimensions';

const Container = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: auto;
    padding: 20px;
    position: absolute;
    z-index: 4;
    display: flex;
    gap: 20px;
    box-sizing: border-box;
    flex-direction: ${props=>props.direction ? "column-reverse": "row"};
`;

const FlexContainer = styled.div`
    width: 100%;
    flex: ${props=>props.flex ? props.flex : "1" };
    display: ${props=>props.flexedit ? "flex" : "block"};
    justify-content: center;
    flex-direction: ${props=>props.direction ? "column" : "row"};
    justify-content: ${(props) => (props.justify ? "flex-end" : "center")};
    align-items: ${props=>props.center ? "center" : "start"};
`;

const PrimaryText = styled.h1`
    margin: 0;
    color: #fff;
    font-size: 64px;
    line-height: 78px;
    padding-bottom: 12px;
    text-align: ${props=>props.center ? "center" : "left"};
`;

const SecondaryText = styled.h2`
    margin: 0;
    color: #fff;
    font-size: 22px;
    font-weight: 400;
    padding-bottom: 33px;
    text-align: ${props=>props.center ? "center" : "left"};
`;

const HighlightedWord = styled.span`
    color: ${config.navigation.colors.accent};
    font-size: 64px;
    line-height: 78px;
    position: relative;
`;

const Accent = styled.img`
    position: absolute;
    width: 30px;
    top: 10px;
`;

const HeroContent = () => { 
    const {width, height} = useWindowDimensions();
    return (
        <Container direction={width < 1100 ? true : false}>
            <FlexContainer center={width < 1100} justify={width < 1100 ? true : false} direction flexedit flex={2}>
                <PrimaryText center={width < 1100 ? true : false}>
                    {config.hero.text.primary.replace(config.hero.text.highlighted_word_primary, "")}
                    <HighlightedWord>
                        {config.hero.text.highlighted_word_primary}
                        <Accent src='/heart.svg'></Accent>
                    </HighlightedWord>
                </PrimaryText>

                <SecondaryText center={width < 1100}>
                    {config.hero.text.secondary}
                </SecondaryText>
                <CustomButton width={"200px"} text={config.hero.text.cta_button}>

                </CustomButton>
            </FlexContainer>
                
            <FlexContainer justify={width < 1100 ? false : true} flex={1} flexedit>
                <CarCardLarge>
                </CarCardLarge>
            </FlexContainer>
        </Container>
    )
}

export default HeroContent