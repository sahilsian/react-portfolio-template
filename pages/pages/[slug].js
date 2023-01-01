import React, { useEffect, useState } from 'react'
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
import Icon from '../../components/individual-components/icon'
import useWindowDimensions from '../../hooks/useWIndowDimensions'
import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    RedditShareButton,
    TwitterShareButton,
    WhatsappShareButton,
  } from "react-share";

import {
    EmailIcon,
    FacebookIcon,
    LinkedinIcon,
    RedditIcon,
    TwitterIcon,
    WhatsappIcon,
} from "react-share";
import MapItem from '../../components/individual-components/map-item'
import CustomButton from '../../components/individual-components/custom-button'
import Head from 'next/head'
const Container = styled.div`
    width: 100%;
`;


const ImageContainer = styled.img`
    width: 100%;
    object-fit: cover;
    max-height: 450px;
    padding-bottom: 15px;
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
    padding-top: 160px;
    display: ${props=>props.flex ? "block" : "flex"};
    box-sizing: border-box;
`;

const FlexItem = styled.div`
    display: flex;
    padding: ${props=>props.padding ? "0px 20px" : "0px"};
    flex: ${props=>props.flex || "1"};
    align-items: center;
    flex-direction: column;
`;

const TitleContainer = styled.div`
    width: 100%;
    max-width: 600px;
    margin: auto;
`;

const IconContainer = styled.div`
    display: flex;
    padding: 10px 0px;
    padding-bottom: 30px;
    gap: 10px;
    border-bottom: 1px solid #00000020;
    margin-bottom: 30px;
    width: 100%;
`;

const PostPage = ({posts, frontmatter: {title, date, cover_image, read, excerpt}, slug, content}) => {
    const [randomPosts, setRandomPosts] = useState([])
    function getRandom(arr, n) {
        var result = new Array(n),
            len = arr.length,
            taken = new Array(len);
        if (n > len)
            throw new RangeError("getRandom: more elements taken than available");
        while (n--) {
            var x = Math.floor(Math.random() * len);
            result[n] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    }

    useEffect(()=> {
        setRandomPosts(getRandom(posts, 5))
    }, [])
    const {width, height} = useWindowDimensions()
    return (
        <Container>
            <Head>
                <title>{title} | Greenclick Technologies</title>
                <link rel="shortcut icon" href="/greenclick-green.png" />
                <meta name="description" content={excerpt}></meta>
                <meta name="robots" content="index, follow" />
                <meta content={title} property="og:title" />
                <meta content={excerpt} property="og:description" />
                <meta content={config.navigation.colors.accent} data-react-helmet="true" name="theme-color" />
                <meta content={window.location.href} property="og:url" />

                <meta property="og:image" content={window.location.origin + cover_image}/>
                <meta property="og:image:type" content="image/jpeg" /> 
                <meta property="og:image:width" content="400" /> 
                <meta property="og:image:height" content="100" />
                <meta property="og:image:alt" content="Blog Cover" />
                <meta property="og:image:secure_url" content={window.location.origin + cover_image}/>


                <meta property="og:type" content="text.blog" />
                <meta name="og:site_name" content="Greenclick Technologies"></meta>
            </Head>
            <Header></Header>
            <ItemContainer flex={width < 1100}>
                <FlexItem flex={"2"}>
                <ImageContainer src={cover_image}>
                </ImageContainer>
                <h1><TextLabel color={config.navigation.colors.text} weight={'500'} labelsize={"32px"} text={title}></TextLabel></h1>
                <h1><TextLabel color={config.navigation.colors.text} weight={'400'} labelsize={"19px"} text={excerpt}></TextLabel></h1>
                <TextLabel color={config.navigation.colors.subtext} labelsize={"15px"} text={"Posted On "+ date + " — " + read + " min read"}></TextLabel>
                <IconContainer>
                    <EmailShareButton subject={`Greenclick: ${title}`} url={window.location.href}>
                        <EmailIcon size={"32px"}></EmailIcon>
                    </EmailShareButton>
                    <FacebookShareButton url={window.location.href}>
                        <FacebookIcon size={"32px"}></FacebookIcon>
                    </FacebookShareButton>
                    <LinkedinShareButton url={window.location.href}>
                        <LinkedinIcon size={"32px"}></LinkedinIcon>
                    </LinkedinShareButton>
                    <RedditShareButton url={window.location.href}>
                        <RedditIcon size={"32px"}></RedditIcon>
                    </RedditShareButton>
                    <TwitterShareButton url={window.location.href}>
                        <TwitterIcon size={"32px"}></TwitterIcon>
                    </TwitterShareButton>
                    <WhatsappShareButton url={window.location.href}>
                        <WhatsappIcon size={"32px"}></WhatsappIcon>
                    </WhatsappShareButton>
                </IconContainer>
                <div className='content_prop' dangerouslySetInnerHTML={{__html: marked(content)}}>
                </div>
                </FlexItem>
                <FlexItem padding={width > 1100}>
                    <TextLabel color={config.navigation.colors.text} weight={'500'} labelsize={"24px"} text={"Explorer More"}></TextLabel>
                
                    {randomPosts.filter(e => (e.frontmatter.index == true && e.slug != slug) ).map((post, index)=> {
                        return (
                            <MapItem 
                            src={post.frontmatter.cover_image}
                            text={post.frontmatter.title.slice(0, 43) + "..."}
                            subtext={post.frontmatter.date}
                            >
                            </MapItem>
                        )
                    })}
                    <CustomButton
                        text={"View All"}
                        outlined
                        height={"60px"}
                        width={"100%"}
                        href={"/blog"}
                    >

                    </CustomButton>
                </FlexItem>
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
    const files = fs.readdirSync(path.join('posts'))

    const posts = files.map(filename => {
        const slug = filename.replace('.md', '')
        const markdownWithMeta = fs.readFileSync(
            path.join('posts', filename),
            'utf-8'
        )

        const {data:frontmatter} = matter(markdownWithMeta)

        return {
            slug,
            frontmatter
        }
    })
    return {
        props: {
            posts,
            frontmatter,
            slug,
            content
        }
    }
}

export default PostPage