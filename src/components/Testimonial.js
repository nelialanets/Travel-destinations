import React from 'react'
import styled from 'styled-components'
import Img from "gatsby-image"
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
import { FaRegLightbulb } from 'react-icons/fa'
import { useStaticQuery,graphql } from 'gatsby'


export default function Testimonial() {

  const data=useStaticQuery(graphql`
    query {
        allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, 
          name: {in: ["portrait1", "portrait2"]}}) {
          edges {
            node {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }

`) 
  return (
    <TestimonialsContainer>
        <TopLine>Testimonials</TopLine>
        <Description> What People are saying</Description>
        <ContantWraper>
            <ColunmOne>
            <Testimonials>
                <IoMdCheckmarkCircleOutline css={`
                color: #f9b19b;
                font-size:2rem;
                margin_button:1 rem;
                
                `} />
                <h3>Nafania</h3>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used 
                to demonstrate the visual form of a document or a typeface without relying on meaningful content. 
                Lorem ipsum may be used as a placeholder before final copy is available</p>
            </Testimonials>
            <Testimonials>
                <FaRegLightbulb css={`
                color: #3fffa8;
                font-size:2rem;
                margin_button:1 rem;
                
                `}/>
                <h3>Living Life</h3>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used 
                to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                 Lorem ipsum may be used as a placeholder before final copy is available</p>
            </Testimonials>
            </ColunmOne>
            <Colunmn2>
            {data.allFile.edges.map((image, key)=>(
                 <Images key={key} fluid={image.node.childImageSharp.fluid} />
            ))}

            </Colunmn2>
        </ContantWraper>
    </TestimonialsContainer>
  )
}

const TestimonialsContainer = styled.div`
width: 100%;
background:#fcfcfc;
color: #000;
padding 5rem calc((100vw-1300px)/2)
height:100%;
`
const TopLine =styled.p`
color:black;
font-size:3rem;
padding-left:2rem;
margin-bottom: 0.75rem;
`
const Description =styled.p`
text-align: start;
padding-left: 2rem;
margin-bottom: 4rem;
font-size:2rem;
color: orange;
font-weight:400px;
`
const ContantWraper =styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
padding: 0 2rem;
@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
}
`
const ColunmOne=styled.div`
display: grid;
grid-template-rows: 1fr 1fr;
`

const Testimonials = styled.div`
width: 80%;
padding-top: 1rem;
padding-right: 2rem;

h3{
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
}
p{
    color:#3b3b3b;
}

`
const Colunmn2=styled.div`
display: grid;
grid-template-columns:1fr 1fr;
margin-top: 2rem;
grid-gap: 10px;
@medi screen and(max-width: 500px){
    grid-template-columns: 1fr;
}

`
const Images= styled(Img)`
border-radius: 10px;
height: 100%;

`

