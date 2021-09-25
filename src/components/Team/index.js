import React, { Component } from 'react'
import {Container , Col ,Row} from 'react-bootstrap'
import axios from 'axios'
import {Avatar , Name , Job , TeamBox , SocialIcons ,Span , FaceBook , Twitter , Instagram , MainTeam , Heading} from './style'
class Team extends Component {
    state = {
        teams:[]
    };
    componentDidMount(){
        axios.get('data/data.json').then(res => {
            this.setState({
                teams:res.data.team
            })
        })
    }
    render(){
        const {teams} = this.state;
        const AllTeams = teams.map(TeamItem => {
            return(
                <Col md={4} key={TeamItem.id}>
                <TeamBox>
                <Avatar src={TeamItem.img}/>
                <Name>{TeamItem.name} </Name>
                <Job>{TeamItem.job} </Job>
                <SocialIcons>
                    <FaceBook/>
                    <Twitter/>
                    <Instagram/>
                </SocialIcons>
                </TeamBox>
                </Col>
            )
        })
        return(
            <MainTeam>
                <Span>OUR TEAM</Span>
                <Heading>The most qualified and talented<br/> individuals</Heading>
                <Container style={{textAlign:'center'}}>
                    <Row>
                    {AllTeams}
                    </Row>
                </Container>
            </MainTeam>
            )
    }
}
export default Team
