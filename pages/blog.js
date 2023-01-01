import React from 'react'
import styled from 'styled-components'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import PostCard from '../components/individual-components/post-card'
import Header from '../components/individual-components/header'
import FooterApp from '../components/page-components/footer-app'
import TextLabel from '../components/individual-components/text-label'
import config from '../config.json'
import useWindowDimensions from '../hooks/useWIndowDimensions'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 50px;
`;

const MainContainer = styled.div`
    width: 100%;
    max-width: 1280px;
    padding: 100px 20px;
    margin: auto;
    padding-top: 200px;
`;

const Wrap = styled.div`

`;

const Blog = ({posts}) => {
    const {width, height} = useWindowDimensions()
    console.log(posts)
    return (
        <Wrap>
            <Header></Header>

            <MainContainer>
                <TextLabel 
                text={config.blog.title} 
                labelsize={width < 1100 ? "38px" : "48px"} 
                color={config.navigation.colors.text}
                padding={"30px"}
                center
                ></TextLabel>
                <Container>
                    {posts.filter(e => e.frontmatter.index == true).map((post, index)=> {
                        return (
                            <PostCard
                            title={post.frontmatter.title}
                            description={post.frontmatter.excerpt}
                            href={`/pages/${post.slug}`}
                            >
                            </PostCard>
                        )
                    })}
                </Container>
            </MainContainer>
            <FooterApp></FooterApp>
        </Wrap>
    )
}

export async function getStaticProps() {
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
      },
    }
}

export default Blog