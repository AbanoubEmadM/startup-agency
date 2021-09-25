import React, { Component } from 'react'
import axios from 'axios'
import { Title , Desc , Img ,FeatBox , QFeaturesMain} from './style'
import {Container , Col ,Row} from 'react-bootstrap'
class QFeatures extends Component {
    state = {
        Qfeatures:[]
    }
    componentDidMount(){
        axios.get('data/data.json').then(res => {
            this.setState({
                Qfeatures:res.data.Qfeatures
            })
        })
    }
    render(){
        const {Qfeatures} = this.state;
        const QFeat = Qfeatures.map(QFeatB => {
            return (
                <Col md={6} key={QFeatB.id}>
                    <FeatBox>
                    <Img src={QFeatB.img} style/>
                    <div>
                    <Title>{QFeatB.title} </Title>
                    <Desc>{QFeatB.desc} </Desc>
                    </div>
                    </FeatBox>
                </Col>
            )
        })
        return (
            <QFeaturesMain>
                <Container>
                    <Row>
                        {QFeat}
                    </Row>
                </Container>
            </QFeaturesMain>
        )    
    }
}

export default QFeatures
