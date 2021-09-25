import React , {useState} from 'react'
import {Container , Col ,Row} from 'react-bootstrap'
import Img1 from '../../images/core.png'
import Img2 from '../../images/colorsservice.png'
import { ImgMain , MainCore , ImgSec , Span , Title , Desc , Btn} from './style'
import {AiOutlineRight,AiOutlineArrowRight} from 'react-icons/ai'
const CoreFeature = () => {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover)
    }
    return (
        <MainCore>
            <Container>
                <Row>
                    <Col md={6}>
                        <Span>CORE FEATURES</Span>
                        <Title>Smart Jackpots that you may love this anytime & anywhere</Title>
                        <Desc>Get your tests delivered at let home collect<br/> sample from the victory of the managements that<br/> supplies best design system guidelines ever.</Desc>
                        <Btn onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        >Get Started{hover ? <AiOutlineArrowRight/> : <AiOutlineRight/> } </Btn>
                    </Col>
                    <Col md={6}>
                        <ImgMain src={Img1}/>
                        <ImgSec src={Img2}/>
                    </Col>
                </Row>
            </Container>
        </MainCore>
    )
}

export default CoreFeature
