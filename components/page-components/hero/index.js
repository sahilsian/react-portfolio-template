import React from 'react';
import styled from 'styled-components';
import HeroContent from '../../individual-components/hero-content';
import VideoHero from '../../individual-components/video-hero';
import useWindowDimensions from '../../../hooks/useWIndowDimensions';

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 100%;
    height: 100vh;
`;

const Hero = () => {
    const {width, height} = useWindowDimensions()
    return (
        <Wrapper>
            <VideoHero>
            </VideoHero>
            <HeroContent>
            </HeroContent>
        </Wrapper>
    )
}

export default Hero