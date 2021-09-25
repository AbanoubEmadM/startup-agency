import React from 'react'
import {Container , Col ,Row} from 'react-bootstrap'
import { ContactUs ,Heading , Desc , Input,Submit} from './style'
const Contact = () => {
    return (
    <Container>
        <ContactUs>
            <Heading>Subscribe to our Blog</Heading>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elitsed<br/> eiusmod tempor incididunt labore dolore.</Desc>
            <div>
            <Input type="text" placeholder="Enter your email address"/>
            <div></div>
            <Submit>Submit</Submit>
            </div>
        </ContactUs>
    </Container>    
    )
}

export default Contact
