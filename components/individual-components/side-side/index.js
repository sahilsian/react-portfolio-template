import React from 'react'
import styled from 'styled-components'
import TextLabel from '../text-label';
import config from '../../../config.json'
import SingleImageCard from '../single-image-card';
import useWindowDimensions from '../../../hooks/useWIndowDimensions';

const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 0px 20px;
`;

const Wrapper = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: auto;
    display: flex;
    flex-direction: ${props=>props.maindirection ? "row-reverse" : "row"};
    gap: ${props=>props.gap ? "50px": "100px"};
    flex-direction: ${props=>props.flexdirectionoverride};
`;

const FlexBody = styled.div`
    flex: ${props=>props.flexratio};
    display: flex;
    flex-direction: ${props=>props.flexdirection ? "row" : "column"};
    justify-content: ${props=>props.justify ? "flex-end" : "flex-start"};
    justify-content: ${props=>props.justifyhard};
`;

const SideSide = ({title, description, reverse, src, flexleft, flexright, flexratioleft, flexratioright, flexdirectionleft, flexdirectionright, alt, maindirection, justifyhard, descriptiontitle, descriptiondescription}) => {
    const {width, height} = useWindowDimensions();
    return (
        <Container>
            <Wrapper gap={width < 980} flexdirectionoverride={width < 980 ? "column-reverse" : null} maindirection={maindirection}>
                <FlexBody justifyhard={justifyhard} flexdirection={flexdirectionleft} flexratio={flexratioleft} justify={flexleft}>
                    <TextLabel
                        color={config.navigation.colors.text}
                        labelsize={width < 980 ? "38px" : "54px"}
                        text={title}
                        weight={700}
                        center={width < 980}
                    >
                    </TextLabel>
                    <TextLabel
                        color={config.navigation.colors.subtext}
                        labelsize={width < 980 ? "18px" : "22px"}
                        weight={400}
                        text={description}
                        center={width < 980}
                    >
                    </TextLabel>
                </FlexBody>
                <FlexBody justifyhard={justifyhard} flexdirection={flexdirectionright} flexratio={flexratioright} justify={flexright}>
                    <SingleImageCard alt={alt} descriptiontitle={descriptiontitle} descriptiondescription={descriptiondescription} reverse={reverse} src={src}></SingleImageCard>
                </FlexBody>
            </Wrapper>
        </Container>
    )
}

SideSide.defaultProps = {
    flexdirectionleft: false,
    flexdirectionright: true,
    flexright: true,
    flexleft: false,
    flexratioleft: 2,
    flexratioright: 1,
    justifyhard: "center"
}

export default SideSide