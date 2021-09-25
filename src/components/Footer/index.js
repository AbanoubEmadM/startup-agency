import React from 'react'
import Logo from '../../images/logo.svg'
import {List , Li} from './style'
const Footer = () => {
    return (
        <div className="text-center">
            <img src={Logo}/>
            <List>
                <Li>Home</Li>
                <Li>Adversite</Li>
                <Li>Support</Li>
                <Li>Marketing</Li>
                <Li>Contact</Li>
            </List>
            <p>Copyright by 2021 RedQ, Inc</p>
        </div>
    )
}

export default Footer
