import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image'
import { Button } from "./Button";
import {ImLocation}  from 'react-icons/im'

const Destinations=({heading})=>{

  const data = useStaticQuery(graphql`
  query MyQuery {
    allDestinationsJson {
      edges {
        node {
          alt
          button
          name
          img {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
    `)

function getDestinations(data) {
const destinationsArr=[]

data.allDestinationsJson.edges.forEach((item, index)=>{
    destinationsArr.push(
        <ProductCard key={index}>
            <ProductImg  src={item.node.img.childImageSharp.fluid.src}
            fluid={item.node.img.childImageSharp.fluid}
            alt={item.node.alt}
             />
             <ProductInfo >
              <TextWrap>
                <ImLocation />
                <ProductTitle>{item.node.name}</ProductTitle>
              </TextWrap>
              <Button to ='/trips' css={`position: absolute;  padding: 8px; top:450px; align-items: center; font-size:14px; color:black; background:white; borderRadius: 15px;`}>{item.node.button}</Button>
             </ProductInfo>
        </ProductCard>
    )
})
  return destinationsArr 
}
    return(
      <>
<DestinationsContainer>
    <DestinationsHeading>{heading}</DestinationsHeading>
    <DestinationsWrapper>{getDestinations(data)}</DestinationsWrapper>
</DestinationsContainer>
</>
    )
  } 

export default Destinations

 const DestinationsContainer= styled.div`
 min-height: 100vh;
 padding: 5rem calc((100vw - 1300px)/2)
 background: red;
 color:#fff;
 margin-top: 5%;
 `
 const DestinationsHeading= styled.div`
 font-size: clamp(1.2rem, 5vw, 3rem);
 text-align: center;
 color:#000;
 `
 const DestinationsWrapper= styled.div`  
 display:grid;
 grid-template-columns:repeat(4, 1fr);
 grid-gap: 10px;
 justify-content:center;
 padding: 0 1rem;
 margin-buttom:1%;
 @media acreen and(max-width: 1200px){
  grid-template-columns: 1fr;
 }
 
 @media acreen and(max-width: 868px){
  grid-template-columns: 1fr ;
 }
 
 `
 const ProductCard= styled.div`
 line-height:2;
 width:100%;
 hight:500px;
 position: relative;
 border-radius:10px;
 transition: 0.2s ease;
 margin-top: 15%;
 `

 const ProductImg = styled(Img)`
 height: 100%;
 max-width:100%;
 position: relative;
 border-radius:10px;
 filter: brightness(70%);
 transition: 0.4s cubic-bezier(0.075, 0.82, 0.165,1);
 
 &:hover{
  filter:brightness(100%)
 }
 `

 const ProductInfo= styled.div`
 display:flex;
 flex-direction:column;
 alighn-items: flex-start;
 padding: 0 2rem;


 @media acreen and(max-width: 280px){
  padding: 0 1rem;
 }
 ` 
 const TextWrap= styled.div`
 display: flex;
 align-items:center;
 position: absolute;
 top:375px
 
 
 
 ` 
 const ProductTitle= styled.div`
 font-weight: 400;
 font-size:1rem;
 margin-left: 0.5 rem;
 ` 
