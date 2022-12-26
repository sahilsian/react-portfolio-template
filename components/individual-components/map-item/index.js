import React from "react";
import styled from "styled-components";
import TextLabel from "../text-label";
import config from "../../../config.json";

const Container = styled.div`
  background-color: #fff;
  display: flex;
  height: 140px;
  border: 1px solid #00000010;
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

const MapItem = () => {
  return (
    <Container>
      <ContainerImage>
        <Image src="/hotel.jpg"></Image>
      </ContainerImage>
      <Details>
        <TextLabel
          color={config.navigation.colors.text}
          padding={"4px"}
          text={"Fairmont Hotel Vancouver"}
        ></TextLabel>
        <TextLabel
          color={config.navigation.colors.subtext}
          text={"5 Cars Available"}
        ></TextLabel>
      </Details>
    </Container>
  );
};

export default MapItem;
