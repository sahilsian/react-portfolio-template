import React from 'react'
import styled from 'styled-components'
import Logo from '../logo';
import TextLabel from '../text-label';
import config from '../../../config.json'
import Icon from '../icon';
import { useRouter } from 'next/router'
import useWindowDimensions from '../../../hooks/useWIndowDimensions';

const Container = styled.div`
    width: 100%;
    padding-top: 100px;
    position: relative;
`;

const Image = styled.img`
    position: absolute;
    width: 100%;
    display: block;
    opacity: 0.13;
    bottom: -100px;
    min-height: 100%;
`;

const Wrapper = styled.div`
    width: 100%;
    max-width: 1280px;
    min-height: ${props=>props.height ? "1000px" : "500px"};
    position: relative;
    margin: auto;
`;

const Items = styled.div`
    position: absolute;
    z-index: 10;
    top: 0;
    width: 100%;
    display: ${props=>props.display ? "block" : "flex"};
    gap: 20px;
    flex-wrap: wrap;
`;

const Flexitem = styled.div`
    flex: 1;
    padding: 20px;
`;

const LogoContainer = styled.div`
    display: flex;
    gap: 20px;
`;

const Footer = ({backdrop, children, email, copywrite}) => {
    const {width, height} = useWindowDimensions();
    const router = useRouter()
    return (
        <Container>
            <Wrapper height={width < 850}>
                <Items display={width < 850}>
                    <Flexitem>
                        <Logo
                        paddingbottom={"20px"}
                        >
                        </Logo>
                        <TextLabel
                            color={config.navigation.colors.text}
                            text={email}
                        >
                        </TextLabel>
                        <TextLabel
                            color={config.navigation.colors.subtext}
                            text={copywrite}
                            weight={'300'}
                            padding={"20px"}
                        >
                        </TextLabel>
                        <LogoContainer>
                            {config.footer.social.map((e)=> {
                                return (
                                    <Icon src={e.img} onClick={()=> {
                                        router.push(e.url)
                                    }}></Icon>
                                )
                            })}
                        </LogoContainer>
                    </Flexitem>
                    {children}
                </Items>
            </Wrapper>
            <Image src={backdrop}></Image>
        </Container>
    )
}

Footer.defaultProps = {
    backdrop: "/cityscape.svg",
    email: "hello@greenclicktechnologies.com",
    copywrite: "©️ 2021 GreenClick Technologies"
}

export default Footer