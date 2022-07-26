import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"

const Destinations=()=>{

    const data = useStaticQuery(graphql`
    query{
        allDestinationsJson{
            edges {
              node {
                alt
                button
                name
                img {
                  childrenImageSharp {
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
        <div key={index}>
            <StaticImage  src={item.node.img.childrenImageSharp.fluid.src}
            fluid={item.node.img.childrenImageSharp.fluid}
             />
        </div>
    )
})
  return destinationsArr 
}



    return(
<DestinationsContainer>
    <DestinationsHeading>Headind</DestinationsHeading>
    <DestinationsWrapper>{getDestinations(data)}</DestinationsWrapper>
</DestinationsContainer>

    )
}

export default Destinations

 const DestinationsContainer= styled.div`
 min-height: 100vh;
 padding: 5rem calc((100vw - 1300px)/2)
 background: red;
 color:#fff;
 `
 const DestinationsHeading= styled.div`
 font-size: clamp(1.2rem, 5vw, 3rem);
 text-align: center;
 margin-buttom:5rem;
 color:#000;
 `
 const DestinationsWrapper= styled.div``
