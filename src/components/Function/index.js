import React, { Component } from 'react'
import {Container , Col ,Row} from 'react-bootstrap'
import axios from 'axios'
import {FunctionsMain , Number , Desc , Title , Heading , P} from './style'
class Functions extends Component {
    state = {
        functions:[]
    }
    componentDidMount(){
        axios.get('data/data.json').then(res => {
            this.setState({
                functions:res.data.functions
            })
        })
    }
    render(){
        const {functions} = this.state;
        const FunctionBox = functions.map(FBox => {
            return(
                <Col key={FBox.id}>
                   <Number>{FBox.number} </Number> 
                   <Title>{FBox.title} </Title>
                   <Desc>{FBox.desc} </Desc>
                </Col>
            )
        })
        return (
            <FunctionsMain>
                <P>WHATS THE FUNCTION</P>
                <Heading>Let’s see how it works</Heading>
                <Container>
                    <Row>
                        {FunctionBox}
                    </Row>
                </Container>                
            </FunctionsMain>
        )    
    }
}

export default Functions
