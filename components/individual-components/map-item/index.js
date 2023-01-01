import React from "react";
import styled from "styled-components";
import TextLabel from "../text-label";
import config from "../../../config.json";
import useWindowDimensions from "../../../hooks/useWIndowDimensions";

const Container = styled.div`
  background-color: #fff;
  display: flex;
  min-height: 120px;
  border: 1px solid #00000010;
  margin-bottom: 10px;
  max-height: 150px;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
`;

const ContainerImage = styled.div`
    flex: 1;
    width: 100%;
`;

const Details = styled.div`
  flex: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
`;

const MapItem = ({src, text, subtext, onClick}) => {
  const {width, height} = useWindowDimensions()
  return (
    <Container onClick={onClick}>
      <ContainerImage>
        <Image src={src}></Image>
      </ContainerImage>
      <Details>
        <TextLabel
          color={config.navigation.colors.text}
          padding={"4px"}
          text={text}
        ></TextLabel>
        <TextLabel
          color={config.navigation.colors.subtext}
          text={subtext}
        ></TextLabel>
      </Details>
    </Container>
  );
};

MapItem.defaultProps = {
  src: '/hotel.jpg',
  text: 'Example Card',
  subtext: 'This is an Example Card'
}

export default MapItem;
