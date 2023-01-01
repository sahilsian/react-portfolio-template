import React, {useState} from 'react'
import PhotoAlbum from "react-photo-album";
import styled from 'styled-components'
import config from '../../../config.json'
import TextLabel from '../../individual-components/text-label';
import useWindowDimensions from '../../../hooks/useWIndowDimensions';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Container = styled.div`
    width: 100%;
    max-width: 1280px;
    padding: 50px 20px;
    margin: auto;
    box-sizing: border-box;
`;


const PhotoGallery = () => {
    const {width, height} = useWindowDimensions()
    const [index, setIndex] = useState(-1);
    const slides = config.photos.photos.map(({ src, width, height }) => ({
        src,
        width,
        height
    }));

    return (
        <Container>
             <Lightbox
                slides={slides}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
            />
            <TextLabel weight={"700"} padding={"40px"} labelsize={width < 1100 ? "38px" : "48px"} center color={config.navigation.colors.text} text={config.photos.title}></TextLabel>
            <PhotoAlbum 
            layout="rows"
            columns
            photos={config.photos.photos}
            onClick={({index})=> {
                setIndex(index)
                console.log(index)
            }}
            >
           
             
            </PhotoAlbum>
        </Container>
    )
}

export default PhotoGallery