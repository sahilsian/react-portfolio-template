import react, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Logo from "../logo";
import NavigationMenu from "../navigation-menu";
import NavigationTab from "../navigation-tab";
import config from '../../../config.json'
import NavigationItem from "../navigation-item";
import CustomButton from "../custom-button";
import useWindowDimensions from "../../../hooks/useWIndowDimensions";
import Icon from "../icon";

const MainContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 30px;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: ${props=>props.bgcolor ? "rgba(255, 255, 255, 0.75)" : "rgba(17, 25, 40, 0.75)"};
  transition: 0.2s all ease;
  box-shadow: ${(props) =>
    props.boxShadow ? "0px 8px 15px -7px rgba(0,0,0,0.1);" : null};
  top: 0;
`;

const OffsetContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: auto;
  display: flex;
`;

const FlexBody = styled.div`
    display: ${props=>props.display ? "none": "flex"};
  flex: ${props=>props.flex};
  width: 100%;
  gap: ${props=>props.gap ? props.gap : "0px"};
  justify-content: ${(props) => (props.justify ? "flex-end" : "flex-start")};
`;

const NavigationContainer = styled.nav`
  padding: 0px 20px;
  width: 100%;
  flex: 1;
  align-items: center;
  display: ${props=>props.display ? "none": "flex"};
  gap: 10px;
`;

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  box-sizing: border-box;
  z-index: 999;
`;



const Header = () => {
  const [background, setBackground] = useState(false);
  const [dropdown, setDropdown] = useState('')
  const [menuRender, setMenuRender] = useState([])
  const {width, height} = useWindowDimensions();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setBackground(true) : setBackground(false);
    });
  }, []);

  return (
    <Wrapper>
      <MainContainer bgcolor={background} boxShadow={background}>
        <OffsetContainer>
          <FlexBody flex={2}>
            {/* <Logo image={config.navigation.logo}></Logo> */}
            <Logo image={config.navigation.logo}></Logo>
            <NavigationContainer display={width < 980}>
              {config.navigation.tabs.map((e)=> {
                return (
                    <NavigationTab
                     color={background}
                     colorImportant={dropdown == e.name ? config.navigation.colors.accent : null}
                     tabName={e.name}
                     onClick={()=> {
                        if(dropdown == e.name) {
                            setDropdown('')
                        } else {
                        setDropdown(e.name)
                        }
                     }}
                     ></NavigationTab>
                )
              })}
            </NavigationContainer>
          </FlexBody>
          <FlexBody display={width < 980}  gap={"10px"} justify flex={1}>
            <CustomButton width={"150px"} outlined text={'Start your Rental'}></CustomButton>
          </FlexBody>
          <FlexBody flex={0.2} display={width > 980}>
            <Icon size={"24px"} src={"/menu.svg"}></Icon>
          </FlexBody>
        </OffsetContainer>
      </MainContainer>
      
      <NavigationMenu 
      bgcolor={background} 
      display={dropdown.length > 0}
      >
        {dropdown.length > 0 && config.navigation.tabs.find(e => e.name === dropdown).tabs.map((e)=>{
            return (
                <NavigationItem 
                color={background}
                hover={background}
                tabName={e.name}
                description={e.description}
                
                >
                </NavigationItem>
            )
        })}
      </NavigationMenu>
    </Wrapper>
  );
};

export default Header;
