import React, {useRef} from "react";
import styled from "styled-components";
import config from '../../../config.json'

const Wrapper = styled.div`
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  poistion: relative;
`;

const Video = styled.video`
  width: 100%;
  object-fit: contain;
  display: block;
  min-width: 100%; 
  min-height: 100%; 
  width: auto;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  &::-webkit-scrollbar {
    display: none;
  }
  
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #000000B3;
  z-index: 1;
`;

const VideoHero = () => {
    const videoRef= useRef();
    

  return (
    <Wrapper>
      <Container>
        <Overlay></Overlay>
        <Video
         ref={videoRef}
         autoPlay loop controls={false}>
            <source
            src={config.hero.video_1}
            >
            </source>
            <source
            src={config.hero.video_2}
            >
            </source>
            Your browser does not support the <code>video</code> element.
         </Video>
      </Container>
    </Wrapper>
  );
};

export default VideoHero;
