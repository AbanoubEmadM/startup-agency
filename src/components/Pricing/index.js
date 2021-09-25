import React from 'react'
import { Component } from 'react'
import {Container , Col , Row , ListGroup } from 'react-bootstrap'
import { Title , Desc , Item , Icon , Price , Span , PriceBox , Btn , MainPricing , Heading , MainSpan} from './style'
import axios from 'axios'
class Pricing extends Component {
    state = {
        pricing:[]
        };
    componentDidMount(){
        axios.get('data/data.json').then(res => {
            this.setState({
                pricing:res.data.pricing
            })
        })
    }
    render(){
        const {pricing} = this.state;
        const price = pricing.map(priceBox => {
            return(
                <Col md={4} key={priceBox.id}>
                <PriceBox>
                    <Title>{priceBox.title} </Title>
                    <Desc>{priceBox.desc} </Desc>
                    <ul className="list-unstyled">
                        <Item><Icon /> {priceBox.item1} </Item>
                        <Item><Icon />{priceBox.item2} </Item>
                        <Item><Icon />{priceBox.item3} </Item>
                        <Item><Icon />{priceBox.item4} </Item>
                    </ul>
                    <Price>{priceBox.price}<Span>/Monthly </Span></Price>
                    <Btn>{priceBox.btn}</Btn>
                </PriceBox>
                </Col>
            )
        })
        return (
            <MainPricing>
                <Container>
                <MainSpan>PRICING PLAN</MainSpan>
                <Heading>Choose your pricing policy</Heading>
                    <Row>
                    {price}
                    </Row>
                </Container>
            </MainPricing>
        )    
    }
}

export default Pricing
