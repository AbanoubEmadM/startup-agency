import React, { Component } from 'react'
import {Container , Col ,Row,Card} from 'react-bootstrap'
import axios from 'axios'
import {Info, Img , Title , PadBox,Name,Date,Box,MainBlog} from './style'
class Blog extends Component {
    state = {
        blog:[]
    }

    componentDidMount(){
        axios.get('data/data.json').then(res => {
            console.log(res.data.blog);
            this.setState({
                blog:res.data.blog
            })
        })
    }
    render(){
        const {blog} = this.state;
        const BlogBox = blog.map(BlogBox => {
            return(
                <Col key={BlogBox.id} md={4}>
                <Box>
                    <Img src={BlogBox.img} />
                    <PadBox>
                        <Title>{BlogBox.title}</Title>
                        <Info>
                            <Name>{BlogBox.name} </Name>
                            <Date>{BlogBox.date} </Date>
                        </Info>
                    </PadBox>
                </Box>
                </Col>
            )
        })
        return (
            <MainBlog>
                <Container>
                    <Row>
                    {BlogBox}
                    </Row>
                </Container>
            </MainBlog>
        )    
    }
}

export default Blog
