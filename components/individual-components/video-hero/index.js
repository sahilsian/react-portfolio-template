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
  height: 100%;
  overflow: hidden;
  poistion: relative;
`;

const Video = styled.video`
  width: 100%;
  object-fit: cover;
  display: block;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #00000095;
  z-index: 1;
`;

const VideoHero = () => {
    const videoRef= useRef();
    const setPlayBack = () => {
        videoRef.current.playbackRate = 0.7;
    };

  return (
    <Wrapper>
      <Container>
        <Overlay></Overlay>
        <Video
         src={config.hero.video} 
         ref={videoRef}
         onCanPlay={() => setPlayBack()}
         autoPlay loop controls={false}></Video>
      </Container>
    </Wrapper>
  );
};

export default VideoHero;
