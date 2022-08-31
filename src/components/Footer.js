import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <FooterContainer>
        <FooterInfo>
            <ContactInfo>
              <ContactTitle>Contact:</ContactTitle>
              <ContactDitales>


              </ContactDitales>

            </ContactInfo>
            
        </FooterInfo>
        <FooterLogo>

        </FooterLogo>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
width: 100%;
background:black;
display: felx;
flex-directions:column;
color: white;
padding 10rem calc((100vw-1300px)/2)
height:100%;
margin-top:3%;
`
const FooterInfo = styled.div`
pading: 50%;
margin: 50px;
hight: 100%;

`
const ContactInfo= styled.div``
const ContactTitle = styled.h2``
const ContactDitales = styled.p``

const FooterLogo = styled.img``

