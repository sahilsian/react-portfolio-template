import React from "react";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";
import MapItem from "../map-item";
import TextLabel from "../text-label";
import config from '../../../config.json'
import useWindowDimensions from "../../../hooks/useWIndowDimensions";

const Container = styled.div`
  width: 100%;
  height: 800px;
`;

const SearchWrap = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  border-radius: 16px;
  flex-direction: ${props=>props.direction ? "column": "row"};
`;

const MapContainer = styled.div`
  flex: 2;
`;

const ListingContainer = styled.div`
  flex: 1;
  position: relative;
  background-color: #f5f7fa;
  height: 800px;
  overflow-y: hidden;
  min-width: 200px;
`;

const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 200px;
  box-sizing: border-box;
  overflow-y: scroll;
  min-height: 400px;

`;


const Temp = styled.div`
    padding: 20px;
`;

const ListingHeader = styled.div`
    background-color: #fff;
    padding: 50px 20px;
    padding-bottom: 20px;
    box-sizing: border-box;
    border: 1px solid #00000010;
    z-index: 10;
    position: absolute;
    width: 100%;
    box-shadow: rgba(149, 157, 165, 0.5) 0px 8px 24px;
`;



const Search = () => {
  const defaultProps = {
    center: {
      lat: 49.246292,
      lng: -123.116226,
    },
    zoom: 11,
  };

  const {width, height} = useWindowDimensions()

  return (
    <Container>
      <SearchWrap direction={width < 980}>
        <MapContainer>
          <div style={{ height: width < 980 ? "400px" : "800px", width: "100%" }}>
            <GoogleMapReact
            bootstrapURLKeys={{
                key: "AIzaSyBZR2Mae8MxS4Q---MQl87gG1CGTVNZy5w",
                libraries:['places'],
            }}
              yesIWantToUseGoogleMapApiInternals
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              {/* <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              /> */}
            </GoogleMapReact>
          </div>
        </MapContainer>
        <ListingContainer>
            <ListingHeader>
                <TextLabel 
                color={config.navigation.colors.text} 
                labelsize={"24px"}
                padding={'0px'}
                text={config.rental.text.search_engine_header}>
                </TextLabel>
                <TextLabel 
                color={config.navigation.colors.subtext} 
                labelsize={"16px"}
                padding={'0px'}
                weight={400}
                text={"No Results Found"}>
                </TextLabel>
            </ListingHeader>
            <ScrollContainer>
              <TextLabel
                color={config.navigation.colors.subtext}
                text={"Search is currently under maintanance, please try again later."}
                center
              >
              </TextLabel>
            </ScrollContainer>
            
            {/* <Temp>

            <TextLabel
            center
             text={"We're Currently Building our Search Functions. Please follow our twitter for updates."}
             color={config.navigation.colors.subtext}
             ></TextLabel>
            </Temp> */}

        </ListingContainer>
      </SearchWrap>
    </Container>
  );
};

export default Search;
