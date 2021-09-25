import React,{Component} from 'react'
import {Container , Col ,Row} from 'react-bootstrap'
import axios from 'axios'
import {Title,Desc,Box,Info,Email,Name,Avatar,MainClients,Icon,IconG,Span,Heading} from './style'
class Clients extends Component {
    state = {
        clients:[]
    };

    componentDidMount(){
        axios.get('data/data.json').then(res => {
            this.setState({
                clients:res.data.clients
            })
        })
    }

    render(){
        const {clients} = this.state;
        const AllClients = clients.map(Client => {
            return(
                <Col md={4} key={Client.id}>
                <Box>
                    <Icon/>
                    <Icon/>
                    <Icon/>
                    <Icon/>
                    <IconG/>
                <Title>{Client.title} </Title>
                <Desc>{Client.desc} </Desc>
                <Info>
                    <Avatar src={Client.img}/>
                    <Name>{Client.name} 
                    <br/> <Email>{Client.email} </Email>
                    </Name>
                </Info>
                </Box>
                </Col>    
            )
        })
        return (
            <MainClients>
                <Span>Testimonial</Span>
                <Heading>Meet Client Satisfaction</Heading>
                <Container>
                    <Row>
                        {AllClients}
                    </Row>
                </Container>
            </MainClients>
        )    
    }
}

export default Clients
