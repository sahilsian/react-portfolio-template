import React from 'react';
import styled from 'styled-components';
import config from '../../../config.json';
import Icon from '../../individual-components/icon';
import PillCard from '../../individual-components/pill-card';
import { useRouter } from 'next/router'
import TextLabel from '../../individual-components/text-label';
import CustomButton from '../../individual-components/custom-button';
import useWindowDimensions from '../../../hooks/useWIndowDimensions';

const Container = styled.div`
    width: 100%;
    padding: 50px 20px;
    box-sizing: border-box;
`;

const Margin = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: auto;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
`;

const Contain = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: auto;
    display: flex;
    justify-content: center;
    padding: 50px 0px;
    box-sizing: border-box;
`;

const TeamLayout = () => {
    const router = useRouter()
    const {width, height} = useWindowDimensions()
    return (
        <Container>
            <TextLabel
            text={config.team.text.title}
            color={config.navigation.colors.text}
            padding={"50px"}
            labelsize={width < 980 ? "38px" : "54px"}
            weight={"700"}
            center
            >
            </TextLabel>
            <Margin>
                {config.team.team.map((e) => {
                    return (
                        <PillCard
                        name={e.name}
                        description={e.description}
                        img={e.img}
                        banner={e.banner}
                        altImage={e.altUser}
                        altBanner={e.alt}
                        >
                        {
                        e.icons.map((e)=> {
                            return (
                                <Icon alt={e.alt} src={e.img} onClick={()=> {
                                    router.push(e.url)
                                }}></Icon>
                            )
                        })
                        }
                        </PillCard>
                    )
                    })
                }
            </Margin>
            <Contain>
                <CustomButton href={config.team.text.link} width={"150px"} outlined text={config.team.text.button}></CustomButton>
            </Contain>
        </Container>
    )
}

export default TeamLayout