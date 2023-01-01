import React from 'react'
import styled from 'styled-components'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Header from '../../components/individual-components/header'
import TextLabel from '../../components/individual-components/text-label'
import FooterApp from '../../components/page-components/footer-app'
import config from '../../config.json'
import BannerApp from '../../components/page-components/banner-app'
const Container = styled.div`
    width: 100%;
`;

const Image = styled.img`
    width: 100%;
    max-height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
`;

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 500px;
`;

const Backdrop = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #00000070;
    display: flex;
    jusitfy-content: center;
    align-items: center;
`;

const ItemContainer = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: auto;
    min-height: 500px;
    padding: 50px 20px;

`;

const TitleContainer = styled.div`
    width: 100%;
    max-width: 600px;
    margin: auto;
`;


const PostPage = ({ frontmatter: {title, date, cover_image}, slug, content}) => {
    return (
        <Container>
            <Header></Header>
            <ImageContainer>
                <Backdrop>
                    <TitleContainer>
                        <TextLabel
                            text={title}
                            labelsize={"42px"}
                            center
                            weight={"700"}
                        >
                        </TextLabel>
                    </TitleContainer>
                </Backdrop>
                <Image src={cover_image}>
                </Image>
            </ImageContainer>

            <ItemContainer>
                <TextLabel color={config.navigation.colors.text} labelsize={"38px"} text={title}></TextLabel>
                <TextLabel color={config.navigation.colors.subtext} labelsize={"15px"} text={"Posted On "+ date}></TextLabel>
                <div dangerouslySetInnerHTML={{__html: marked(content)}}>
                </div>
            </ItemContainer>
            <BannerApp></BannerApp>
            <FooterApp></FooterApp>
        </Container>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: { slug }}) {
    const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8')
    const {data:frontmatter, content}  = matter(markdownWithMeta)
    return {
        props: {
            frontmatter,
            slug,
            content
        }
    }
}

export default PostPage