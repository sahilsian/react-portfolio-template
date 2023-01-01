import Hero from '../components/page-components/hero'
import styled from 'styled-components'
import Header from '../components/individual-components/header';
import Rental from '../components/page-components/rental';
import Info from '../components/page-components/info';
import config from '../config.json'
import BannerApp from '../components/page-components/banner-app';
import TeamLayout from '../components/page-components/team-layout';
import NavigationItem from '../components/individual-components/navigation-item';
import FooterApp from '../components/page-components/footer-app';
import SiteHead from '../components/individual-components/head';
import PhotoGallery from '../components/page-components/photo-gallery';

const Container = styled.div`
    width: 100%;
    height: 200vh;
`;

function HomePage() {
  
    return(
      <Container>
        <SiteHead></SiteHead>
        <Header></Header>
        <Hero></Hero>
        <Rental></Rental>
        <Info
          title={config.side_one.text.title}
          description={config.side_one.text.description}
          src={config.side_one.images.image1}
          alt={config.side_one.images.alt}
        >
        </Info>
        <Info
          maindirection
          title={config.side_two.text.title}
          description={config.side_two.text.description}
          src={config.side_two.images.image1}
          reverse
          alt={config.side_two.images.alt}
          
        >
        </Info>
        <BannerApp
        ></BannerApp>
        <TeamLayout></TeamLayout>
        <PhotoGallery></PhotoGallery>
       <FooterApp></FooterApp>
      </Container>
    ) 
  }
  
export default HomePage
  