import axios from 'axios'
import React, { Component } from 'react'
import {Container , Col ,Row} from 'react-bootstrap'
import {Title , Desc , ProductBox} from './style'
class Products extends Component {
    state = {
        products:[]
    };

    componentDidMount(){
        axios.get('data/data.json').then(res => {
            console.log(res.data.products);
            this.setState({
                products:res.data.products
            })
        })
    }
    render(){
        const {products} = this.state;
        const AllProducts = products.map(ProductItem => {
            return(
                <Col md={4} className="text-center">
                    <ProductBox>
                <img src={ProductItem.img}/>
                <Title>{ProductItem.title} </Title>
                <Desc>{ProductItem.desc} </Desc>
                </ProductBox>
                </Col>
            )
        })
        return (
            <Container>
                <Row>
                {AllProducts}
                </Row>
            </Container>
        )    
    }
}

export default Products
