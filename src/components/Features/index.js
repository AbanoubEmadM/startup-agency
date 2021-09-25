import axios from 'axios'
import React , {Component} from 'react'
import {Container , Col ,Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Title , Desc , Heading , Span , FeaturesMain} from './style'
class FeaturesSec extends Component {
    state = {
        features:[]
    }
    componentDidMount(){
        axios.get('data/data.json').then(res => {
            this.setState({
                features:res.data.features
            })
        })
    }
    render(){
        const {features} = this.state;
        const Feat = features.map(featItem => {
            return(
                <Col md={3} key={featItem.id}>
                    <img src={featItem.img}/>
                    <Title>{featItem.title} </Title>
                    <Desc>{featItem.desc} </Desc>
                </Col>
            )
        })
        return (
            <FeaturesMain>
                <Span>WHATS THE FUNCTION</Span>
                <Heading>Meet the feature of product</Heading>
                <Container>
                    <Row>
                        {Feat}
                    </Row>
                </Container>
            </FeaturesMain>
        )    
    }
}

export default FeaturesSec
