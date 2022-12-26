import React from "react";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";
import MapItem from "../map-item";
import TextLabel from "../text-label";
import config from '../../../config.json'
const Container = styled.div`
  width: 100%;
  padding-top: 60px;
`;

const SearchWrap = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 20px;
  margin: auto;
  display: flex;
  border-radius: 16px;
`;

const MapContainer = styled.div`
  flex: 2;
`;

const ListingContainer = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
  background-color: #f5f7fa;
`;

const Layer = styled.div`
    width: 100%;
    padding: 50px;
`;

const ListingHeader = styled.div`
    background-color: #fff;
    padding: 20px;
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

  return (
    <Container>
      <SearchWrap>
        <MapContainer>
          <div style={{ height: "65vh", width: "100%" }}>
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
                text={config.rental.text.search_engine_header}></TextLabel>
            </ListingHeader>
            <Layer></Layer>
            {/* <MapItem></MapItem> */}
            <TextLabel
            center
             text={"We're Currently Building our Search Functions. Please follow our twitter for updates."}
             color={config.navigation.colors.subtext}
             ></TextLabel>
        </ListingContainer>
      </SearchWrap>
    </Container>
  );
};

export default Search;
