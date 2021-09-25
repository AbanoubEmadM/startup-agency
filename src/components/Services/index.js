import React, { Component } from 'react'
import {Container , Col ,Row} from 'react-bootstrap'
import { Img, Img2 , Span , Title , SrvBox , Desc , ServicesMain} from './style'
import axios from 'axios'
import ImgM from '../../images/service.png'
import ImgC from '../../images/colorsservice.png'
class ServicesSec extends Component {
    state = {
        services:[]
    }
    componentDidMount(){
        axios.get('data/data.json').then(res => {
            this.setState({
                services:res.data.services
            })
        })
    }
    render (){
        const {services} = this.state;
        const Srv = services.map(srvBox => {
            return (
                <SrvBox key={srvBox.id}>
                <img src={srvBox.img}/>
                <div>
                <h6>{srvBox.title} </h6>
                <Desc>{srvBox.desc} </Desc>
                </div>
                </SrvBox>
            )
        })
        return (
            <ServicesMain>
                <Container>
                    <Row>
                        <Col md={6}>
                            <Img src={ImgM}/>
                            <Img2 src={ImgC}/>
                        </Col>
                        <Col md={6}>
                        <Span>OUR SERVICES</Span>
                        <Title>Business Goals<br/> Achieved with Design</Title>
                        {Srv}
                        </Col>
                    </Row>
                </Container>
            </ServicesMain>
        )    
    }
}

export default ServicesSec
