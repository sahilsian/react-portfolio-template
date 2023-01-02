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
    padding-top: 50px;
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
    font-size: ${props=>props.size ? "38px": "68px"};
    line-height: ${props=>props.size ? "48px": "78px"};
    padding-bottom: 12px;
    text-align: ${props=>props.center ? "center" : "left"};
`;

const SecondaryText = styled.h2`
    margin: 0;
    color: #fff;
    font-size: ${props=>props.size ? "18px": "22px"};;
    font-weight: 400;
    padding-bottom: 33px;
    text-align: ${props=>props.center ? "center" : "left"};
`;

const HighlightedWord = styled.span`
    color: ${config.navigation.colors.accent};
    font-size: ${props=>props.size ? "38px": "64px"};
    line-height: ${props=>props.size ? "48px": "78px"};
    position: relative;
`;

const Accent = styled.img`
    position: absolute;
    width: 30px;
    top: ${props=>props.size ? "-5px": "10px"};
    right: ${props=>props.size ? "-20px": ""};
`;


const HeroContent = () => {
    const {width, height} = useWindowDimensions();
    return (
        <Container direction={width < 1100 ? true : false}>
            <FlexContainer center={width < 1100} justify={width < 1100 ? true : false} direction flexedit flex={2}>
                <PrimaryText size={width < 1100} center={width < 1100 ? true : false}>
                    {config.hero.text.primary.replace(config.hero.text.highlighted_word_primary, "")}
                    <HighlightedWord size={width < 1100}>
                        {config.hero.text.highlighted_word_primary}
                        <Accent size={width < 1110} src='/heart.svg'></Accent>
                    </HighlightedWord>
                </PrimaryText>

                <SecondaryText size={width < 1100} center={width < 1100}>
                    {config.hero.text.secondary}
                </SecondaryText>
                <CustomButton href={config.hero.text.link} hide={width < 1100} outlined height={width < 1100 ? null : "60px"} width={"200px"} text={config.hero.text.cta_button}>
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