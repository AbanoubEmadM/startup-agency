import React from 'react'
import { HeroContent , HeroTitle , HeroDesc, Link , Img , Hero} from './style'
import l from '../../images/lap.png'
import { Container  } from 'react-bootstrap'
const HeroSec = () => {
    return (
        <Hero>
        <Container>
        <HeroContent>
            <HeroTitle>Top Quality Digital<br/> Products To Explore</HeroTitle>
            <HeroDesc>Get your blood tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.</HeroDesc>
            <Link>Explore</Link>
        </HeroContent>
        <Img src={l}/>
        </Container>
        </Hero>
    )
}

export default HeroSec
