import React from 'react'
import styled from 'styled-components'
import Footer from '../../individual-components/footer'
import config from '../../../config.json'
import TextLabel from '../../individual-components/text-label';
import AppLink from '../../individual-components/link';

const ItemContainer = styled.div`
    flex: 1;
    padding: 20px;
`;

const FooterApp = () => {
    return (
        <Footer email={config.footer.text.email} copywrite={config.footer.text.copyright} backdrop={config.footer.images.backdrop}>
            {config.footer.tabs.map((e)=> {
                return (
                    <ItemContainer>
                        <TextLabel
                        color={config.navigation.colors.text}
                        text={e.name}
                        labelsize={"24px"}
                        >
                        
                        </TextLabel>
                        {e.tabs.map((e)=> {
                            return (
                                <AppLink
                                    text={e.name}
                                    href={e.link}
                                >
                                </AppLink>    
                            )
                        })}
                    </ItemContainer>
                )
            })}
        </Footer>
    )
}
export default FooterApp