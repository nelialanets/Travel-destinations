import React from 'react'
import styled from 'styled-components'
import {GiEarthAmerica} from 'react-icons/gi'
import {MdAirplanemodeActive, MdTimer} from 'react-icons/gi'
import {FaMoneyCheck} from 'react-icons/fa'


    const StatsData = [

        {
            icon:(<GiEarthAmerica />),
            title: "Over 100 Destinations",
            desc: "Explore Your Horisonts",
        },
        {
            icon:(<MdAirplanemodeActive />),
            title: "Over 1000 trips completed last year",
            desc: "Explore Your Horisonts",
        },
        {
            icon:(<MdTimer />),
            title: "Fast Support",
            desc: "Access to over support team 24/7"
        },
        {
            icon:(<FaMoneyCheck />),
            title: "Best Deals",
            desc: "We offer best prices",
        },
    ]

const Stats =() => {
  return (
   <StatsComponents>
    <Heading> Why US </Heading>
        <Wrapper>

            {StatsData.map((item,index)=>{
                return(
                    <StatsBox key={index}>
                    <Icon>{item.icon}</Icon>
                    <Title>{item.title}</Title>
                    <Description>{item.desc}</Description>
                    </StatsBox>
                )
            })}
        </Wrapper>
  

   </StatsComponents>
  )
}

export default Stats


const StatsComponents =styled.div`
width: 100%;
background:#fff;
color:#000;
display:flex;
flex-direction:column;
justify-content:center;
padding:4rem calc((100vw-1300)/2)

`
const Heading =styled.h1`
text-aling: center;
font-size: clamp(1.5 rem, 5vw, 2rem);
margin-bottom:3rem;
padding: 0 2rem;


`
const Wrapper =styled.div`
display: grid;
grid-template-columns:repeat(4, 1fr);
grid-gap: 10 px;

@media-screen and( max-width:768px)
{
    grid-template-columns:  1fr
}

@media-screen and( max-width:500px)
{
    grid-template-columns:  1fr
}

`
const StatsBox = styled.div``
const Icon = styled.div``
const Title= styled.div``
const Description= styled.div``
