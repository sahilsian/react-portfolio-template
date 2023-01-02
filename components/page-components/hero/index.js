import React from 'react';
import styled from 'styled-components';
import HeroContent from '../../individual-components/hero-content';
import VideoHero from '../../individual-components/video-hero';
import useWindowDimensions from '../../../hooks/useWIndowDimensions';
import config from '../../../config.json'
import StaticHero from '../../individual-components/static-hero';

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
            {config.hero.video
            ?
            <VideoHero>
            </VideoHero>
            :
            <StaticHero>
            </StaticHero>
            }
            <HeroContent>
            </HeroContent>
        </Wrapper>
    )
}

export default Hero